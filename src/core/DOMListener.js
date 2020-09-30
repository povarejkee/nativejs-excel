export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root for DOMListener!')
    }

    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = transformMethodName(listener)
      const componentName = this.name || ''

      if (!this[method]) {
        throw new Error(`Method ${method} is not implemented in ${componentName} Component!`)
      }

      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDOMListeners() {}
}

function transformMethodName(methodName) {
  return 'on' + methodName[0].toUpperCase() + methodName.slice(1)
}
