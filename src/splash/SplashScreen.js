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
    this.add.text(150, 150, "Splashscreen", {
      font: "112px Courier",
      fill: "#555555"
    }) // placeholder, @TODO remove
    // @TODO loading bar, splashscreen graphics...
  }
}

export default SplashScreen
