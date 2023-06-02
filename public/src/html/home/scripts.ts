import section from "../../ts/section"

export default function Home() {
  /* window.addEventListener("scroll", function () {
    const logoContainer = document.getElementById("logocontainer")

    if (logoContainer) {
      const navbar = document.querySelector("nav") as any
      const navbarHeight = navbar.offsetHeight
      const logoContainerHeight = 160 // Altura original do logocontainer
      const scrollPosition = window.pageYOffset

      // Diminuir o tamanho do logocontainer
      if (scrollPosition < navbarHeight) {
        const scaleFactor = 1 - scrollPosition / navbarHeight
        const newWidth = 160 * scaleFactor
        const newTop = 96 - 64 * scaleFactor
        const newLeft = 32 + 60 * scaleFactor

        logoContainer.style.width = newWidth + "px"
        logoContainer.style.top = newTop + "px"
        logoContainer.style.left = newLeft + "px"
      } else {
        // Seguir a barra de navegação
        logoContainer.style.width = "112px"
        logoContainer.style.top = "36px"
        logoContainer.style.left = "116px"
      }
    }
  }) */

  function teste() {
    const logoContainer = document.getElementById(
      "logocontainer",
    ) as HTMLElement

    const homeSection = document.getElementById("home") as HTMLElement

    if (logoContainer.style.width === "") {
      logoContainer.style.width = "600px"
      logoContainer.style.top = "50%"
    }

    console.log(homeSection.offsetHeight)

    if (parseFloat(logoContainer.style.width) > 112) {
      logoContainer.style.width = `${
        600 - document.documentElement.scrollTop * 1.5
      }px`

      logoContainer.style.position = "absolute"
      logoContainer.style.top = `50%`
    } else if (parseFloat(logoContainer.style.width) === 112) {
      logoContainer.style.width = `${
        600 - document.documentElement.scrollTop * 1.5
      }px`

      logoContainer.style.top = "32px"
    } else if (parseFloat(logoContainer.style.width) < 112) {
      logoContainer.style.width = "112px"
      logoContainer.style.position = "fixed"
      logoContainer.style.top = "32px"
    } else {
      logoContainer.style.width = `${
        parseFloat(logoContainer.style.width) -
        document.documentElement.scrollTop
      }`
    }
  }

  window.addEventListener("scroll", teste)

  section.render("home")
}
