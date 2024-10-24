module.exports = {
  roots: ['<rootDir>/src/controllers'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};