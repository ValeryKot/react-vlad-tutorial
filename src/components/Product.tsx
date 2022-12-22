import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}
// type Props = {}

export default function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        className={`px-2 py-4 border ${
          details ? 'bg-indigo-500' : 'bg-orange-300'
        }`}
        onClick={() => setDetails(!details)}
      >
        {details ? 'Hide details' : 'Show Details'}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold' }}>{product.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
