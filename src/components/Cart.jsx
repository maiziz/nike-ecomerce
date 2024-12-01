import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals
} from "../app/CartSlice.js";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import CheckoutForm from './cart/CheckoutForm';

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckoutForm(false);
  };

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  }

  useEffect(() => {
    dispatch(setGetTotals())
  },[cartItems, dispatch])

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifCartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible -translate-x-8"
          }`}
        >
          <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
          {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : (
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3 rtl">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
          )}

          {cartItems?.length > 0 && (
            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center rtl">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">رسوم التوصيل:</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">$15.00</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">المجموع الفرعي:</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">المجموع الكلي:</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount + 15.00}</h1>
              </div>

              <div className="grid items-center gap-2">
                <button 
                  type="button" 
                  className="button-theme bg-theme-cart text-white"
                  onClick={handleCheckout}
                >
                  اتمام الطلب (${totalAmount + 15.00})
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showCheckoutForm && (
        <CheckoutForm 
          totalAmount={totalAmount + 15.00} 
          onClose={handleCloseCheckout}
        />
      )}
    </>
  );
};

export default Cart;
