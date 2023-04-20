/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite5/costumes/kostium1.svg", {
        x: 53,
        y: 20
      }),
      new Costume("kostium2", "./Sprite5/costumes/kostium2.svg", {
        x: 53,
        y: 20
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "c" }, this.whenKeyCPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "costume" },
        this.whenIReceiveCostume
      ),
      new Trigger(Trigger.BROADCAST, { name: "tick" }, this.whenIReceiveTick),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenKeyCPressed() {
    this.stage.vars.cameraType =
      (this.toNumber(this.stage.vars.cameraType) % 2) + 1;
  }

  *whenIReceiveCostume() {
    if (this.toNumber(this.sprites["Sprite1"].vars.wheelsState) === -0.1) {
      this.costume = "kostium2";
    } else {
      this.costume = "kostium1";
    }
  }

  *whenIReceiveTick() {
    if (this.compare(0, this.stage.vars.yY) < 0) {
      this.direction =
        this.toNumber(this.sprites["Sprite1"].vars.storeXRotation) - 90;
    } else {
      this.direction =
        90 - this.toNumber(this.sprites["Sprite1"].vars.storeXRotation);
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "kostium2";
  }
}
