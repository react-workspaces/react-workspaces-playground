// SetupTests.js - Imports globals into Jest tests

require('jest-prop-type-error');

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
enzyme.configure({adapter: new Adapter()});
