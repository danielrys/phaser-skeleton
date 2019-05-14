class ButtonFactory {
  constructor() {}

  static createButton(context, options) {
    const button = context.add.text(options.x, options.y, options.text, {
      font: "50px Courier", // @TODO move to config / general styling file
      fill: "#ff6666", // @TODO move to config / general styling file
      ...options.customStyle
    })

    button.setInteractive()
    button.on("pointerup", options.callback)

    return button
  }
}

export default ButtonFactory
