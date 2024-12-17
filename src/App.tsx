import { useBalance, useReadContract } from "wagmi";
import { ExternalLink } from "lucide-react";
import { MY_ACCOUNT_ADDRESS, SECRET_CONTRACT_ADDRESS } from "./env";
import { secretABI } from "./abi";

const App = () => {
  const urlMyAccount = `https://sepolia.etherscan.io/address/${MY_ACCOUNT_ADDRESS}`;
  const urlSecret = `https://sepolia.etherscan.io/address/${SECRET_CONTRACT_ADDRESS}`;

  const balanceQuery = useBalance({
    address: MY_ACCOUNT_ADDRESS,
  });

  const secretQuery = useReadContract({
    address: SECRET_CONTRACT_ADDRESS,
    abi: secretABI,
    functionName: "secret",
  });

  const renderInfoSection = (
    title: any,
    value: any,
    loading: any,
    externalUrl: any
  ) => {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <p
            className={`text-xl font-medium ${
              loading ? "text-gray-500" : "text-gray-900"
            }`}
          >
            {loading ? "Loading..." : value}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white p-6">
            <h1 className="text-3xl font-bold text-center tracking-tight">
              My Blockchain Assets
            </h1>
          </div>

          <div className="p-6 space-y-6">
            {renderInfoSection(
              "Account Balance",
              `${parseFloat(balanceQuery.data?.formatted || "0").toFixed(
                2
              )} SepoliaETH`,
              balanceQuery.isLoading,
              urlMyAccount
            )}

            {renderInfoSection(
              "Secret",
              secretQuery.data || "",
              secretQuery.isLoading,
              urlSecret
            )}
          </div>
        </div>

        {/* Optional: Footer with network info */}
        <div className="text-center text-sm text-gray-600">
          Network: Sepolia Testnet
        </div>
      </div>
    </div>
  );
};

export default App;
