import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  setup() {
    const title = ref('Hello Vue!')
    const nom = 'Doe'
    const prenom = 'John'
    return {
      title,
      nom,
      prenom
    }
  }
}).mount('#app')