// eslint-disable-next-line node/no-extraneous-import
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testMatch: ["**/*.spec.[jt]s?(x)"],
  globalSetup: "./scripts/jest-global-setup.js",
  globalTeardown: "./scripts/jest-global-teardown.js",
  testEnvironment: "./scripts/jest-env.js",
  setupFilesAfterEnv: ["./scripts/test-setup.ts"],
  watchPathIgnorePatterns: ["./temp"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    testUtils: "./scripts/test-utils.ts",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};

export default config;
