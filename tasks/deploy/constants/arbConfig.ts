import { ethers } from "ethers";

const TOKEN_DECIMALS = ethers.BigNumber.from("10").pow(
  ethers.BigNumber.from("18")
);
const THOUSAND = ethers.BigNumber.from("10").pow(ethers.BigNumber.from("3"));

const FIVE_THOUSAND = ethers.BigNumber.from("5")
  .mul(THOUSAND)
  .mul(TOKEN_DECIMALS);
const TEN_THOUSAND = ethers.BigNumber.from("10")
  .mul(THOUSAND)
  .mul(TOKEN_DECIMALS);
const PARTNER_MAX = ethers.BigNumber.from("250")
  .mul(THOUSAND)
  .mul(TOKEN_DECIMALS);

const TEAM_MULTISIG = "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127"; // Done treasury
const TEAM_EOA = "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127"; // Done treasury

const arbArgs = {
  // Chain const
  lzChainId: 42161,
  lzEndpoint: "0x72aB53a133b27Fa428ca7Dc263080807AfEc91b5", // NOT NEEDED

  // Tokens
  WETH: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // DONE
  USDC: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // DONE

  // Addresses
  teamEOA: TEAM_EOA,
  teamMultisig: TEAM_MULTISIG,
  emergencyCouncil: "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury

  merkleRoot:
    "",
  tokenWhitelist: [ // For bribes
    "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // usdc
    "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", // usdt
    "0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8", // balancer
    "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", // dai
    "0x031d35296154279DC1984dCD93E392b1f946737b", // cap finance
    "0x354A6dA3fcde098F8389cad84b0182725c6C91dE", // compound
    "0x6FE14d3CC2f7bDdffBa5CdB3BBE7467dd81ea101", // coti
    "0xf4D48Ce3ee1Ac3651998971541bAdbb9A14D7234", // cream
    "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978", // curve
    "0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55", // dopex
    "0x2338a5d62E9A766289934e8d2e83a443e8065b83", // flux
    "0x590020B1005b8b25f1a2C82c5f743c540dcfa24d", // gmx
    "0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1", // gnosis
    "0x9623063377AD1B27544C965cCd7342f7EA7e88C7", // graph token
    "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4", // chainlink
    "0x539bdE0d7Dbd336b79148AA742883198BBF60342", // magic
    "0x2e9a6Df78E42a30712c10a9Dc4b1C8656f8F2879", // maker dao token
    "0x6E6a3D8F1AfFAc703B1aEF1F43B8D2321bE40043", // olympus
    "0x965772e0E9c84b6f359c8597C891108DcF1c5B1A", // pickle token
    "0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF", // Spell token
    "0xd4d42F0b6DEF4CE0383636770eF773390d85c61A", // sushi
    "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0", // uniswap token
    "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f", // wbtc
    "0x82e3A8F066a6989666b031d916c43672085b1582", // yearn
    "0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979", // fBOMB
    "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F", // frax
    "0x9d2F299715D94d8A7E6F5eaa8E654E8c74a988A7", // frax share
    "0x0C4681e6C0235179ec3D4F4fc4DF3d14FDD96017", // radiant
    "0x6694340fc020c5E6B96567843da2df01b2CE1eb6", // STG
    "0x10393c20975cF177a3513071bC110f7962CD67da", // Jones
    "0x1622bF67e6e5747b81866fE0b85178a93C7F86e3", // Unami
    "0x7F91531fC25DD262aebf57E8EBe9A6a6df372E96", // Woof
    "0xf6Ba0043c40Ab8a4AE8eB326E96179bd6089d517", // Arboge
    "0xDd8e557C8804D326c72074e987de02A23ae6Ef84", // Arbinu
    "0x51318B7D00db7ACc4026C88c3952B66278B6A67F", // PLS
    "0x32Eb7902D4134bf98A28b963D26de779AF92A212", // Rdpx
    "0x5575552988A3A80504bBaeB1311674fCFd40aD4B", // SPA
  ],
  partnerAddrs: [
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
    "0x866Cb0E0D7Fd85b539c7E2a49a26804bE43f3127", // Done treasury
  ],
  partnerAmts: [
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    TEN_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
    FIVE_THOUSAND,
  ],
  partnerMax: PARTNER_MAX,
};

export default arbArgs;
