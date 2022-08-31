const { EMPTY_BYTES } = require('@aragon/contract-helpers-test')
const { assertRevert } = require('@aragon/contract-helpers-test/src/asserts')
const ForwarderMock = artifacts.require('ForwarderMock')
const ForwarderPayableMock = artifacts.require('ForwarderPayableMock')
const ForwarderWithContextMock = artifacts.require('ForwarderWithContextMock')
const ForwarderWithContextPayableMock = artifacts.require('ForwarderWithContextPayableMock')
const ForwarderType = {
  NOT_IMPLEMENTED: 0,
  NO_CONTEXT: 1,
  WITH_CONTEXT: 2,
}
