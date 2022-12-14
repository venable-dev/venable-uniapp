import presetWeapp from 'unocss-preset-weapp'
import {
  transformerAttributify,
  transformerClass,
} from 'unocss-preset-weapp/transformer'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
  ],
  shortcuts: [],
  transformers: [
    // options https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify({
      nonValuedAttribute: true,
    }),

    // options https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
})
