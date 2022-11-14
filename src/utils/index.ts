import { BigNumber, ethers } from "ethers";

export const displayWalletAddress = (address: string, digits = 6) => {
  return `${address.substring(0, digits)}...${address.substring(
    address.length - 3,
    address.length,
  )}`;
};

export async function checkMetaMaskIsUnlocked() {
  let unlocked;
  const provider = new ethers.providers.Web3Provider((window as any).ethereum);

  try {
    const accounts = await provider.listAccounts();
    unlocked = accounts.length > 0;
  } catch (e) {
    unlocked = false;
  }

  return unlocked;
}

export const convertHexToStringNumber = (hex: any, decimals = 18) => {
  if (hex === null || hex === undefined) return "0";
  return BigNumber.from(hex).div(BigNumber.from(10).pow(decimals)).toString();
};
