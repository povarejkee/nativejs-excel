class DOMHelper {
  constructor(selector) {
    this.$nativeElement = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  create(tagName, classes) {
    const $newElement = document.createElement(tagName)

    if (classes) {
      $newElement.classList.add(classes)
    }

    return $($newElement)
  }

  /*  get html() {
    return this.$nativeElement.outerHTML.trim()
  }

  set html(html) {
    if (typeof html === 'string') {
      this.$nativeElement.innerHTML = html
      return this
    }
  }*/

  html(html) {
    if (typeof html === 'string') {
      this.$nativeElement.innerHTML = html
      return this
    }

    return this.$nativeElement.outerHTML.trim()
  }

  appendNode(node) {
    if (node instanceof DOMHelper) {
      node = node.$nativeElement
    }

    this.$nativeElement.append(node)
  }
}

export function $(selector) {
  return new DOMHelper(selector)
}
