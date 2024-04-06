import Carousel from "../UI/Carousel";
import ProductLayout from "./ProductLayout"; 
const Hero = () => {
  return (
    <>
    <main className=" flex flex-col items-center justify-center w-full">
      <div className="w-full bg-fourth pb-2">
      {/* <Carousel className={"rounded-md sm:w-8/12 min-w-0 w-full shadow-lg mt-2"}/> */}
      </div>
        <ProductLayout />
    </main>
    </>
  )
}


export default Hero;