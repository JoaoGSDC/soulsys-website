import section from "../../ts/section"
import { watchSections } from "../../ts/watching-sections"

export default function UncomplicatedTechnology() {
  watchSections(
    "uncomplicated-technology__animation_text",
    ".uncomplicated-technology__title_container_size_big",
  )

  watchSections(
    "uncomplicated-technology__animation_text",
    ".uncomplicated-technology__text_container_value",
  )

  section.render("uncomplicated-technology")
}
