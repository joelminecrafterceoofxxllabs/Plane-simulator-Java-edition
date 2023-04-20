/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite3/costumes/kostium1.svg", {
        x: 37,
        y: 3
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "tick" }, this.whenIReceiveTick)
    ];
  }

  *whenIReceiveTick() {
    this.direction = this.toNumber(this.stage.vars.speed) * 150;
  }
}
