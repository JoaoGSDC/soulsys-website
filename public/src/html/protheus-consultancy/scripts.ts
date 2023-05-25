import section from "../../ts/section"
import { watchSections } from "../../ts/watching-sections"

export default function ProtheusConsultancy() {
  watchSections(
    "protheus-consultancy__animation_text",
    ".protheus-consultancy__title_container_size_big",
  )

  watchSections(
    "protheus-consultancy__animation_text",
    ".protheus-consultancy__text_container_value",
  )

  section.render("protheus-consultancy")
}
