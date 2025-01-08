export interface VueformPluginColorPicker {
  colorFormat?: "hex" | "rgb" | "hsl";
}

declare module "@vueform/vueform" {
  interface TextElementProps extends VueformPluginColorPicker {}
  interface TextElement extends VueformPluginColorPicker {}
}
