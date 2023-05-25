import section from "../../ts/section"
import { watchSections } from "../../ts/watching-sections"

export default function MobileSolution() {
  watchSections(
    "mobile-solution__animation_text_container_value",
    ".mobile-solution__text_container_value",
  )

  watchSections(
    "mobile-solution__animation_figure-mobile-container",
    ".mobile-solution__figure-mobile-container",
  )

  section.render("mobile-solution")
}
