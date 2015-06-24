precision mediump float;
varying  vec2 v_uv;

uniform sampler2D rb1;
uniform sampler2D rb2;
uniform sampler2D depth;
uniform vec3 c_pos;
uniform vec3 c_dir;

uniform vec3 l_pos[5];
uniform vec4 l_col[5];
uniform mat4 matIP;
uniform float time;
void main(void){
  float d=texture2D(depth,v_uv).r;
  //if(d==1.0)
  //{
  //    gl_FragColor=vec4(0,0,0,0);
  //    return;
  //}
  vec3 posClip=vec3(2.0*v_uv+vec2(-1,-1),d);
  vec3 normal=(texture2D(rb1,v_uv).xyz-vec3(0.5,0.5,0.5))*2.0;
  vec4 position=matIP*vec4(posClip,1);
  position.z=d;
  vec3 p2l=normalize(l_pos[0]-position.xyz);
  float l =dot(p2l,normal);
  float tp=(sin(time/30000.0*6.28)+1.0)/2.0;
  gl_FragColor.rgb=texture2D(rb2,v_uv).xyz;//vec3(texture2D(depth,v_uv).a,0,0);//tp>position.z?vec3(1,0,0):vec3(0,1,0);
  gl_FragColor.a=1.0;
}