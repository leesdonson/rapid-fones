import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { name, description, price, image, slug, releasedDate, brand } =
    product;
  return (
    <div className="h-[100%]">
      <p className="p-1 mb-2 text-center rounded-t bg-black text-slate-50 text-sm font-medium">
        {brand}
      </p>
      <div className="p-2">
        <Link
          to={`/products/details/${slug}`}
          className="w-full h-[150px] flex items-center justify-center"
        >
          <img
            src={image}
            className="w-full h-full object-contain"
            alt={`${name}`}
          />
        </Link>
        <div className="">
          <Link
            to={`/products/details/${slug}`}
            className="hover:underline underline-offset-1 text-md hover:text-blue-700"
          >
            <h1 className="text-medium py-2 font-semibold">{name}</h1>
          </Link>
          <p className="text-sm">{description?.slice(0, 65).concat("...")}</p>
          <p className="text-md p-2 bg-neutral-50 shadow-sm font-semibold text-blue-800 shadow-black rounded my-1">
            K{price.toFixed(2)}
          </p>
          <small className="text-xs font-thin">
            Released on: {releasedDate}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
