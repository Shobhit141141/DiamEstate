function MyInvestment({ src, propertyName, propertyAddress }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start bg-white p-6 rounded-lg shadow-md">
      <div className="w-full md:w-1/4 mb-4 md:mb-0 h-48 md:h-48 flex-shrink-0">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={src}
            alt="Property"
          />
        </div>
      </div>

      <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left md:flex md:flex-col justify-evenly  md:h-48">
        <h2 className="text-3xl font-semibold mb-2">{propertyName}</h2>
        <h3 className="text-gray-600 text-lg">{propertyAddress}</h3>
      </div>

      <div className="w-full md:w-1/4 text-center md:text-right md:flex md:flex-col justify-evenly  md:h-48">
        <h2 className="text-2xl font-bold mb-2">$100,000</h2>
        <div className="flex justify-center md:justify-end items-center space-x-4">
          <p className="text-lg text-green-500 font-semibold">50%</p>
          <p className="text-lg text-gray-600">500 tokens</p>
        </div>
      </div>
    </div>
  );
}

export default MyInvestment;
