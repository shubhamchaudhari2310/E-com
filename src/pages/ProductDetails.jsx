import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAction } from "../actions/productAction";
import { cartAction } from "../actions/cartAction";
export default function ProductDetails({}) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { reduxSingleProduct } = useSelector((state) => state.products);
  const [count, setcount] = useState(1);
  const increment = (e) => {
    setcount((pre) => (pre === reduxSingleProduct.stock ? pre : pre + 1));
  };
  const decrement = (e) => {
    setcount((pre) => (pre === 1 ? 1 : pre - 1));
  };
  const handleAddToCart = () =>{
    dispatch (cartAction({...reduxSingleProduct, qty : count }))
  }
  useEffect(() => {
    dispatch(getSingleProductAction(id));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col_sm-6">
          <div className="card">
            <img
              src={`${process.env.REACT_APP_URL}/${reduxSingleProduct.image}`}
              // height="400px"
              // width="600px"
              alt=""
            />
            <div className="card-body">
              <ul className=" list-group">
                <li className="list-group-item">
                  Name : {reduxSingleProduct.name}
                </li>
                <li className="list-group-item">
                  Brand : {reduxSingleProduct.brand}
                </li>
                <li className="list-group-item">
                  Price : {reduxSingleProduct.price}
                </li>
                <li className="list-group-item">
                  Stock : {reduxSingleProduct.stock}
                </li>
              </ul>
              {reduxSingleProduct.stock > 0 ? (
                <div>
                  <div className="d-flex justify-content-center mt-4">
                    <button onClick={decrement} className="btn btn-dark">
                      -
                    </button>
                    <span className="mx-4">{count}</span>
                    <button onClick={increment} className="btn btn-dark">
                      +
                    </button>
                  </div>
                  <button onClick={handleAddToCart} className='btn btn-warning mt-4 w-100 btn-lg'>Add To Cart</button>

                </div>
                
              ) : (
                <p className="mt-4 text-muted">Outoff Stock</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
