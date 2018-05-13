import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs"
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "ReactGoogleChartsPrimitives"
    },
    {
      file: "dist/index.es.js",
      format: "es"
    }
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
      abortOnError: false
    })
  ]
};
