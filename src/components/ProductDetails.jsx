import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBagIcon, StarIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { setAddItemToCart } from '../app/CartSlice';
import { popularsales, toprateslaes, sneaker, highlight } from '../data/data.js';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('40');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Combine all products from different sources
    const allProducts = [...popularsales.items, ...toprateslaes.items];
    const foundProduct = allProducts.find(item => item.id.toString() === id);
    
    if (foundProduct) {
      // Add multiple images to the product
      foundProduct.images = [
        foundProduct.img,
        sneaker.img,
        highlight.img,
      ];
      setProduct(foundProduct);
    }
  }, [id]);

  const onAddToCart = () => {
    if (product) {
      const item = { ...product, cartQuantity: 1, selectedSize };
      dispatch(setAddItemToCart(item));
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">المنتج غير موجود</h2>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 bg-theme-cart text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ArrowLeftIcon className="w-6 h-6 text-slate-800" />
      </button>

      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Image Gallery */}
          <div className="flex-1 min-w-0">
            {/* Main Image */}
            <div className={`bg-gradient-to-b ${product.color} ${product.shadow} rounded-xl p-4 mb-4`}>
              <div className="relative aspect-square">
                <img 
                  src={product.images[selectedImageIndex]} 
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImageIndex === index ? 'border-theme-cart scale-105' : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.title} view ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="flex-1 min-w-0 md:max-w-md">
            <div className="sticky top-4 space-y-6">
              {/* Title and Price */}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{product.title}</h1>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <span className="text-slate-600">{product.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600">{product.text}</p>

              {/* Size Selection */}
              <div className="space-y-3">
                <label className="block font-medium text-slate-900">اختر المقاس:</label>
                <div className="grid grid-cols-5 gap-2">
                  {['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 rounded-lg text-center transition-colors ${
                        selectedSize === size
                          ? 'bg-theme-cart text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-slate-800'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={onAddToCart}
                className="w-full flex items-center justify-center gap-2 bg-theme-cart text-white py-3 rounded-xl text-lg font-medium hover:opacity-90 transition-opacity"
              >
                <ShoppingBagIcon className="w-6 h-6" />
                إضافة إلى السلة
              </button>

              {/* Features */}
              <div className="border-t pt-6">
                <h2 className="font-bold text-slate-900 mb-4">مميزات المنتج</h2>
                <ul className="space-y-2">
                  {[
                    'حذاء رياضي عالي الجودة',
                    'مريح وخفيف الوزن',
                    'مناسب للرياضة واليومي',
                    'تصميم عصري وأنيق'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-theme-cart" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
