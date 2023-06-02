import component from "../../ts/component"
import Locales from "../../utils/locales"

export default function Navbar() {
  function handleScroll() {
    const logoContainer = document.getElementById(
      "logocontainer",
    ) as HTMLElement
    const homeSection = document.getElementById("home") as HTMLElement

    if (!logoContainer || !homeSection) {
      return
    }

    const logoContainerHeight = logoContainer.offsetHeight
    const homeSectionTop = homeSection.offsetTop
    const homeSectionHeight = homeSection.offsetHeight

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop <= homeSectionTop) {
      // Scroll está no topo
      logoContainer.style.width = "600px"
      logoContainer.style.top = "50%"
      logoContainer.style.transform = "translateY(-50%)"
    } else if (scrollTop <= homeSectionTop + homeSectionHeight / 2) {
      // Scroll está na primeira metade da seção Home
      const progress = (scrollTop - homeSectionTop) / (homeSectionHeight / 2)

      const width = 600 + (1 - progress) * (logoContainerHeight - 600)
      const top = 50 - progress * 50

      logoContainer.style.width = `${width}px`
      logoContainer.style.top = `${top}%`
      logoContainer.style.transform = "translateY(-50%)"
    } else {
      // Scroll está na segunda metade da seção Home
      const progress =
        (scrollTop - (homeSectionTop + homeSectionHeight / 2)) /
        (homeSectionHeight / 2)

      const width = 600 + progress * (logoContainerHeight - 600)
      const top = 0 - progress * 50

      logoContainer.style.width = `${width}px`
      logoContainer.style.top = `${top}%`
      logoContainer.style.transform = "translateY(0%)"
    }
  }

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

  window.addEventListener("click", scrollToSection)
  window.addEventListener("touchstart", scrollToSection)

  if (window.innerWidth <= 600) {
    window.addEventListener("touchstart", handleToggleNavbar)
  } else {
    window.addEventListener("load", handleToggleNavbar)
  }

  component.render("navbar")
}
