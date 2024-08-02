import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetRemToPx({
      baseFontSize: 4
    })
  ],
  rules: [],
  shortcuts: {
    'flex-center': 'flex items-center justify-center'
  }
});
