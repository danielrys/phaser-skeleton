// libs
import Phaser from "phaser"

// app components
import SplashScreen from "./splash/SplashScreen"
import MainMenu from "./menu/MainMenu"
import Game from "./game/Game"

const windowWidth = window.screen.availWidth
const windowHeight = window.screen.availHeight

const config = {
  type: Phaser.AUTO,
  width: windowWidth,
  height: windowHeight,
  scene: [SplashScreen, MainMenu, Game]
  // @TODO add physics
}

export const game = new Phaser.Game(config)
