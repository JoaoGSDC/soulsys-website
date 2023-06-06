import section from "../../ts/section"

export default function Home() {
  function resizeLogoOnScroll() {
    if (window.innerWidth < 700) {
      return
    }

    const logoContainer = document.getElementById(
      "logocontainer",
    ) as HTMLElement
    const scrollTop = document.documentElement.scrollTop

    const containerWidth = 600
    const minLogoWidth = 112

    if (!logoContainer.style.width) {
      logoContainer.style.width = `${containerWidth}px`
      logoContainer.style.top = "50%"
    }

    let newWidth = containerWidth - scrollTop * 2.5

    newWidth = Math.max(newWidth, minLogoWidth)

    logoContainer.style.width = `${newWidth}px`

    if (newWidth > minLogoWidth) {
      logoContainer.style.position = "absolute"
      logoContainer.style.top = "50%"
    } else {
      logoContainer.style.position = "fixed"
      logoContainer.style.top = "32px"
    }
  }

  window.addEventListener("scroll", resizeLogoOnScroll)

  section.render("home")
}
