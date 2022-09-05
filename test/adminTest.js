const {address} = require('../Utils/Ethereum');

describe('admin / _setPendingAdmin / _acceptAdmin', () => {
  let root, accounts;
  let comptroller;
  beforeEach(async () => {
    [root, ...accounts] = saddle.accounts;
    comptroller = await deploy('Unitroller');
  });
