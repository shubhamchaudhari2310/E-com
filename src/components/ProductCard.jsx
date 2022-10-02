import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min"

export default function ProductCard({item}) {
  return (
       <Link to={`/product-details/${item._id}`}>
      <div className="card mt-5">
      <img
        className="card-img-top"
        src={`${process.env.REACT_APP_URL}/${item.image} `}
        alt=""
      />
      <div className="card-body">
        <ul className="list-goup">
          <li className="list-group-item">Name :{item.name}</li>
          <li className="list-group-item">Brand :{item.brand}</li>
          <li className="list-group-item">Price :{item.price}</li>
        </ul>
      </div>
    </div>
    </Link>
  );
}
