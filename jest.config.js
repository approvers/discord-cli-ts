module.exports = {
  moduleFileExtensions: ["js", "ts"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  globals: {
    "ts-jest": { tsConfig: "<rootDir>/tsconfig.json" },
  },
  testMatch: ["<rootDir>/tests/**/*.spec.{js,ts}"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,ts}"],
};
