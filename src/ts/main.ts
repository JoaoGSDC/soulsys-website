import "../scss/main.scss"

import Render from "./render"
import Locales from "../utils/locales"

document.addEventListener("DOMContentLoaded", () => {
  Locales.loadTranslations(navigator.language)
})

Render.sections()
Render.components()
