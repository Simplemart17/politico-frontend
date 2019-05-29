module.exports = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageReporters: ['text', 'lcov'],

  moduleFileExtensions: ['js', 'json', 'jsx'],

  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  testURL: 'http://localhost:5500/',

  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  verbose: true,
};
