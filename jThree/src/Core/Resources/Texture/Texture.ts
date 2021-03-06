import TextureWrapper from "./TextureWrapper";
import Canvas from "../../Canvas/Canvas";
import TextureBase from "./TextureBase";
type ImageSource = HTMLCanvasElement|HTMLImageElement|ImageData|ArrayBufferView;

class Texture extends TextureBase {
  constructor(source: ImageSource, textureName: string) {
    super(textureName);
    this.imageSource = source;
  }

  private imageSource: ImageSource = null;

  public get ImageSource(): ImageSource {
    return this.imageSource;
  }

  public set ImageSource(img: ImageSource) {
    this.imageSource = img;
    this.each((v) => (<TextureWrapper>v).init(true));
    this.generateMipmapIfNeed();
  }

  protected getInstanceForRenderer(canvas: Canvas): TextureWrapper {
    var textureWrapper = new TextureWrapper(canvas, this);
    return textureWrapper;
  }

}

export default Texture;
