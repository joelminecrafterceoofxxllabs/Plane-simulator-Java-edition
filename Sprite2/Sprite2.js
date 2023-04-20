/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium2", "./Sprite2/costumes/kostium2.svg", {
        x: -153,
        y: 48
      }),
      new Costume("kostium3", "./Sprite2/costumes/kostium3.svg", {
        x: -153,
        y: 48
      }),
      new Costume("kostium4", "./Sprite2/costumes/kostium4.svg", {
        x: -153,
        y: 48
      }),
      new Costume("kostium5", "./Sprite2/costumes/kostium5.svg", {
        x: -153,
        y: 48
      }),
      new Costume("kostium6", "./Sprite2/costumes/kostium6.svg", {
        x: -153,
        y: 48
      }),
      new Costume("kostium7", "./Sprite2/costumes/kostium7.svg", {
        x: -153,
        y: 48
      }),
      new Costume("kostium8", "./Sprite2/costumes/kostium8.svg", {
        x: -153,
        y: 48
      }),
      new Costume("kostium9", "./Sprite2/costumes/kostium9.svg", {
        x: -153,
        y: 48
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "tick" }, this.whenIReceiveTick)
    ];

    this.vars.id = 0;
  }

  *whenGreenFlagClicked() {
    this.x = 0;
    this.visible = true;
    this.vars.id = 2;
    this.createClone();
    this.vars.id = 1;
    this.createClone();
    this.vars.id = 0;
  }

  *whenIReceiveTick() {
    if (this.toNumber(this.stage.vars.cameraType) === 2) {
      this.direction = this.toNumber(
        this.sprites["Sprite1"].vars.actualZRotation
      );
    } else {
      this.direction = 180;
    }
    this.goto(0, 0);
    this.move(
      (((this.toNumber(this.vars.id) -
        this.toNumber(this.stage.vars.yPlane) * 0.05 +
        1.5) %
        3) -
        1.5) *
        -30
    );
    this.direction -= 90;
    if (
      this.compare(
        -1,
        this.toNumber(this.vars.id) +
          3 *
            Math.round(
              (this.toNumber(this.stage.vars.yPlane) * 0.05 -
                this.toNumber(this.vars.id)) /
                3
            )
      ) < 0 &&
      this.compare(
        this.toNumber(this.vars.id) +
          3 *
            Math.round(
              (this.toNumber(this.stage.vars.yPlane) * 0.05 -
                this.toNumber(this.vars.id)) /
                3
            ),
        8
      ) < 0
    ) {
      this.visible = true;
      this.effects.ghost = Math.abs(
        (((this.toNumber(this.vars.id) -
          this.toNumber(this.stage.vars.yPlane) * 0.05 +
          1.5) %
          3) -
          1.5) *
          -75
      );
      this.costume =
        this.toNumber(this.vars.id) +
        1 +
        3 *
          Math.round(
            (this.toNumber(this.stage.vars.yPlane) * 0.05 -
              this.toNumber(this.vars.id)) /
              3
          );
    } else {
      this.visible = false;
    }
  }
}
