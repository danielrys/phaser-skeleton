import Phaser from "phaser"
import config from "../config/config"

class SplashScreen extends Phaser.Scene {
  constructor() {
    super({
      key: config.sceneKeys.SPLASH,
      active: true
    })
  }

  create() {
    // @TODO loading bar, splashscreen graphics...
  }
}

export default SplashScreen
