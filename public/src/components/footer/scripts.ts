import component from "../../ts/component"

export default function Footer() {
  function scrollToSection(e: any) {
    const { id } = e.target

    if (
      ![
        "footer__start-button",
        "footer__solutions-button",
        "footer__contact-button",
      ].includes(id)
    ) {
      return
    }

    const sectionIds: any = {
      "footer__start-button": "#home",
      "footer__solutions-button": "#web-solution",
      "footer__contact-button": "#contact",
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
