import { useState } from "react";
import MyInvestment from "../components/MyInvestment";
import Transaction from "../components/MyTransaction";
import Listings from "../components/MyListings";

function DashBoard() {
  const [activeTab, setActiveTab] = useState("My Investments");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-[90px] p-6">
      <h1 className="text-2xl font-bold mb-4 text-[#7065F0]">
        <p className="text-black">
          Hello , <span className="text-[#7065F0]">Manav</span> from London , UK
        </p>
        {/* Welcome to Dashboard , Keep the track of your Estate */}
      </h1>
      <div className="flex space-x-4 border-b">
        <button
          className={`py-2 px-4 ${
            activeTab === "My Investments"
              ? "bg-[#7065F0] text-white rounded-[6px]"
              : "bg-[#9c9c9c] text-white rounded-[6px]"
          }`}
          onClick={() => handleTabClick("My Investments")}
        >
          My Investments
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "My Listings"
              ? "bg-[#7065F0] text-white rounded-[6px]"
              : "bg-[#9c9c9c] text-white rounded-[6px]"
          }`}
          onClick={() => handleTabClick("My Listings")}
        >
          My Listings
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "My Transaction"
              ? "bg-[#7065F0] text-white rounded-[6px]"
              : "bg-[#9c9c9c] text-white rounded-[6px]"
          }`}
          onClick={() => handleTabClick("My Transaction")}
        >
          My Transactions
        </button>
      </div>
      <div className="mt-4">
        {activeTab === "My Investments" && (
          <div className="flex flex-col gap-2">
            <MyInvestment
              src={
                "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              }
              propertyName="Property One"
              propertyAddress="123 Main St, Springfield"
            />

            <MyInvestment
              src={"https://pixlr.com/images/index/ai-image-generator-one.webp"}
              propertyName="Property One"
              propertyAddress="123 Main St, Springfield"
            />
          </div>
        )}

        {activeTab === "My Listings" && (
          <div>
            <Listings
              src={
                "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              }
              propertyName="Property One"
              propertyAddress="123 Main St, Springfield"
              percentageLeft={80}
            />
          </div>
        )}
        {activeTab === "My Transaction" && (
          <div className="flex flex-col gap-2">
            <Transaction
              src={
                "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              }
              propertyName="Property One"
              propertyAddress="123 Main St, Springfield"
              amount="100,000"
              transactionType="credit"
              tokens="500"
            />
            <Transaction
              src={"https://pixlr.com/images/index/ai-image-generator-one.webp"}
              propertyName="Property Two"
              propertyAddress="456 Elm St, Shelbyville"
              amount="50,000"
              transactionType="debit"
              tokens="250"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoard;
