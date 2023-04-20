/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite7/costumes/kostium1.svg", {
        x: 101.31533813476565,
        y: 55.67965968155167
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "restart" },
        this.whenIReceiveRestart
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "f" }, this.whenKeyFPressed)
    ];
  }

  *whenIReceiveRestart() {
    for (let i = 0; i < 50; i++) {
      this.size = this.size * 0.9 + 9.5;
      this.effects.ghost -= 10;
      yield;
    }
  }

  *whenKeyFPressed() {
    this.goto(0, 0);
    this.effects.ghost = 100;
    this.size = 200;
  }
}
