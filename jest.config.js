module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: [
        "<rootDir>/node_modules/jest-preset-angular/InlineHtmlStripStylesTransformer"
      ],
      diagnostics: {
        pathRegex: "\\.(spec|test).ts$"
      }
    }
  }
};
