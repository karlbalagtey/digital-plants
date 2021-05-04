const MockLPToken = artifacts.require('MockLPToken')
const PlantToken = artifacts.require('PlantToken')
const PlantTokenFarm = artifacts.require('PlantTokenFarm')

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(MockLPToken)
    const mockLPToken = await MockLPToken.deployed()

    await deployer.deploy(PlantToken)
    const plantToken = await PlantToken.deploy()

    await deployer.deploy(MockLPToken, mockLPToken.address, plantToken)
    const plantTokenFarm = await PlantTokenFarm.deployed()
}