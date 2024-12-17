export const ALCHEMY_URL = import.meta.env.VITE_ALCHEMY_URL;
export const ALCHEMY_KEY = import.meta.env.VITE_ALCHEMY_KEY;
export const MY_ACCOUNT_ADDRESS = import.meta.env.VITE_MY_ACCOUNT_ADDRESS;
export const SECRET_CONTRACT_ADDRESS = import.meta.env
  .VITE_SECRET_CONTRACT_ADDRESS;

if (
  !ALCHEMY_URL ||
  !ALCHEMY_KEY ||
  !MY_ACCOUNT_ADDRESS ||
  !SECRET_CONTRACT_ADDRESS
) {
  throw new Error("Please set env variables correctly.");
}
