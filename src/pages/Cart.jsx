import React from "react";
import { useSelector  ,useDispatch} from "react-redux";
import { removeFromCartAction } from "../actions/cartAction";

export default function Cart() {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const handleRemoveFroCart = id => dispatch(removeFromCartAction(id))
  return (
    <div className="container">
      <div className="row">
        {cartItem.map((item) => {
          return (
            <div key={item._id} className="col-sm-12">
              <div className="card mt-3 mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={`${process.env.REACT_APP_URL}/${item.image}`}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <li className="list-group-item">Brand : {item.brand}</li>
                      <li className="list-group-item">Name : {item.name}</li>
                      <li className="list-group-item">price : {item.price}</li>
                      <li className="list-group-item">qty : {item.qty}</li>
                      <li className="list-group-item">
                        total : {item.qty * item.price}
                      </li>
                      <li className="list-group mt-3">
                        <button onClick={e => {handleRemoveFroCart(item._id)}} className="btn btn-outline-danger w-100">
                          <i class="bi bi-trash"></i>
                        </button>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


