﻿import jThreeObjectWithID = require("../Base/JThreeObjectWithID");
import JThreeEvent = require('../Base/JThreeEvent');
import RendererBase = require("./Renderers/RendererBase");
import SceneObject = require("./SceneObject");
import Camera = require("./Camera/Camera");
import AssociativeArray = require('../Base/Collections/AssociativeArray');
import LightBase = require('./Light/LightBase')
import Delegates =require('../Base/Delegates')
import LightRegister = require('./Light/LightRegister');
import PointLight = require("./Light/PointLight");
import DirectionalLight = require("./Light/DirectionalLight");
class Scene extends jThreeObjectWithID {
    constructor() {
        super();
        this.enabled = true;
        this.lightRegister = new LightRegister(this);
        //TODO Remove parameter registration
        var pointParam = PointLight.TypeDefinition;
        var dp = DirectionalLight.TypeDefinition;
        this.lightRegister.addLightType(pointParam.requiredParamCount, pointParam.shaderfuncName, pointParam.shaderfragmentCode, pointParam.typeName);
        this.lightRegister.addLightType(dp.requiredParamCount,dp.shaderfuncName,dp.shaderfragmentCode,dp.typeName);
        console.log(this.lightRegister.ShaderCodeComposer.ShaderCode);
    }

    public enabled: boolean;

    private lightRegister: LightRegister;

    public get LightRegister() {
        return this.lightRegister;
    }

    public update(): void {
        if (!this.enabled) return;//enabled==falseならいらない。
        this.sceneObjects.forEach(v=> v.update());
    }

    public render(): void {
        this.renderers.forEach((r) => {
            r.beforeRender();
            this.lightRegister.updateLightForRenderer();
            r.RenderStageManager.processRender(this,this.sceneObjects);
            r.afterRender();
        });
    }
    
    private rendererChanged:JThreeEvent<RendererBase>=new JThreeEvent<RendererBase>();

    private renderers: RendererBase[] = [];

    public addRenderer(renderer: RendererBase): void {
        this.renderers.push(renderer);
        this.rendererChanged.fire(this,renderer);
    }
    
    public rendererAdded(act:Delegates.Action2<Scene,RendererBase>)
    {
        this.rendererChanged.addListerner(act);
    }
    
    public get Renderers():RendererBase[]
    {
        return this.renderers;
    }

    private sceneObjects: SceneObject[] = [];
   
    
    public addLight(light:LightBase):void
    {
        this.lightRegister.addLight(light);
    }

    public addObject(targetObject: SceneObject): void {
        this.sceneObjects.push(targetObject);
    }

    private cameras: AssociativeArray<Camera>=new AssociativeArray<Camera>();
    
    /**
     * Append the camera to this scene as managed
     */
    public addCamera(camera: Camera) {
        this.cameras.set(camera.ID, camera);
    }
    
    /**
     * Get the camera managed in this scene.
     */
    public getCamera(id: string): Camera {
        return this.cameras.get(id);
    }

    public toString(): string {
        console.log(this);
        return `Scene\nRenderers:\nRendererCount:${this.renderers.length}\nCamera Count:${this.cameras.size}\nSceneObjects:\nSceneObjectCount:${this.sceneObjects.length}\n`;
    }
}

export =Scene;
