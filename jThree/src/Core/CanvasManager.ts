import JThreeContext = require("./JThreeContext");
import ContextManagerBase = require("./ContextManagerBase");
import WebGLContextWrapper = require("Wrapper/WebGLContextWrapper");
import ViewPortRenderer = require("./ViewportRenderer");
import Rectangle = require("../Math/Rectangle");
import jThreeObject = require("../Base/JThreeObject");
import JThreeContextProxy = require("./JThreeContextProxy");
import Color4 = require("../Base/Color/Color4");
import RendererBase = require("./RendererBase");
import ClearTargetType = require("../Wrapper/ClearTargetType");
class CanvasManager extends ContextManagerBase {
    public static fromCanvas(canvas: HTMLCanvasElement): CanvasManager {
        var gl: WebGLRenderingContext;
        try {
            gl = <WebGLRenderingContext>(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
            var ext=gl.getExtension("WEBGL_shared_resources");
            var renderer: CanvasManager = new CanvasManager(gl);
            var instance=JThreeContextProxy.getJThreeContext();
            instance.addRenderer(renderer);
            return renderer;
        } catch (e) {
          debugger;
          console.error("Web GL context Generation failed");
            if (!gl) {
              console.error("WebGL Context Generation failed."+e);
                //Processing for this error
            }
        }
    }
    private clearColor:Color4;
    get ClearColor():Color4
    {
      this.clearColor=this.clearColor||new Color4(1,1,1,1);
      return this.clearColor;
    }
    set ClearColor(col:Color4)
    {
      this.clearColor=col||new Color4(1,1,1,1);
    }

    private isDirty:boolean=true;
    get IsDirty():boolean
    {
      return this.isDirty;
    }

    afterRenderAll():void
    {
      this.isDirty=true;
    }

    beforeRender(renderer:RendererBase):void
    {

      if(this.isDirty){
        this.ClearCanvas();
        this.isDirty=false;
      }
    }

    ClearCanvas():void
    {
      this.context.ClearColor(this.ClearColor.R,this.ClearColor.G,this.ClearColor.B,this.ClearColor.A);
      this.context.Clear(ClearTargetType.ColorBits);
    }

    private glContext: WebGLRenderingContext;

    constructor(glContext: WebGLRenderingContext) {
        super();
       // this.enabled = true;
        this.glContext = glContext;
        this.context = new WebGLContextWrapper(this.glContext);
    }

    getDefaultViewport(): ViewPortRenderer {
        return new ViewPortRenderer(this,new Rectangle(20,20,280,280));
    }
}


export=CanvasManager;