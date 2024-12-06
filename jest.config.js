export default {
    transform: {
      "^.+\\.js$": "babel-jest",
    },
    testEnvironment: "node",
    collectCoverageFrom: [
      "src/capitalize.js", // Include specific files
      "src/toNumber.js",
      "src/ceil.js", // Add other files you plan to test
      "!src/.internal/**", // Exclude .internal directory
      "!src/**/*.test.js", // Exclude test files from coverage
    ],
    testPathIgnorePatterns: [
      "/node_modules/", // Default exclusion
      "src/.internal/", // Exclude .internal directory
    ],
  };
  