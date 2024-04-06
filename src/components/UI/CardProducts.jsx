import Button from "../elements/Button";
import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { id, children, className,
    title,
    image,
    description,
    alt,
    rating,
    category,
    quantity,
    price } = props;
  return (
   
      <main
        className={`w-full  sm: mx-2 my-4 py-2 px-4 hover:shadow-sm hover:bg-gray-400 border-gray-200 border bg-gradient-to-b from-gray-100 to-white  rounded shadow-md `}
        key={id}
      >
         <section key={id} className={` h-72 flex flex-col justify-around `}>
        <div className="flex flex-col items-start">
          <Link to={`/product/${id}`}>
          <h1 className="text-lg font-semibold font-poppins">
            {title} {quantity > 0 ? `(${quantity})` : ""}
          </h1>
          </Link>
          <p className="font-semibold opacity-50 text-xs">
            {category}
          </p>
        </div>
        <div className="grid place-items-center m-3 rounded-sm">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={alt}
            className="h-32 hover:scale-105 transition duration-100 object-cover mix-blend-multiply"
          />
          </Link>
        </div>
        <div className="">
          <div className="flex justify-between flex-col">
            <div className="flex justify-between flex-row-reverse items-center font-open-sans">
              <p className="font-semibold opacity-40 text-sm">
                {" "}
                {rating} 
              </p>
              <p className="font-semibold opacity-50 text-md">
                {" "}
                {price}{" "}
              </p>
            </div>
          </div>
          <p className="text-xs text-left opacity-75 my-2 font-open-sans">
            {description}
          </p>
        </div>
      </section>
        {children}
      </main>
    
  );
};

const CardBody = (props) => {
  const {
    
    children,
    className,
    id,
    
  } = props;
  return (
    <>
   
    </>
  );
};

const ButtonCard = (props) => {
  const { className, onClick, children } = props;
  return (
    <Link > 
    <Button className={`${className} mb-1 min-w-0`} onClick={onClick}>
      {children}
    </Button>
    </Link>
  );
};

// CardProduct.Body = CardBody;
CardProduct.Button = ButtonCard;

export default CardProduct;
