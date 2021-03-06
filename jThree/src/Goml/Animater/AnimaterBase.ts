import JThreeObjectWithID from "../../Base/JThreeObjectWithID";
import GomlAttribute from "../GomlAttribute";
import EasingFunctionBase from "../Easing/EasingFunctionBase";
import {Action0} from "../../Base/Delegates";

class AnimaterBase extends JThreeObjectWithID {
  protected targetAttribute: GomlAttribute;

  protected onComplete: Action0;

  protected duration: number;

  protected beginTime: number;

  protected easingFunction: EasingFunctionBase;

  protected beginValue: any;

  protected endValue: any;

  constructor(targetAttribute: GomlAttribute, begintime: number, duration: number, beginValue: any, endValue: any, easing: EasingFunctionBase, onComplete?: Action0) {
    super();
    this.targetAttribute = targetAttribute;
    this.beginTime = begintime;
    this.duration = duration;
    this.onComplete = onComplete;
    this.easingFunction = easing;
    this.beginValue = this.targetAttribute.Converter.toObjectAttr(beginValue);
    this.endValue = this.targetAttribute.Converter.toObjectAttr(endValue);
  }

  /**
  * Upate
  */
  public update(time: number): boolean {
    let progress = (time - this.beginTime) / this.duration;
    const isFinish = progress >= 1;
    progress = Math.min(Math.max(progress, 0), 1); // clamp [0,1]
    this.updateAnimation(progress);
    if (isFinish && typeof this.onComplete === "function") {
      this.onComplete();
    }
    return isFinish;
  }

  /**
   * This methods should be overridden.
   * @param {number} progress [description]
   */
  protected updateAnimation(progress: number): void {
    return;
  }
}

export default AnimaterBase;
