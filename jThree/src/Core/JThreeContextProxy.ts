import JThreeObject=require("../Base/JThreeObject");
import JThreeContext = require("./JThreeContext");
declare function require(string):{getInstanceForProxy():JThreeContext;}
class JThreeContextProxy extends JThreeObject
{
  private static instance:JThreeContext;
  /**
  * Get jThreeContext.
  */
  public static getJThreeContext()
  {
      JThreeContextProxy.instance = JThreeContextProxy.instance || require("./JThreeContext").getInstanceForProxy();
    return JThreeContextProxy.instance;
  }
}

export=JThreeContextProxy;
