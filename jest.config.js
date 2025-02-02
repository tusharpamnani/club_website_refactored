const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js project
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for React components
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1', // Map components alias correctly
    '^@/components/ui/(.*)$': '<rootDir>/src/components/ui/$1', // ✅ Map UI components properly
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleDirectories: ['node_modules', '<rootDir>/src'], // To resolve modules from the `src` directory
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",  // This ensures Jest uses Babel for JS/TS files
    "^.+\\.(jsx|tsx)$": "babel-jest",  // Also handle JSX/TSX files with Babel
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files using ts-jest
    '^.+\\.(js|jsx)$': 'babel-jest', // Transform JavaScript files using babel-jest
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Ensure Jest knows about TypeScript files
  transformIgnorePatterns: [
    '/node_modules/(?!lucide-react)', // Fix: Remove trailing / to ensure proper transformation
  ],
};

module.exports = createJestConfig(customJestConfig);
