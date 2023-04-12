import section from "../../ts/section"

export default function Home() {
  function handleListenerScrollEvent() {
    const navbar: any = document.getElementById("navbar")
    const logo: any = document.getElementById("logocontainer")

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > logo.offsetHeight) {
        logo.classList.add("fixed")
        logo.style.top = navbar.offsetHeight + "px"
      } else {
        logo.classList.remove("fixed")
        logo.style.top = ""
      }
    })
  }

  handleListenerScrollEvent()
  section.render("home")
}
