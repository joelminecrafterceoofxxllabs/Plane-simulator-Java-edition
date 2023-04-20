/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("FlightSim", "./Sprite10/costumes/FlightSim.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite10/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.timer_GREATER_THAN,
        { VALUE: 1 },
        this.whengreaterthan
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
  }

  *whengreaterthan() {
    this.moveAhead();
    this.visible = true;
    this.effects.ghost = 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
  }
}
