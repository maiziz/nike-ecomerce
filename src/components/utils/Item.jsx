import React, { useState } from 'react';
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Item = ({ ifExists, id, color, shadow, title, text, img, btn, rating, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('40');
  const sizes = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];

  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price, size: selectedSize };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(setOpenCart({
      cartState: true
    }));
  };

  const goToProductDetails = () => {
    // Convert id to string to ensure consistent handling
    const productId = id.toString();
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <div 
        className={`relative bg-gradient-to-b ${color} ${shadow} 
          rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 cursor-pointer rtl
          ${ifExists ? 'min-h-[200px] flex items-center justify-between' : 'grid items-center justify-items-center'}`}
        onClick={goToProductDetails}
      >
        {ifExists ? (
          <>
            {/* Text Content - Left Side */}
            <div className="flex-1 grid gap-2 ml-4 z-20">
              <div className="grid gap-1">
                <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">{title}</h1>
                <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">{text}</p>

                <div className="flex items-center justify-between w-28 my-2">
                  <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
                    <h1 className="text-black text-sm font-medium">${price}</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
                    <h1 className="md:text-sm font-normal text-slate-100">{rating}</h1>
                  </div>
                </div>
              </div>

              {/* Size Selector */}
              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <select 
                  value={selectedSize} 
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500 bg-white/80"
                >
                  {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="bg-white/90 blur-effect-theme button-theme px-4 py-1.5 shadow shadow-sky-200 text-sm text-black flex items-center gap-2"
                  onClick={() => { onAddToCart(); onCartToggle(); }}
                >
                  <ShoppingBagIcon className="icon-style text-slate-900 w-5 h-5" />
                  {btn}
                </button>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1 flex justify-end items-center">
              <img
                src={img}
                alt={`img/item-img/${id}`}
                className="transitions-theme hover:-rotate-12 w-auto h-[180px] object-contain transform -rotate-[35deg]"
              />
            </div>
          </>
        ) : (
          // Regular product layout (unchanged)
          <>
            <div className="grid items-center justify-items-center gap-4">
              <div className="grid gap-2">
                <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">{title}</h1>
                <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">{text}</p>

                <div className="flex items-center justify-between w-28 my-2">
                  <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
                    <h1 className="text-black text-sm font-medium">${price}</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
                    <h1 className="md:text-sm font-normal text-slate-100">{rating}</h1>
                  </div>
                </div>

                {/* Size Selector */}
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <select 
                    value={selectedSize} 
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500 bg-white/80"
                  >
                    {sizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    className="bg-white/90 blur-effect-theme button-theme px-4 py-1.5 shadow shadow-sky-200 text-sm text-black flex items-center gap-2"
                    onClick={() => { onAddToCart(); onCartToggle(); }}
                  >
                    <ShoppingBagIcon className="icon-style text-slate-900 w-5 h-5" />
                    {btn}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={img}
                  alt={`img/item-img/${id}`}
                  className="transitions-theme hover:-rotate-12 h-36 w-64"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Item;
