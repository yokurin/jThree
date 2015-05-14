import CanvasManager = require("../../Core/CanvasManager");
import GomlTreeNodeBase = require("../GomlTreeNodeBase");
import JThreeContext = require("../../Core/JThreeContext");
import JThreeContextProxy = require("../../Core/JThreeContextProxy");
import Scene = require("../../Core/Scene");
import $ = require("jquery");
import GomlLoader = require("../GomlLoader");
import Color4 = require("../../Base/Color/Color4");
class GomlTreeRdrNode extends GomlTreeNodeBase
{
    canvasManager:CanvasManager;

    targetCanvas:HTMLCanvasElement;

    constructor(elem:Element,loader:GomlLoader,parent:GomlTreeNodeBase) {
        super(elem,loader,parent);
        var test = $(elem);
        var jqueryTargetCanvas = $("<canvas></canvas>");
        $(this.Frame).append(jqueryTargetCanvas);
        this.targetCanvas=<HTMLCanvasElement>jqueryTargetCanvas[0];
        this.targetCanvas.classList.add("x-j3-c-" + this.ID);
        this.canvasManager = CanvasManager.fromCanvas(this.targetCanvas);
        this.canvasManager.ClearColor=this.ClearColor;
        this.targetCanvas.width=this.Width;
        this.targetCanvas.height=this.Height;
        var context=JThreeContextProxy.getJThreeContext();
        context.addRenderer(this.canvasManager);
    }

        private clearColor:Color4;
        get ClearColor():Color4
        {
          this.clearColor=this.clearColor||Color4.parseColor(this.element.getAttribute('clearColor')||'#0FF');
          return this.clearColor;
        }

        private width:number;
        get Width():number{
          this.width=this.width||parseInt(this.element.getAttribute('width'))||300;
          return this.width;
        }

        private height:number;
        get Height():number{
          this.height=this.height||parseInt(this.element.getAttribute('height'))||300;
          return this.height;
        }

    get Frame(): string {
        return this.element.getAttribute("frame")||"body";
    }

}

export=GomlTreeRdrNode;