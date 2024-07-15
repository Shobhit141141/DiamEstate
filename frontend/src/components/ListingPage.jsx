import React, { useState } from "react";

const ListingPage = () => {
  const [listings, setListings] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [propertyPrice, setPropertyPrice] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [numTokens, setNumTokens] = useState("");
  const [pincode, setPincode] = useState("");
  const [location, setLocation] = useState("");

  const addListing = (e) => {
    e.preventDefault();
    if (
      title &&
      description &&
      images.length > 0 &&
      propertyPrice > 0 &&
      tokenName &&
      numTokens > 0 &&
      pincode &&
      location
    ) {
      const newListing = {
        id: Date.now(),
        title,
        description,
        images: images.map((image) => URL.createObjectURL(image)),
        propertyPrice,
        tokenName,
        numTokens,
        pincode,
        location,
        status: "active", // This would be updated from the backend
      };
      setListings([...listings, newListing]);
      setTitle("");
      setDescription("");
      setImages([]);
      setImagePreviews([]);
      setPropertyPrice("");
      setTokenName("");
      setNumTokens("");
      setPincode("");
      setLocation("");
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...selectedFiles]);
    const selectedFilePreviews = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setImagePreviews((prevPreviews) => [
      ...prevPreviews,
      ...selectedFilePreviews,
    ]);
  };

  return (
    <div className="container h-screen text-white overflow-hidden mx-auto p-4">
      <div className="flex flex-col items-center justify-center md:flex-row gap-8 mt-[80px] text-black bg-emerald-00 h-screen">
        <div className="md:w-1/2 sticky top-0 bg-gradient-to-r p-2 from-slate-200 to-stone-300 rounded-3xl self-start">
          <h2 className="text-4xl text-center font-semibold mb-4 p-2">
            Create New Listing
          </h2>
          <form
            onSubmit={addListing}
            className="space-y-4 overflow-scroll h-[70vh] p-2 "
          >
            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter Property Name"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full px-3 bg-white text-black font-bold text-xl uppercase py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter the description in detail ..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white text-black border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="images" className="block text-sm mb-1 font-medium">
                Images
              </label>
              <input
                type="file"
                id="images"
                multiple
                onChange={handleImageChange}
                className="file-input file-input-bordered image-full bg-white text-black w-full file-input-info bg-"
              />
              <div className="mt-2 grid grid-cols-3 gap-2">
                {imagePreviews.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-auto object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="propertyPrice"
                className="block text-sm font-medium"
              >
                Property Price
              </label>
              <input
                type="number"
                placeholder="Enter Property Price"
                id="propertyPrice"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
                className="mt-1 block w-full px-3 bg-white text-black py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="tokenName"
                className="block text-sm font-medium"
              >
                Choose Token Name
              </label>
              <input
                type="text"
                placeholder="Enter Token Name"
                id="tokenName"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                className="mt-1 block w-full px-3 bg-white text-black py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="numTokens"
                className="block text-sm font-medium"
              >
                No of Tokens to be Issued
              </label>
              <input
                type="number"
                placeholder="Enter Number of Tokens"
                id="numTokens"
                value={numTokens}
                onChange={(e) => setNumTokens(e.target.value)}
                className="mt-1 block w-full px-3 bg-white text-black py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="pincode"
                className="block text-sm font-medium"
              >
                Pincode
              </label>
              <input
                type="text"
                placeholder="Enter Pincode"
                id="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="mt-1 block w-full px-3 bg-white text-black py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <textarea
                id="location"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white text-black border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="text-white w-full mt-4 font-medium text-xl px-4 py-3 bg-[#7065F0] hover:bg-[#d7d4fc] hover:px-4 hover:py-3 rounded-[10px] hover:text-[#7065F0] transition-all"
            >
              Add Listing
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
