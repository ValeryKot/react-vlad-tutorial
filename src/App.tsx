import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Product from './components/Product';
import { useProducts } from './hooks/products';

function App() {
  const { products, loading, error } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader  />}
      {error && <ErrorMessage error={error} />}
      {products.map((prod) => (
        <Product product={prod} key={prod.id} />
      ))}
    </div>
  );
}

export default App;
