import { useEffect, useState } from "react";
import MyInvestment from "../components/MyInvestment";
import Transaction from "../components/MyTransaction";
import Listings from "../components/MyListings";
import { getUserDetails } from "../apis/userApi";
import { Link } from "react-router-dom";

function DashBoard() {
  const [activeTab, setActiveTab] = useState("My Investments");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const response = await getUserDetails();
        setUser(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false);
      }
    };

    getUser();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="mt-[90px] p-6">
      <h1 className="text-2xl font-bold mb-4 text-[#7065F0]">
        <p className="text-black">
          Hello,{" "}
          <span className="text-[#7065F0]">{user.username || "Guest"}</span>
          {user?.location
            ? ` from ${user.location.city}, ${user.location.country}`
            : ""}
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
            {/* <MyInvestment
              src={
                "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg"
              }
              propertyName="Modern Residents"
              propertyAddress="123 Main St, Springfield"
            />

            <MyInvestment
              src={
                "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?cs=srgb&dl=pexels-jessica-bryant-592135-1370704.jpg&fm=jpg"
              }
              propertyName="La Villa"
              propertyAddress="223 Main St, Washington DC"
            /> */}
            {user.my_investments.map((investment) => (
              <Link to={`/details/${investment.property._id}`}>
                <MyInvestment
                  key={investment.property._id}
                  src={investment.property.images[0]}
                  propertyName={investment.property.title}
                  propertyAddress={investment.property.location.address}
                  share_per={investment.share_per}
                  total_price={investment.property.total_price}
                />
              </Link>
            ))}
          </div>
        )}

        {activeTab === "My Listings" && (
          <div className="flex flex-col gap-2">
            {/* <Listings
              src={
                "https://www.adanirealty.com/-/media/Project/Realty/Blogs/Types-Of-Residential-Properties.png"
              }
              propertyName="Raj Residency"
              propertyAddress="122 street , NYC"
              percentageLeft={80}
            /> */}
            {user.my_listings.map((investment) => (
              <Link to={`/details/${investment.property._id}`}>
                <Listings
                  key={investment.property._id}
                  src={investment.property.images[0]}
                  propertyName={investment.property.title}
                  propertyAddress={investment.property.location.address}
                  percentageLeft={investment.property.percentageLeft}
                  total_price={investment.property.total_price}
                />
              </Link>
            ))}
          </div>
        )}
        {activeTab === "My Transaction" && (
          <div className="flex flex-col gap-2">
            <Transaction
              src={
                "https://www.tricityinfra.com/wp-content/uploads/2024/04/Real-estate.jpg"
              }
              propertyName="Home stay"
              propertyAddress="123 Main St, Springfield"
              amount="100,000"
              transactionType="credit"
              tokens="500"
            />
            <Transaction
              src={
                "https://www.fausettlaw.com/wp-content/uploads/real-estate-vs.-real-property-1200x630.jpg"
              }
              propertyName="Luxury Apt."
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
