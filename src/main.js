// libs
import Phaser from "phaser"

// app components
import SplashScreen from "./splash/SplashScreen"
import MainMenu from "./menu/MainMenu"

const windowWidth = window.screen.availWidth
const windowHeight = window.screen.availHeight

const config = {
  type: Phaser.AUTO,
  width: windowWidth,
  height: windowHeight,
  // @TODO add physics
  scene: [SplashScreen, MainMenu]
}

export const game = new Phaser.Game(config)
