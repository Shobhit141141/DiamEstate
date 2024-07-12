import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import PropertyCard from "../components/PropertyCard";
import { Link } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const dummyData = [
  {
    _id: "1",
    name: "Luxury Villa",
    price: "$500,000",
    image:
      "https://www.investopedia.com/thmb/bfHtdFUQrl7jJ_z-utfh8w1TMNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
    percentageLeft: "80",
  },
  {
    _id: "2",
    name: "Modern Apartment",
    price: "$300,000",
    image:
      "https://www.investopedia.com/thmb/bfHtdFUQrl7jJ_z-utfh8w1TMNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
    percentageLeft: "60",
  },
  {
    _id: "3",
    name: "Cozy Cottage",
    price: "$150,000",
    image:
      "https://www.investopedia.com/thmb/bfHtdFUQrl7jJ_z-utfh8w1TMNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
    percentageLeft: "90",
  },
];

const Properties = () => {
  const [productList, setProductList] = useState(dummyData);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
  const [percentageRange, setPercentageRange] = useState({ min: 0, max: 100 });
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredProducts = dummyData.filter(
      (item) =>
        parseFloat(item.price.replace("$", "").replace(",", "")) >=
          priceRange.min &&
        parseFloat(item.price.replace("$", "").replace(",", "")) <=
          priceRange.max
    );

    const filteredByPercentage = filteredProducts.filter(
      (item) =>
        parseInt(item.percentageLeft) >= percentageRange.min &&
        parseInt(item.percentageLeft) <= percentageRange.max
    );

    const sortedProducts = filteredByPercentage.sort((a, b) => {
      if (sortBy === "priceAsc") {
        return (
          parseFloat(a.price.replace("$", "").replace(",", "")) -
          parseFloat(b.price.replace("$", "").replace(",", ""))
        );
      } else if (sortBy === "priceDesc") {
        return (
          parseFloat(b.price.replace("$", "").replace(",", "")) -
          parseFloat(a.price.replace("$", "").replace(",", ""))
        );
      }
      return 0;
    });

    const filteredBySearch = sortedProducts.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductList(filteredBySearch);
  }, [priceRange, percentageRange, sortBy, searchTerm]);

  const handleSortChange = () => {
    if (sortBy === "priceAsc") {
      setSortBy("priceDesc");
    } else {
      setSortBy("priceAsc");
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex flex-wrap mt-[90px] p-5 rounded-md shadow-md ">
        {/* Price Range Filter */}
        <div className="w-full sm:w-[25%] mb-4 sm:mb-0 sm:mr-4">
          <label className="block mb-2">Price Range:</label>
          <div className="flex items-center mt-2">
            <input
              type="range"
              min="0"
              max="1000000"
              step="30000"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
              }
              className="w-1/2 mr-2"
            />
            <span>${priceRange.max}</span>
          </div>
        </div>

        {/* Percentage Range Filter */}
        <div className="w-full sm:w-[25%] mb-4 sm:mb-0 sm:mr-4">
          <label className="block mb-2">Percentage Left:</label>
          <div className="flex items-center mt-2">
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={percentageRange.max}
              onChange={(e) =>
                setPercentageRange({
                  ...percentageRange,
                  max: parseInt(e.target.value),
                })
              }
              className="w-1/2 mr-2"
            />
            <span>{percentageRange.max}%</span>
          </div>
        </div>

        {/* Sorting Button */}
        <div className="w-full sm:w-[15%] mb-4 sm:mb-0">
          <label className="block mb-2">Sort </label>
          <div className="flex items-center">
            <button
              onClick={handleSortChange}
              className="p-2 rounded-md mr-2 bg-black w-[80px] h-[40px] flex justify-center items-center"
            >
              {sortBy === "priceAsc" ? (
                <p className="flex gap-1 justify-center items-center">
                  <RiArrowUpSLine className="text-green-500 text-[20px] font-bold" />
                  <p>Asc</p>
                </p>
              ) : (
                <p className="flex gap-1 justify-center items-center">
                  <RiArrowDownSLine className="text-red-500  text-[20px] font-bold" />
                  <p>Des</p>
                </p>
              )}
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="w-full sm:w-[30%]">
          <label className="block mb-2">Search:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="card-section justify-center sm:justify-between px-5 mt-5">
        {productList.map((item) => (
          <PropertyCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
