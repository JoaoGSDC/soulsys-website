import axios from "axios"

function Locales() {
  async function loadTranslations(language: string) {
    const file =
      language === "en"
        ? "src/utils/locales/langs/en.json"
        : "src/utils/locales/langs/ptBR.json"

    await axios
      .get(file)
      .then((response) => translatePage(response.data))
      .catch((error) => console.log(error))
  }

  function translatePage(translations: any[]) {
    const elements = document.querySelectorAll('[translate="yes"')
    elements.forEach((element: any) => {
      const key = element.dataset.translationKey

      if (key in translations) {
        element.textContent = translations[key]
      }
    })
  }

  return { loadTranslations }
}

export default Locales()
