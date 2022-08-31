const { EMPTY_BYTES } = require('@aragon/contract-helpers-test')
const { assertRevert } = require('@aragon/contract-helpers-test/src/asserts')
const ForwarderMock = artifacts.require('ForwarderMock')
const ForwarderPayableMock = artifacts.require('ForwarderPayableMock')
