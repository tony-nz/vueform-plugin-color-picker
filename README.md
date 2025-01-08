# Unofficial Color Picker plugin for [Vueform](https://github.com/vueform/vueform)

Plugin for [Vueform](https://github.com/vueform/vueform) to add a color picker functionality to text elements.

## Prerequisites

- [Vueform 1.12.1+](https://github.com/vueform/vueform)

## Installation

1. Install the plugin

```bash
npm install @tony-nz/plugin-color-picker
```

2. Add the plugin in vueform.config.js

```js
// vueform.config.js

import ColorPickerPlugin from "@tony-nz/vueform-plugin-color-picker";

export default {
  // ...
  plugins: [ColorPickerPlugin],
};
```

## Usage

### Basic Color Picker

```vue
<TextElement name="colorPickerHex" colorFormat="hex" />
```

### RGB Color Picker

```vue
<TextElement name="colorPickerHex" colorFormat="rgb" />
```

### HSL Color Picker

```vue
<TextElement name="colorPickerHex" colorFormat="hsl" />
```

## License [MIT](https://opensource.org/licenses/MIT)
