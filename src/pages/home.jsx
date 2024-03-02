import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddData, decreasCount, getData, increasCount, } from "../redux/action/auth.action";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { count } = useSelector((state) => state.authReducer);
  const { cartData } = useSelector((state) => state.authReducer);
  const { product } = useSelector((state) => state.authReducer);
  console.log(product, "the product");
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(increasCount())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decreasCount())}>-</button>
<hr/>
<hr/>
<button class="btn btn-primary" onClick={()=>navigate("/cart")}>
  cart : {cartData.length}
</button>

<hr/>
<hr/>

      <div className="cart">
        <h2>Shopping Cart</h2>
        {
          product.map((item)=>{
              return<>
                <div class="card" style={{"width": "18rem"}}>
              <img src={item.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{item.category}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              
                <button onClick={()=>dispatch(AddData(item))} class="btn btn-primary">
                 Add_To_Cart
                </button>
              </div>
            </div>
              </>
          })
        }
      </div>
    </div>
  );
};

export default Home;
