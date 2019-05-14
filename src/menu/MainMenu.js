import Phaser from "phaser"
import config from "../config/config"

class MainMenu extends Phaser.Scene {
  constructor() {
    super({
      key: config.sceneKeys.MAIN_MENU,
      active: true
    })
  }

  create() {
    // @TODO menu UI
  }
}

export default MainMenu
