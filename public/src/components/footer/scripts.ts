import component from "../../ts/component"

export default function Footer() {
  function scrollToSection(e: MouseEvent) {
    const { id } = e.target as HTMLButtonElement

    const sectionIds: any = {
      "footer__start-button": "#home",
      "footer__solutions-button": "#web-solution",
      "footer__contact-button": "#contact",
    }

    if (!(id in sectionIds)) {
      return
    }

    const sectionId = sectionIds[id]
    const section = document.querySelector(sectionId)

    if (!section) {
      return
    }

    section.scrollIntoView({ behavior: "smooth" })
  }

  window.addEventListener("click", scrollToSection)

  component.render("footer")
}
