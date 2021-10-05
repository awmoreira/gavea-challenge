module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native' +
      '|@react-native-async-storage/async-storage' +
      '|react-native-iphone-x-helper' +
      '|@react-navigation' +
      '|react-native-gesture-handler' +
      '|react-native-dropdownalert' +
      '|react-native-reanimated' +
      ')/)',
  ],
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios', '/assets'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components',
  ],
  setupFiles: ['<rootDir>/jest/setup.js'],
};
