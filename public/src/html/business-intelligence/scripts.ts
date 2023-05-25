import section from "../../ts/section"
import { watchSections } from "../../ts/watching-sections"

export default function BusinessIntelligence() {
  watchSections(
    "business-intelligence__animation_text",
    ".business-intelligence__title_container_size_big",
  )

  watchSections(
    "business-intelligence__animation_text",
    ".business-intelligence__text_container_value",
  )

  watchSections(
    "business-intelligence__animation_figure",
    ".business-intelligence__struct-img_container",
  )

  watchSections(
    "business-intelligence__animation_figure",
    ".business-intelligence__struct-img__container_figure",
  )

  section.render("business-intelligence")
}
