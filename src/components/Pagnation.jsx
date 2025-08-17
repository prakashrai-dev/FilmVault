

const Pagnation = ({handlePrev,handleNext,pageNumber}) => {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">

        <div  onClick={handlePrev} className="px-8 "> <i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNumber}</div>
        <div onClick={handleNext} className="px-8"><i class="fa-solid fa-arrow-right"></i></div>
        

    </div>
  )
}

export default Pagnation
