import axios from "axios"

function component() {
  async function render(component: string) {
    await axios
      .get(`src/component/${component}/index.html`)
      .then((response) => {
        document.getElementById(component)!.innerHTML = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return { render }
}

export default component()
