/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite4/costumes/kostium1.svg", {
        x: 39,
        y: 40
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "snd" }, this.whenIReceiveSnd),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveSnd() {
    /* TODO: Implement music_playNoteForBeats */ null;
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement music_setInstrument */ null;
  }
}
