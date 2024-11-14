import React from "react";
import { Link } from "react-router-dom";

const Card = ({card}) => {
    const{product_image,product_title,price,id}=card;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className="h-[300px] w-[400px]"
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>{price}</p>
          <div className="card-actions justify-start">
            <Link to={`/details/${id}`}>
            <button className="btn text-white text-xl bg-[#9538E2]">View Details</button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
