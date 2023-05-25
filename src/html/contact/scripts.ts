import section from "../../ts/section"
import { watchSections } from "../../ts/watching-sections"

export default function Contact() {
  watchSections(
    "contact__animation_title_container_size_big",
    ".contact__title_container_size_big",
  )

  section.render("contact")
}
