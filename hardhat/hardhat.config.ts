import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY ?? '';

const config: HardhatUserConfig = {
  solidity: '0.8.27',
  networks: {
    'pharos-devnet': {
      url: `https://devnet.dplabs-internal.com`,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      'pharos-devnet': 'empty',
    },
    customChains: [
      {
        network: 'pharos-devnet',
        chainId: 50002,
        urls: {
          apiURL: 'https://pharosscan.xyz/api',
          browserURL: 'https://pharosscan.xyz',
        },
      },
    ],
  },
};

export default config;
