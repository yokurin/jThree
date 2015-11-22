import GeneraterInfoChunk = require("./GeneraterInfoChunk");
import RendererBase = require("../RendererBase");
/**
 * Provides abstraction for texture generation.
 * By overriding, it is able to manage texture buffer in your way.
 */
class GeneraterBase {
	protected parentRenderer: RendererBase;

	constructor(parent: RendererBase) {
		this.parentRenderer = parent;
	}

	/**
	 * Generate texture with provided arguments.
	 * This method is intended for being overriden.
	 */
	public generate(name:string,texInfo: GeneraterInfoChunk) {

	}
}

export = GeneraterBase;
