import Phaser from "phaser"
import config from "../config/config"
import ButtonFactory from "../ui/ButtonFactory"

class MainMenu extends Phaser.Scene {
  constructor() {
    super({
      key: config.sceneKeys.MAIN_MENU,
      active: true
    })
  }

  onPlay() {}

  create() {
    ButtonFactory.createButton(this, {
      x: 250, // @TODO real coords
      y: 250, // @TODO real coords
      text: "Play", // @TODO translations
      callback: this.onPlay
    })
  }
}

export default MainMenu
