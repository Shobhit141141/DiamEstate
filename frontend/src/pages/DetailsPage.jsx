import Carousel from "../components/Carousel";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getSingleProperty } from "../apis/propertyApi";
import { Link, useParams } from "react-router-dom";
import InvestorTable from "../components/InvestorsTable";

const imageList = [
  {
    id: 1,
    image:
      "https://www.wilsonhomes.com.au/sites/default/files/styles/blog_hero_banner/public/My%20project%20-%202023-06-20T095818.329%20%281%29_0.jpg?itok=UbtVbhT0",
    title: "Slide 1",
    description: "This is the description for slide 1",
  },
  {
    id: 2,
    image:
      "https://www.wilsonhomes.com.au/sites/default/files/styles/blog_hero_banner/public/My%20project%20-%202023-06-20T095818.329%20%281%29_0.jpg?itok=UbtVbhT0",
    title: "Slide 2",
    description: "This is the description for slide 2",
  },
  {
    id: 3,
    image:
      "https://images.adsttc.com/media/images/6077/43aa/ebb5/fc01/6543/b86b/newsletter/fi-img-1234.jpg?1618428850",
    title: "Slide 3",
    description: "This is the description for slide 3",
  },
];

const DetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await getSingleProperty(id);
        setProperty(response.data.result);
      } catch (error) {
        setError("Failed to fetch property details.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);
  const handlePurachse = async (req, res) => {
    const resp = await axios.post(
      "http://localhost:4000/api/user/make-payment",
      {
        receiverPublicKey: localStorage.getItem("public_address"),
        amount: 50,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    console.log(resp.data);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!property) return <div>No property found.</div>;

  return (
    <div className="mt-[80px] gap-3 flex flex-wrap w-screen h-auto overflow-y-hidden p-4">
      <Carousel className="w-full md:w-1/2" property={property} />

      <div className="bg-gradient-to-r from-slate-200 to-stone-300 w-full md:w-[45vw] h-min rounded-2xl flex flex-col p-2 shadow-md">
        <div className="bg-white p-4 flex flex-col gap-4 rounded-2xl">
          <h3 className="text-xl font-bold text-black mb-2">
            Property Details
          </h3>
          <p className="text-gray-700">
            <strong>Price:</strong> ${property.total_price}
          </p>
          <p className="text-gray-700">
            <strong>Tokens Available:</strong> {property.no_of_tokens}
          </p>
          <p className="text-gray-700">
            <strong>Token Name:</strong> {property.token_name}
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> {property.location.address},{" "}
            {property.location.city}, {property.location.state}
          </p>
          <p className="text-gray-700">
            {/* <strong>Fraction Left:</strong> {property.no_of_tokens} / {property.total_fraction} */}
            <strong>Fraction Left:</strong> {property.percentageLeft}
          </p>
          <p className="text-gray-700">
            <strong>Owner:</strong> {property.owner.username}
          </p>
          <p className="text-gray-700">
            <strong>Listed At:</strong>{" "}
            {new Date(property.listed_at).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-center p-2 gap-2">
          <Link to={`/buy/${property._id}`}>
            <button className="text-white font-medium text-xl px-4 py-3 bg-[#7065F0] hover:bg-[#d7d4fc] hover:px-4 hover:py-3 rounded-[10px] hover:text-[#7065F0] transition-all">
              <h1>INVEST NOW</h1>
            </button>
          </Link>
          <button
            onClick={handlePurachse}
            className="text-white font-medium text-xl px-4 py-3 bg-[#7065F0] hover:bg-[#d7d4fc] hover:px-4 hover:py-3 rounded-[10px] hover:text-[#7065F0] transition-all"
          >
            <h1>BUY 100% (in DIAM)</h1>
          </button>
        </div>

		<InvestorTable investors={property.investors}/>
      </div>
    </div>
  );
};

export default DetailsPage;
