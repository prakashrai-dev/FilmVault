const Pagnation = ({ handlePrev, handleNext, pageNumber }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 mt-8 flex justify-center items-center gap-8 rounded">
      <div onClick={handlePrev} className="px-2 hover:opacity-80 cursor-pointer">
        <i className="fa-solid fa-arrow-left" />
      </div>
      <div className="min-w-8 text-center">{pageNumber}</div>
      <div onClick={handleNext} className="px-2 hover:opacity-80 cursor-pointer">
        <i className="fa-solid fa-arrow-right" />
      </div>
    </div>
  );
};

export default Pagnation;
