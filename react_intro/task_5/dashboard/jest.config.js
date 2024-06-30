module.exports = {
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png)$": "<rootDir>/path/to/fileMock.js"
  },
  // Otras configuraciones de Jest...
};
