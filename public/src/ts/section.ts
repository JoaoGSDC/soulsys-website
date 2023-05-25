import axios from "axios"

function section() {
  async function render(section: string) {
    await axios
      .get(`src/html/${section}/index.html`)
      .then((response) => {
        document.getElementById(section)!.innerHTML = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return { render }
}

export default section()
