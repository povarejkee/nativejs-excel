import { $ } from '@core/DOMHelper'

export class Excel {
  constructor(selector, options) {
    this.$element = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $().create('div', 'excel')

    this.components.forEach(Component => {
      const $wrapper = $().create('div', Component.className)
      const instance = new Component()

      $wrapper.innerHTML = instance.toHTML()

      $root.append($wrapper)
    })

    return $root
  }

  render() {
    this.$element.append(this.getRoot())
  }
}
