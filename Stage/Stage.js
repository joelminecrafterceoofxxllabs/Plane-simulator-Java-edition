/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars.xY = 4.847120405366206e-11;
    this.vars.xZ = 0.001745361642210023;
    this.vars.xX = 0.9999996684906944;
    this.vars.yX = -4.828801619310404e-11;
    this.vars.yY = 1.0000000035669256;
    this.vars.yZ = -1.3146339932199728e-10;
    this.vars.zX = -0.0017453616426361608;
    this.vars.zY = 1.314844663023914e-10;
    this.vars.zZ = 0.9999996684625362;
    this.vars.rotcamx = 17.9999999924665;
    this.vars.rotcamy = 135.10000178745668;
    this.vars.xPlane = -0.00006667784440826248;
    this.vars.yPlane = 2.34;
    this.vars.zPlane = 5.000208803953375;
    this.vars.camx = 16.783026721325648;
    this.vars.camy = 10.065424855;
    this.vars.camz = 21.84198978702119;
    this.vars.worldSize = 65;
    this.vars.speed = 3.10030209811616e-19;
    this.vars.cameraType = 1;
    this.vars.breakTerrain = 10;
  }
}
