import Phaser from "phaser"
import config from "../config/config"

class Game extends Phaser.Scene {
  constructor() {
    super({
      key: config.sceneKeys.GAME,
      active: false
    })
  }

  create() {}
}

export default Game
