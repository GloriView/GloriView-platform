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
contract('Forwarders', () => {
context('IForwarder', () => {
    let forwarder
   beforeEach(async () => {
      forwarder = await ForwarderMock.new()
  })
 it('is a forwarder', async () => {
assert.isTrue(await forwarder.isForwarder(), 'should be a forwarder')
   })
 it('reports correct forwarder type', async () => {
     assert.equal(await forwarder.forwarderType(), ForwarderType.NO_CONTEXT, 'should report correct forwarding type')
    })
it('can forward', async () => {
 assert.doesNotThrow(async () => await forwarder.forward(EMPTY_BYTES, EMPTY_BYTES))
   })
  it('cannot forward with ETH payment', async () => {
 const payableForwarder = await ForwarderWithContextPayableMock.at(forwarder.address)
 await assertRevert(payableForwarder.forward(EMPTY_BYTES, EMPTY_BYTES, { value: 1 }))
  })
  })
  context('IForwarderWithContextPayable', () => {
 let forwarder
 beforeEach(async () => {
forwarder = await ForwarderWithContextPayableMock.new()
    })
