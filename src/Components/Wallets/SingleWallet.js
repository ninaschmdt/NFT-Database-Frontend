import React from "react";
import MultipleTransactions from "./MultipleTransactions";
import { useState } from "react";

const SingleWallet = ({ data }) => {
  const [loading, setLoading] = useState(false);
  // console.log("DATA is here for single wallet", data)
  return (
    <div className="singleWallet">
      <div className="singleWalletImageNameAddress">
        <div className="walletImage"></div>
        <div className="singleWalletNameAddress">
          <div className="walletName">{/* {transactionItem.to} */}</div>
        </div>
      </div>
      <div>
        <button className="button-secondary">Remove</button>
      </div>
      {loading
        ? "Loading"
        : data.transactions.slice(0, 5).map((transactionItem) => {
<<<<<<< HEAD
          return (
            <div key={transactionItem.id}>
              <MultipleTransactions
                transactionName={transactionItem.contractAddress}
                etherscan={transactionItem.hash}
                date={transactionItem.timeStamp}
                tokenName={transactionItem.tokenName}
                contractAddress={transactionItem.contractAddress}
              />
            </div>
          );
        })}
=======
            return (
              <div key={transactionItem.id}>
                <MultipleTransactions
                  transactionName={transactionItem.contractAddress}
                  etherscan={transactionItem.hash}
                  date={transactionItem.timeStamp}
                  tokenName={transactionItem.tokenName}
                  contractAddress={transactionItem.contractAddress}
                />
              </div>
            );
          })}
>>>>>>> sven4
    </div>
  );
};

export default SingleWallet;
