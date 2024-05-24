import { defineConfig } from 'unocss/vite'
import {
  presetAttributify,
  presetUno,
  transformerAttributifyJsx,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      trueToNonValued: false, // when this is true it works as expected.
    }),
  ],
  transformers: [transformerAttributifyJsx()],
})
