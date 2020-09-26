class DOMHelper {
  constructor(selector) {
    this.$element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  create(tagName, classes = '') {
    const $element = document.createElement(tagName)

    if (classes) {
      $element.classList.add(classes)
    }

    return $element
  }

  // todo lesson 33
}

export const $ = selector => new DOMHelper(selector)
