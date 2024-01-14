
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/carts/actions'
import { removeQuantity } from '../redux/products/actions'


const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, image, name, category, price, quantity } = product;
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(removeQuantity(id));
   
  };
  return (
    <div className='card md:w-96 bg-base-100 shadow-xl'>
      <figure className='relative'>
        <img src={`${image}`} alt={`${name}`} className='h-80 w-full object-cover' />
        <div className='badge bg-red-900 text-white absolute top-3 right-3 py-3 px-2 rounded'>
          {category}
        </div>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>

        <div className='flex justify-between'>
          <p className='w-full'>Available {quantity}</p>
          <p className='text-left'>{price}฿</p>
        </div>
        <div className='card-action mt-2 '>
          <button className=' btn btn-block bg-red-900 text-blue-50'
            disabled={quantity === 0} 
            onClick={handleAddToCart}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem

