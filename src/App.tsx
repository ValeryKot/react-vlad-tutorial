// import { createElement as e, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import Product from './components/Product';
// import { products } from './data/products';
import { IProduct } from './models';

function App() {
  // const [count, setCount] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchProduct() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=5'
      );
      // console.log(response);
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center text-rose-600">Loading...</p>}
      {error && <p className="text-center text-red-700">{error}</p>}
      {products.map((prod) => (
        <Product product={prod} key={prod.id} />
      ))}
      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  );
}

//   return e('div', { className: 'container' }, [
//     e('h1', { className: 'font-bold', key: 1 }, `Text JSX ${count}`),
//     e(
//       'button',
//       {
//         className: 'py-2 px-4 border',
//         key: 2,
//         onClick: () => setCount(count + 1),
//       },
//       'Click me'
//     ),
//   ]);
// }

export default App;
