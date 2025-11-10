import type { App } from 'vue'
import Button from './components/Button.vue'
import Input from './components/Input.vue'

// Export individual components
export { Button, Input }

// Export types
export type { ButtonProps } from './components/Button.vue'
export type { InputProps } from './components/Input.vue'

// Plugin installation function
const install = (app: App) => {
  app.component('MsButton', Button)
  app.component('MsInput', Input)
}

// Export plugin
export default {
  install
}
