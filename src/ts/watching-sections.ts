export function watchSections(activeClassName: string, tagToAnimate: string) {
  setTimeout(() => {
    const animatedSections = document.querySelectorAll(tagToAnimate)

    console.log(animatedSections)

    const options = {
      threshold: 0.5, // A animação será ativada quando a seção estiver 50% visível na tela
    }

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(activeClassName) // Adiciona a classe "ativa" para iniciar a animação
        } else {
          entry.target.classList.add(activeClassName) // Remove a classe "ativa" para interromper a animação
        }
      })
    }, options)

    animatedSections.forEach((section) => {
      observer.observe(section)
    })
  }, 500)
}
