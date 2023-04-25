import component from "../../ts/component"

export default function Navbar() {
  function handleToggleNavbar() {
    const toggleNav = document.getElementsByClassName(
      "navbar__button-menu",
    )[0] as HTMLElement
    const navbar = document.getElementById("navbar") as HTMLElement

    if (!toggleNav || !navbar) {
      return
    }

    toggleNav.onclick = () => {
      navbar.classList.toggle("active")
    }
  }

  window.addEventListener("click", handleToggleNavbar)

  component.render("navbar")
}
