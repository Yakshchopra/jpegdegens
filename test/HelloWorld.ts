import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';
import { expect } from 'chai';

describe('hello world', function () {
  it('should say hi', async function () {
    //setup environment
    const HelloWorld = await ethers.getContractFactory('HelloWorld');

    //deploy the contract
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    //call the test functions
    expect(await hello.hello()).to.equal('Hello, World');
  });
});
