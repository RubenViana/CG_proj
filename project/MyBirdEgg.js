import {CGFobject, CGFappearance, CGFtexture} from '../lib/CGF.js';
import { MySphere } from './MySphere.js';

/**
 * MyBirdEgg
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyBirdEgg extends CGFobject {
	constructor(scene, x, y, z) {
		super(scene);

        this.semiSphere = new MySphere(this.scene, 10, 10, 1, 2);

        this.eggTexture = new CGFappearance(scene);
        this.eggTexture.setAmbient(1, 1, 1, 1.0);
        this.eggTexture.setDiffuse(1, 1, 1, 1.0);
        this.eggTexture.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.eggTexture.setShininess(10.0);
        this.eggTexture.setTexture(new CGFtexture(scene, "images/eggTexture.jpg"));
        this.eggTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.xPos = x;
        this.yPos = y;
        this.zPos = z;
	}

    setCoords(x, y, z){
        this.xPos = x;
        this.yPos = y;
        this.zPos = z;
    }

    display() {

        this.eggTexture.apply();

        this.scene.pushMatrix();
        this.scene.translate(this.xPos, this.yPos, this.zPos);
        this.scene.scale(0.4, 0.4, 0.4);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.semiSphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.xPos, this.yPos, this.zPos);
        this.scene.scale(0.4, 0.7, 0.4);
        this.semiSphere.display();
        this.scene.popMatrix();

    }
}

