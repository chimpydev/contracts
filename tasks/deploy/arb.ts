import { task } from "hardhat/config";

import arbconfig from "./constants/arbConfig";

task("deploy:arb", "Deploys Arbitrum contracts").setAction(async function (
  taskArguments,
  { ethers }
) {
  const mainnet = false;

  const ARB_CONFIG = mainnet ? arbconfig : arbconfig;
  // const FTM_CONFIG = mainnet ? fantomConfig : testFantomConfig;

  // Load
  const [
    Sterling,
    GaugeFactory,
    BribeFactory,
    PairFactory,
    Router,
    Library,
    VeArtProxy,
    VotingEscrow,
    // RewardsDistributor,
    Voter,
    Minter,
    // SterlingGovernor,
  ] = await Promise.all([
    ethers.getContractFactory("Sterling"),
    ethers.getContractFactory("GaugeFactory"),
    ethers.getContractFactory("BribeFactory"),
    ethers.getContractFactory("PairFactory"),
    ethers.getContractFactory("Router"),
    ethers.getContractFactory("SterlingLibrary"),
    ethers.getContractFactory("VeArtProxy"),
    ethers.getContractFactory("VotingEscrow"),
    // ethers.getContractFactory("RewardsDistributor"),
    ethers.getContractFactory("Voter"),
    ethers.getContractFactory("Minter"),
    // ethers.getContractFactory("SterlingGovernor"),
  ]);

  const hre = require('hardhat');

  const sterling = await Sterling.deploy();
  await sterling.deployed();
  console.log("Sterling deployed to: ", sterling.address);

  const timeFrame: number = 15000;
  console.log(`\n==================================================`);
  console.log(`Waiting ${timeFrame / 1000} sec before verification`);
  await new Promise((resolve) => setTimeout(resolve, timeFrame));

  try {
    // Verify contract
    await hre.run('verify:verify', {
        address: sterling.address,
        contract: `contracts/Sterling.sol:Sterling`,
        constructorArguments: [],
        network: 42161,
        apiKey: {
            opera: process.env.ARB_SCAN_API_KEY,
        },
    });    
  } catch (error) {
    console.log(error)  
  }

  const gaugeFactory = await GaugeFactory.deploy();
  await gaugeFactory.deployed();
  console.log("GaugeFactory deployed to: ", gaugeFactory.address);

    console.log(`\n==================================================`);
  console.log(`Waiting ${timeFrame / 1000} sec before verification`);
  await new Promise((resolve) => setTimeout(resolve, timeFrame));

  try {
    // Verify contract
    await hre.run('verify:verify', {
        address: gaugeFactory.address,
        // contract: `contracts/factories/GaugeFactory.sol:GaugeFactory`,
        constructorArguments: [],
        network: 42161,
        apiKey: {
            opera: process.env.ARB_SCAN_API_KEY,
        },
    });    
  } catch (error) {
    console.log(error)  
  }

  const bribeFactory = await BribeFactory.deploy();
  await bribeFactory.deployed();
  console.log("BribeFactory deployed to: ", bribeFactory.address);

    console.log(`\n==================================================`);
  console.log(`Waiting ${timeFrame / 1000} sec before verification`);
  await new Promise((resolve) => setTimeout(resolve, timeFrame));

  try {
    // Verify contract
    await hre.run('verify:verify', {
        address: bribeFactory.address,
        // contract: `contracts/factories/BribeFactory.sol:BribeFactory`,
        constructorArguments: [],
        network: 42161,
        apiKey: {
            opera: process.env.ARB_SCAN_API_KEY,
        },
    });    
  } catch (error) {
    console.log(error)  
  }

  const pairFactory = await PairFactory.deploy();
  await pairFactory.deployed();
  console.log("PairFactory deployed to: ", pairFactory.address);

    console.log(`\n==================================================`);
  console.log(`Waiting ${timeFrame / 1000} sec before verification`);
  await new Promise((resolve) => setTimeout(resolve, timeFrame));

  try {
    // Verify contract
    await hre.run('verify:verify', {
        address: pairFactory.address,
        // contract: `contracts/factories/PairFactory.sol:PairFactory`,
        constructorArguments: [],
        network: 42161,
        apiKey: {
            opera: process.env.ARB_SCAN_API_KEY,
        },
    });    
  } catch (error) {
    console.log(error)  
  }

  const router = await Router.deploy(pairFactory.address, ARB_CONFIG.WETH);
  await router.deployed();
  console.log("Router deployed to: ", router.address);
  console.log("Args: ", pairFactory.address, ARB_CONFIG.WETH, "\n");

    console.log(`\n==================================================`);
  console.log(`Waiting ${timeFrame / 1000} sec before verification`);
  await new Promise((resolve) => setTimeout(resolve, timeFrame));

  try {
    // Verify contract
    await hre.run('verify:verify', {
        address: router.address,
        contract: `contracts/Router.sol:Router`,
        constructorArguments: [pairFactory.address, ARB_CONFIG.WETH],
        network: 42161,
        apiKey: {
            opera: process.env.ARB_SCAN_API_KEY,
        },
    });    
  } catch (error) {
    console.log(error)  
  }

  const library = await Library.deploy(router.address);
  await library.deployed();
  console.log("SterlingLibrary deployed to: ", library.address);
  console.log("Args: ", router.address, "\n");

    console.log(`\n==================================================`);
  console.log(`Waiting ${timeFrame / 1000} sec before verification`);
  await new Promise((resolve) => setTimeout(resolve, timeFrame));

  try {
    // Verify contract
    await hre.run('verify:verify', {
        address: library.address,
        contract: `contracts/SterlingLibrary.sol:SterlingLibrary`,
        constructorArguments: [router.address],
        network: 42161,
        apiKey: {
            opera: process.env.ARB_SCAN_API_KEY,
        },
    });    
  } catch (error) {
    console.log(error)  
  }

  const artProxy = await VeArtProxy.deploy();
  await artProxy.deployed();
  console.log("VeArtProxy deployed to: ", artProxy.address);

    console.log(`\n==================================================`);
  console.log(`Waiting ${timeFrame / 1000} sec before verification`);
  await new Promise((resolve) => setTimeout(resolve, timeFrame));

  try {
    // Verify contract
    await hre.run('verify:verify', {
        address: artProxy.address,
        contract: `contracts/VeArtProxy.sol:VeArtProxy`,
        constructorArguments: [],
        network: 42161,
        apiKey: {
            opera: process.env.ARB_SCAN_API_KEY,
        },
    });    
  } catch (error) {
    console.log(error)  
  }

  const escrow = await VotingEscrow.deploy(sterling.address, artProxy.address);
  await escrow.deployed();
  console.log("VotingEscrow deployed to: ", escrow.address);
  console.log("Args: ", sterling.address, artProxy.address, "\n");

    console.log(`\n==================================================`);
  console.log(`Waiting ${timeFrame / 1000} sec before verification`);
  await new Promise((resolve) => setTimeout(resolve, timeFrame));

  try {
    // Verify contract
    await hre.run('verify:verify', {
        address: escrow.address,
        contract: `contracts/VotingEscrow.sol:VotingEscrow`,
        constructorArguments: [sterling.address, artProxy.address],
        network: 42161,
        apiKey: {
            opera: process.env.ARB_SCAN_API_KEY,
        },
    });    
  } catch (error) {
    console.log(error)  
  }

  // const distributor = await RewardsDistributor.deploy(escrow.address);
  // await distributor.deployed();
  // console.log("RewardsDistributor deployed to: ", distributor.address);
  // console.log("Args: ", escrow.address, "\n");

  const voter = await Voter.deploy(
    escrow.address,
    pairFactory.address,
    gaugeFactory.address,
    bribeFactory.address
  );
  await voter.deployed();
  console.log("Voter deployed to: ", voter.address);
  console.log("Args: ", 
    escrow.address,
    pairFactory.address,
    gaugeFactory.address,
    bribeFactory.address,
    "\n"
  );

    console.log(`\n==================================================`);
  console.log(`Waiting ${timeFrame / 1000} sec before verification`);
  await new Promise((resolve) => setTimeout(resolve, timeFrame));

  try {
    // Verify contract
    await hre.run('verify:verify', {
        address: voter.address,
        contract: `contracts/Voter.sol:Voter`,
        constructorArguments: [escrow.address,
          pairFactory.address,
          gaugeFactory.address,
          bribeFactory.address],
        network: 42161,
        apiKey: {
            opera: process.env.ARB_SCAN_API_KEY,
        },
    });    
  } catch (error) {
    console.log(error)  
  }

  const minter = await Minter.deploy(
    voter.address,
    escrow.address,
    // distributor.address
  );
  await minter.deployed();
  console.log("Minter deployed to: ", minter.address);
  console.log("Args: ", 
    voter.address,
    escrow.address,
    // distributor.address,
    "\n"
  );

    console.log(`\n==================================================`);
  console.log(`Waiting ${timeFrame / 1000} sec before verification`);
  await new Promise((resolve) => setTimeout(resolve, timeFrame));

  try {
    // Verify contract
    await hre.run('verify:verify', {
        address: minter.address,
        contract: `contracts/Minter.sol:Minter`,
        constructorArguments: [voter.address,
          escrow.address],
        network: 42161,
        apiKey: {
            opera: process.env.ARB_SCAN_API_KEY,
        },
    });    
  } catch (error) {
    console.log(error)  
  }

  // const governor = await SterlingGovernor.deploy(escrow.address);
  // await governor.deployed();
  // console.log("SterlingGovernor deployed to: ", governor.address);
  // console.log("Args: ", escrow.address, "\n");

  // Initialize
  await sterling.initialMint(ARB_CONFIG.teamEOA);
  console.log("Initial minted");

  await sterling.setMinter(minter.address);
  console.log("Minter set");

  await pairFactory.setPauser(ARB_CONFIG.teamMultisig);
  console.log("Pauser set");

  await escrow.setVoter(voter.address);
  console.log("Voter set");

    // Initial veSTERLING distro
    await escrow.setMinterContract(
      minter.address
    );
  await escrow.setTeam(ARB_CONFIG.teamMultisig);
  console.log("Team set & Minter Contract set for escrow");

  await voter.setGovernor(ARB_CONFIG.teamMultisig);
  console.log("Governor set");

  await voter.setEmergencyCouncil(ARB_CONFIG.teamMultisig);
  console.log("Emergency Council set");

  // await distributor.setDepositor(minter.address);
  // console.log("Depositor set");

  // await governor.setTeam(ARB_CONFIG.teamMultisig)
  // console.log("Team set for governor");

  // Whitelist
  const nativeToken = [sterling.address];
  const tokenWhitelist = nativeToken.concat(ARB_CONFIG.tokenWhitelist);
  await voter.initialize(tokenWhitelist, minter.address);
  console.log("Whitelist set");

  console.log("MINTER CONTRACT ON ESCROW", await escrow.team())
  console.log("MINTER CONTRACT ON ESCROW", await escrow.minterContract())

  // Initial veSTERLING distro
  await minter.initialize(
    ARB_CONFIG.partnerAddrs,
    ARB_CONFIG.partnerAmts,
    ARB_CONFIG.partnerMax
  );
  console.log("veSTERLING distributed");

  await minter.setTeam(ARB_CONFIG.teamMultisig)
  console.log("Team set for minter");

  console.log("Arbitrum contracts deployed");
});
