import section from "../../ts/section"

export default function Home() {
  function handleListenerScrollEvent() {
    window.addEventListener("scroll", () => {
      let scrollPosition = window.scrollY
      let image = document.getElementById("logocontainer") as HTMLElement
      let imageHeight = image.offsetHeight
      let windowHeight = window.innerHeight
      let distanceFromTop = image.offsetTop - scrollPosition
      let percentage = 1 - distanceFromTop / (windowHeight + imageHeight)
      image.style.transform = "scale(" + percentage + ")"
    })
  }

  section.render("home")
}
