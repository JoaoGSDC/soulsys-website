import section from "../../ts/section"
import { watchSections } from "../../ts/watching-sections"

export default function Purpose() {
  watchSections(
    "purpose__active-animation_title_container_size_big",
    ".purpose__title_container_size_big",
  )

  watchSections(
    "purpose__active-animation_title_container_size_big",
    ".purpose__title_container_size_big_effect",
  )

  watchSections(
    "purpose__animation_text_container_value",
    ".purpose__text_container_value",
  )

  section.render("purpose")
}
