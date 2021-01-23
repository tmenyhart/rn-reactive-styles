/* eslint-disable no-undef */
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: jest.fn(() => false),
  };
});
