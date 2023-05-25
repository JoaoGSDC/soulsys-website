import section from "../../ts/section"
import { watchSections } from "../../ts/watching-sections"

export default function WebMobileErp() {
  watchSections(
    "web-mobile-erp__animation_text",
    ".web-mobile-erp__title_container_size_big",
  )

  watchSections(
    "web-mobile-erp__animation_text",
    ".web-mobile-erp__text_container_value",
  )

  watchSections(
    "web-mobile-erp__animation_technologies-container_content",
    ".web-mobile-erp__technologies-container_content",
  )

  watchSections(
    "web-mobile-erp__animation_technologies-container_content",
    ".web-mobile-erp__technologies-container_content-dark",
  )

  section.render("web-mobile-erp")
}
