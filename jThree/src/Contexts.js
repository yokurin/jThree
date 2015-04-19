var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * jThree most basic module
 */
var jThree;
(function (jThree) {
    var JThreeObject = jThree.Base.jThreeObject;
    /**
     * Base class for wrapping WebGLRenderingContext
     */
    var GLContextWrapperBase = (function (_super) {
        __extends(GLContextWrapperBase, _super);
        function GLContextWrapperBase() {
            _super.apply(this, arguments);
        }
        /**
         * Check gl error, and abort if error has been occured.
         */
        GLContextWrapperBase.prototype.CheckErrorAsFatal = function () {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Create WebGLBuffer
         * @returns {The new buffer reference that has been created.}
         */
        GLContextWrapperBase.prototype.CreateBuffer = function () {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Bind the WebGLBuffer
         * @param target target buffer you want to bind
         * @param buffer the buffer you want to bind
         */
        GLContextWrapperBase.prototype.BindBuffer = function (target, buffer) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Store data to buffer
         * @param target target type you want to store data
         * @param array data source array
         * @param usage type how to use data source
         */
        GLContextWrapperBase.prototype.BufferData = function (target, array, usage) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Unbind buffer
         * @param target the buffer type you want to unbind
         */
        GLContextWrapperBase.prototype.UnbindBuffer = function (target) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Set the clear color it will be used when you call Clear()
         * @param red red color value [0,1]
         * @param green green color value [0,1]
         * @param blue blue color value [0,1]
         * @param alpha alpha color value [0,1]
         */
        GLContextWrapperBase.prototype.ClearColor = function (red, green, blue, alpha) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Clear buffers
         * @param mask type of buffer you want to clear
         */
        GLContextWrapperBase.prototype.Clear = function (mask) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Create new Shader
         * @param flag the shader type you want to create
         * @returns {new shader}
         */
        GLContextWrapperBase.prototype.CreateShader = function (flag) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Delete passed shader
         * @param shader the shader you want to delete
         */
        GLContextWrapperBase.prototype.DeleteShader = function (shader) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Store shader source
         * @param shader reference you want to be stored
         * @param src shader source code
         */
        GLContextWrapperBase.prototype.ShaderSource = function (shader, src) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Compile shader source
         * @param shader shader reference you want to be compiled
         */
        GLContextWrapperBase.prototype.CompileShader = function (shader) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Create new program
         * @returns {created program}
         */
        GLContextWrapperBase.prototype.CreateProgram = function () {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Attach shader to program
         * @param program the program you want to be attached
         * @param shader the shader you want to attach
         */
        GLContextWrapperBase.prototype.AttachShader = function (program, shader) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Link program
         * @param program the program you want to link
         */
        GLContextWrapperBase.prototype.LinkProgram = function (program) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Use program
         * @param program the program you want to use
         */
        GLContextWrapperBase.prototype.UseProgram = function (program) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Get attribute variable location from program
         * @param program the program you want to locate attribute variable
         * @param name attribute variable name
         * @returns {attribute variable location}
         */
        GLContextWrapperBase.prototype.GetAttribLocation = function (program, name) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Enable vartex attribute array
         * @param attribNumber the attribute variable location you want to enable vertex attribute array
         */
        GLContextWrapperBase.prototype.EnableVertexAttribArray = function (attribNumber) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Pass buffer to attribute variable.
         * @param attribLocation attribute variable location
         * @param sizePerVertex element count per vertex
         * @param elemType the variable type you will pass
         * @param normalized is this normalized or not(ALWAYS should be false)
         * @param stride stride in buffer array
         * @param offset offset of buffer array
         */
        GLContextWrapperBase.prototype.VertexAttribPointer = function (attribLocation, sizePerVertex, elemType, normalized, stride, offset) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Draw without index
         * @param drawType primitive topology type
         * @param offset vertex array offset
         * @param length count of the vertex you want to draw.
         */
        GLContextWrapperBase.prototype.DrawArrays = function (drawType, offset, length) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Flush drawing
         */
        GLContextWrapperBase.prototype.Flush = function () {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Finish drawing
         */
        GLContextWrapperBase.prototype.Finish = function () {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Delete buffer
         * @param target the buffer you want to delete
         */
        GLContextWrapperBase.prototype.DeleteBuffer = function (target) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Delete program
         * @param target the program you want to delete.
         */
        GLContextWrapperBase.prototype.DeleteProgram = function (target) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Get uniform variable location
         * @param target the program you want to locate uniform variable
         * @param name the name of uniform variable
         */
        GLContextWrapperBase.prototype.GetUniformLocation = function (target, name) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Pass matrix as uniform variable
         * @param webGlUniformLocation uniform variable location
         * @param matrix matrix you want to pass
         */
        GLContextWrapperBase.prototype.UniformMatrix = function (webGlUniformLocation, matrix) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        /**
         * Set viewport configure
         * @param x X of left-bottom screen coordinate
         * @param y Y of left-bottom screen coordinate
         * @param width width of viewport
         * @param height height of viewport
         */
        GLContextWrapperBase.prototype.ViewPort = function (x, y, width, height) {
            throw new jThree.Exceptions.AbstractClassMethodCalledException();
        };
        return GLContextWrapperBase;
    })(JThreeObject);
    jThree.GLContextWrapperBase = GLContextWrapperBase;
    var WebGLWrapper = (function (_super) {
        __extends(WebGLWrapper, _super);
        function WebGLWrapper(gl) {
            _super.call(this);
            this.gl = gl;
        }
        WebGLWrapper.prototype.CheckErrorAsFatal = function () {
            var ec = this.gl.getError();
            if (ec !== WebGLRenderingContext.NO_ERROR) {
                alert("WebGL error was occured:{0}".format(ec));
            }
        };
        WebGLWrapper.prototype.CreateBuffer = function () {
            this.CheckErrorAsFatal();
            return this.gl.createBuffer();
        };
        WebGLWrapper.prototype.BindBuffer = function (target, buffer) {
            this.CheckErrorAsFatal();
            this.gl.bindBuffer(target, buffer);
        };
        WebGLWrapper.prototype.UnbindBuffer = function (target) {
            this.CheckErrorAsFatal();
            this.gl.bindBuffer(target, null);
        };
        WebGLWrapper.prototype.DeleteBuffer = function (target) {
            this.CheckErrorAsFatal();
            this.gl.deleteBuffer(target);
        };
        WebGLWrapper.prototype.BufferData = function (target, array, usage) {
            this.CheckErrorAsFatal();
            this.gl.bufferData(target, array, usage);
        };
        WebGLWrapper.prototype.ClearColor = function (red, green, blue, alpha) {
            this.CheckErrorAsFatal();
            this.gl.clearColor(red, green, blue, alpha);
        };
        WebGLWrapper.prototype.Clear = function (mask) {
            this.CheckErrorAsFatal();
            this.gl.clear(mask);
        };
        WebGLWrapper.prototype.CreateShader = function (flag) {
            this.CheckErrorAsFatal();
            return this.gl.createShader(flag);
        };
        WebGLWrapper.prototype.DeleteShader = function (shader) {
            this.CheckErrorAsFatal();
            this.gl.deleteShader(shader);
        };
        WebGLWrapper.prototype.ShaderSource = function (shader, src) {
            this.CheckErrorAsFatal();
            this.gl.shaderSource(shader, src);
        };
        WebGLWrapper.prototype.CompileShader = function (shader) {
            this.CheckErrorAsFatal();
            this.gl.compileShader(shader);
            if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
                //TODO 適切なエラー処理
                alert(this.gl.getShaderInfoLog(shader));
            }
            else {
                console.log("compile success");
            }
        };
        WebGLWrapper.prototype.CreateProgram = function () {
            this.CheckErrorAsFatal();
            return this.gl.createProgram();
        };
        WebGLWrapper.prototype.AttachShader = function (program, shader) {
            this.CheckErrorAsFatal();
            this.gl.attachShader(program, shader);
        };
        WebGLWrapper.prototype.LinkProgram = function (program) {
            this.CheckErrorAsFatal();
            this.gl.linkProgram(program);
            if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
                alert(this.gl.getProgramInfoLog(program));
            }
            else {
                console.log("link success");
            }
        };
        WebGLWrapper.prototype.UseProgram = function (program) {
            this.CheckErrorAsFatal();
            this.gl.useProgram(program);
        };
        WebGLWrapper.prototype.GetAttribLocation = function (program, name) {
            this.CheckErrorAsFatal();
            return this.gl.getAttribLocation(program, name);
        };
        WebGLWrapper.prototype.EnableVertexAttribArray = function (attribNumber) {
            this.CheckErrorAsFatal();
            this.gl.enableVertexAttribArray(attribNumber);
        };
        WebGLWrapper.prototype.VertexAttribPointer = function (attribLocation, sizePerVertex, elemType, normalized, stride, offset) {
            this.CheckErrorAsFatal();
            this.gl.vertexAttribPointer(attribLocation, sizePerVertex, elemType, normalized, stride, offset);
        };
        WebGLWrapper.prototype.DrawArrays = function (drawType, offset, length) {
            this.CheckErrorAsFatal();
            this.gl.drawArrays(drawType, offset, length);
        };
        WebGLWrapper.prototype.Flush = function () {
            this.CheckErrorAsFatal();
            this.gl.flush();
        };
        WebGLWrapper.prototype.Finish = function () {
            this.CheckErrorAsFatal();
            this.gl.finish();
        };
        WebGLWrapper.prototype.DeleteProgram = function (target) {
            this.CheckErrorAsFatal();
            this.gl.deleteProgram(target);
        };
        WebGLWrapper.prototype.GetUniformLocation = function (target, name) {
            this.CheckErrorAsFatal();
            return this.gl.getUniformLocation(target, name);
        };
        WebGLWrapper.prototype.UniformMatrix = function (webGlUniformLocation, matrix) {
            this.CheckErrorAsFatal();
            this.gl.uniformMatrix4fv(webGlUniformLocation, false, matrix.rawElements);
        };
        WebGLWrapper.prototype.ViewPort = function (x, y, width, height) {
            this.CheckErrorAsFatal();
            this.gl.viewport(x, y, width, height);
        };
        return WebGLWrapper;
    })(GLContextWrapperBase);
    jThree.WebGLWrapper = WebGLWrapper;
    (function (BufferTargetType) {
        BufferTargetType[BufferTargetType["ArrayBuffer"] = 34962] = "ArrayBuffer";
        BufferTargetType[BufferTargetType["ElementArrayBuffer"] = 34963] = "ElementArrayBuffer"; //ELEMENT_ARRAY_BUFFER
    })(jThree.BufferTargetType || (jThree.BufferTargetType = {}));
    var BufferTargetType = jThree.BufferTargetType;
    (function (ClearTargetType) {
        ClearTargetType[ClearTargetType["ColorBits"] = 16384] = "ColorBits";
        ClearTargetType[ClearTargetType["DepthBits"] = 256] = "DepthBits";
        ClearTargetType[ClearTargetType["StencilBits"] = 1024] = "StencilBits"; //STENCIL_BUFFER_BIT
    })(jThree.ClearTargetType || (jThree.ClearTargetType = {}));
    var ClearTargetType = jThree.ClearTargetType;
    (function (ShaderType) {
        ShaderType[ShaderType["VertexShader"] = 35633] = "VertexShader";
        ShaderType[ShaderType["FragmentShader"] = 35632] = "FragmentShader"; //FRAGMENT_SHADER
    })(jThree.ShaderType || (jThree.ShaderType = {}));
    var ShaderType = jThree.ShaderType;
    (function (BufferUsageType) {
        BufferUsageType[BufferUsageType["StaticDraw"] = 35044] = "StaticDraw";
        BufferUsageType[BufferUsageType["StreamDraw"] = 35040] = "StreamDraw";
        BufferUsageType[BufferUsageType["DynamicDraw"] = 35048] = "DynamicDraw"; //WebGLRenderingContext.DYNAMIC_DRAW
    })(jThree.BufferUsageType || (jThree.BufferUsageType = {}));
    var BufferUsageType = jThree.BufferUsageType;
    (function (ElementType) {
        ElementType[ElementType["Float"] = 5126] = "Float";
        ElementType[ElementType["UnsignedByte"] = 5121] = "UnsignedByte";
        ElementType[ElementType["Short"] = 5122] = "Short";
        ElementType[ElementType["UnsignedShort"] = 5123] = "UnsignedShort";
        ElementType[ElementType["UnsignedInt"] = 5125] = "UnsignedInt";
        ElementType[ElementType["Int"] = 5124] = "Int"; //WebGLRenderingContext.INT
    })(jThree.ElementType || (jThree.ElementType = {}));
    var ElementType = jThree.ElementType;
    (function (DrawType) {
        DrawType[DrawType["Triangles"] = 4] = "Triangles";
    })(jThree.DrawType || (jThree.DrawType = {}));
    var DrawType = jThree.DrawType;
})(jThree || (jThree = {}));
//# sourceMappingURL=Contexts.js.map