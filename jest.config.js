/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/**-protocols.ts'
  ],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

module.exports = config
