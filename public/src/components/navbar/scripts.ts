import component from "../../ts/component"
import Locales from "../../utils/locales"

export default function Navbar() {
  function handleToggleNavbar() {
    const toggleNav = document.getElementsByClassName(
      "navbar__button-menu",
    )[0] as HTMLElement
    const navbar = document.getElementById("navbar") as HTMLElement

    if (!toggleNav || !navbar) {
      return
    }

    toggleNav.addEventListener("click", function () {
      navbar.classList.toggle("active")
    })
  }

  function scrollToSection(e: any) {
    const { id } = e.target

    if (
      ![
        "navbar__start-button",
        "navbar__solutions-button",
        "navbar__contact-button",
      ].includes(id)
    ) {
      return
    }

    const sectionIds: any = {
      "navbar__start-button": "#home",
      "navbar__solutions-button": "#web-solution",
      "navbar__contact-button": "#contact",
    }
    const sectionId = sectionIds[id]
    const section = document.querySelector(sectionId)

    if (!section) {
      return
    }

    section.scrollIntoView({ behavior: "smooth" })
  }

  function handleChangeCurrentApplicationLanguage() {
    const currentLanguage = localStorage.getItem("language")
    const newLanguage = currentLanguage === "pt-BR" ? "en" : "pt-BR"

    localStorage.setItem("language", newLanguage)
    Locales.loadTranslations(newLanguage)
  }

  function waitForNavbarLanguageButton() {
    const navbarLanguageButton = document.getElementById(
      "navbar__language-button",
    )

    if (navbarLanguageButton) {
      navbarLanguageButton.addEventListener(
        "click",
        handleChangeCurrentApplicationLanguage,
      )
    } else {
      setTimeout(waitForNavbarLanguageButton, 1000)
    }
  }

  waitForNavbarLanguageButton()

  window.addEventListener("touchstart", scrollToSection)
  window.addEventListener("load", handleToggleNavbar)

  component.render("navbar")
}
