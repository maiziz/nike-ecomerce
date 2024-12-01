import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setClearCartItems } from '../../app/CartSlice.js';

const CheckoutForm = ({ totalAmount, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      toast.error('الرجاء ملء جميع الحقول المطلوبة');
      return;
    }
    
    // Clear the cart and show success message
    dispatch(setClearCartItems());
    toast.success('تم تأكيد طلبك بنجاح! سنتصل بك قريباً');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[300] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full rtl">
        <h2 className="text-2xl font-bold mb-4 text-center">تأكيد الطلب</h2>
        <p className="text-gray-600 mb-4 text-center">الدفع عند الاستلام</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">الاسم الكامل *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">رقم الهاتف *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">العنوان التفصيلي *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              rows="3"
              required
            ></textarea>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">المدينة *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div className="text-lg font-bold text-center my-4">
            المجموع الكلي: ${totalAmount}
          </div>
          
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-theme-cart text-white py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              تأكيد الطلب
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
