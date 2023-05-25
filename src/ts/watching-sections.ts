export function watchSections(activeClassName: string, tagToAnimate: string) {
  setTimeout(() => {
    const animatedSections = document.querySelectorAll(tagToAnimate)

    console.log(animatedSections)

    const options = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(activeClassName)
        } else {
          entry.target.classList.add(activeClassName)
        }
      })
    }, options)

    animatedSections.forEach((section) => {
      observer.observe(section)
    })
  }, 500)
}
