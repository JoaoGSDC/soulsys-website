import section from "../../ts/section"
import { watchSections } from "../../ts/watching-sections"

export default function Clients() {
  watchSections(
    "clients__animation_title_container_size_big",
    ".clients__title_container_size_big",
  )

  watchSections("opacity", ".clients__imgs-container_figure")

  section.render("clients")
}
