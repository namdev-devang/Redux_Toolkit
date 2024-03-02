import React from "react";
import { useSelector } from "react-redux";
function CartPage() {
  const { cartData } = useSelector((state) => state.authReducer);
  console.log(cartData, "the cartData");

  return (
    <div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cartData.map((item) => {
          return (
            <>
              <div class="card" style={{ width: "18rem" }}>
                <img src={item.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.category}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <button
                    onClick={() => handleAdd(item)}
                    class="btn btn-primary"
                  >
                    Add_To_Cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;
