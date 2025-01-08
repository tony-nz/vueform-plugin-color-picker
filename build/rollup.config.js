import license from "rollup-plugin-license";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/index.js",
    output: {
      dir: "dist",
      format: "esm",
    },
    external: ["imask"],
    plugins: [
      terser(),
      license({
        banner: {
          content:
            `Vueform ColorPicker Plugin v<%= pkg.version %> (https://github.com/tony-nz/vueform-plugin-color-picker)\n` +
            `Copyright (c) 2025-present Tony Myers <tony@myers.co.nz>\n` +
            `Licensed under the MIT License`,
          commentStyle: "ignored",
        },
      }),
    ],
  },
  {
    input: "src/plugin.js",
    output: {
      dir: "dist",
      format: "esm",
    },
    external: ["imask"],
    plugins: [
      terser(),
      license({
        banner: {
          content:
            `Vueform ColorPicker Plugin v<%= pkg.version %> (https://github.com/tony-nz/vueform-plugin-color-picker)\n` +
            `Copyright (c) 2025-present Tony Myers <tony@myers.co.nz>\n` +
            `Licensed under the MIT License`,
          commentStyle: "ignored",
        },
      }),
    ],
  },
];
