import Vector3 from "../../../Math/Vector3";
import IApplyMaterialArgument from "../../Materials/Base/IApplyMaterialArgument";
import BasicMaterial from "../../Materials/Base/BasicMaterial";
import PrimitiveRegistory from "../../Geometries/Base/PrimitiveRegistory";
import ContextComponents from "../../../ContextComponents";
import JThreeContext from "../../../JThreeContext";
import LightBase from "./../LightBase";
import Matrix from "../../../Math/Matrix";

/**
 * Point Light
 */
class PointLight extends LightBase {
  constructor() {
    super();
    this.Geometry = JThreeContext.getContextComponent<PrimitiveRegistory>(ContextComponents.PrimitiveRegistory).getPrimitive("sphere");
    const diffuseMaterial = new BasicMaterial(require("../../Materials/BuiltIn/Light/Diffuse/PointLight.html"));
    diffuseMaterial.on("apply", (matArg: IApplyMaterialArgument) => {
      this.Transformer.Scale = new Vector3(this.distance, this.distance, this.distance);
      diffuseMaterial.materialVariables = {
        lightColor: this.Color.toVector().multiplyWith(this.intensity),
        decay: this.decay,
        dist: this.distance,
        lightPosition: Matrix.transformPoint(matArg.camera.viewMatrix, this.Position)
       };
    });
    const specularMaterial = new BasicMaterial(require("../../Materials/BuiltIn/Light/Specular/PointLight.html"));
    specularMaterial.on("apply", (matArg: IApplyMaterialArgument) => {
      this.Transformer.Scale = new Vector3(this.distance, this.distance, this.distance);
      specularMaterial.materialVariables = {
        lightColor: this.Color.toVector().multiplyWith(this.intensity),
        decay: this.decay,
        dist: this.distance,
        lightPosition: Matrix.transformPoint(matArg.camera.viewMatrix, this.Position)
      };
    });
    this.addMaterial(diffuseMaterial);
    this.addMaterial(specularMaterial);
  }

  public distance: number = 0.0;

  public intensity: number = 1.0;

  public decay: number = 1;
}

export default PointLight;
