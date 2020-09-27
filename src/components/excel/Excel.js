import { $ } from '@core/DOMHelper'

export class Excel {
  constructor(selector, options) {
    this.$app = $(selector)
    this.components = options.components || []
  }

  getExcel() {
    const $excel = $().create('div', 'excel')

    this. components = this.components.map(Component => {
      const $root = $().create('div', Component.className)
      const component = new Component($root)

      $root.html(component.toHTML())

      $excel.appendNode($root)

      return component
    })

    return $excel
  }

  render() {
    this.$app.appendNode(this.getExcel())
    this.components.forEach(component => component.init())
  }
}
