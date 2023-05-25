import "../scss/main.scss"

import Render from "./render"
import Locales from "../utils/locales"

console.log("teste")

document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("language", navigator.language)
  Locales.loadTranslations(navigator.language)
})

Render.sections()
Render.components()
