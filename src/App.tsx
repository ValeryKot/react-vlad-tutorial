import CreateProduct from './components/CreateProduct';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Product from './components/Product';
import { useProducts } from './hooks/products';
import { useState } from 'react';
import { IProduct } from './models';

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const [modal, setModal] = useState(true);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((prod) => (
        <Product product={prod} key={prod.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => setModal(false)}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="absolute px-5 py-2 bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl"
        onClick={() => setModal(true)}
      >
        +
      </button>
    </div>
  );
}

export default App;
