import LightNodeBase from "./LightNodeBase";
import SceneLight from "../../../../Core/Light/Impl/SceneLight";
import LightBase from "../../../../Core/Light/LightBase";
import GomlAttribute from "../../../GomlAttribute";

class SceneLightNode extends LightNodeBase {
  constructor() {
    super();
    this.attributes.defineAttribute({
      "intensity": {
        value: 1,
        converter: "float",
        onchanged: this._onIntensityAttrChanged.bind(this),
      }
    });
    this.on("update-scene-object", (obj: SceneLight) => {
      this._onIntensityAttrChanged.bind(this)(this.attributes.getAttribute("intensity"));
    });
  }

  protected constructLight(): LightBase {
    return new SceneLight();
  }

  private _onIntensityAttrChanged(attr: GomlAttribute): void {
    if (this.TargetSceneObject) {
      (<SceneLight>this.TargetSceneObject).intensity = attr.Value;
    }
  }
}
export default SceneLightNode;
