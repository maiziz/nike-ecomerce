import React, { useState } from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from "../../app/CartSlice";

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity, size = '40' } }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(size);

  const sizes = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const onIncreaseItemQTY = () => {
    dispatch(setIncreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const onDecreaseItemQTY = () => {
    dispatch(setDecreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className="flex items-center justify-between w-full px-5 rtl">
      <div className="flex items-center gap-5">
        <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
          <img src={img} alt={`صورة المنتج/${title}`} className="w-36 h-auto object-fill lg:w-28" />
          <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">${price}</div>
        </div>
        <div className="grid items-center gap-4">
          <div className="grid items-center leading-none">
            <h1 className="font-medium text-lg text-slate-900 lg:text-sm">{title}</h1>
            <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
          </div>

          {/* Size Selector */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">المقاس:</label>
            <select 
              value={selectedSize} 
              onChange={handleSizeChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
            >
              {sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-around w-full">
            <button type="button" onClick={onDecreaseItemQTY} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
              <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
            </button>
            <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">{cartQuantity}</div>
            <button type="button" onClick={onIncreaseItemQTY} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
              <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid items-center gap-5">
        <div className="grid items-center justify-center">
          <h1 className="text-lg lg:text-base text-slate-900 font-medium">${price * cartQuantity}</h1>
        </div>
        <div className="grid items-center justify-center">
          <button type="button" className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer" onClick={onRemoveItem}>
            <TrashIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
