import section from "../../ts/section"
import { watchSections } from "../../ts/watching-sections"

export default function WebSolution() {
  watchSections("opacity", ".web-solution__browser-container")

  watchSections(
    "web-solution__animation_text_container_value",
    ".web-solution__text_container_value",
  )

  section.render("web-solution")
}
