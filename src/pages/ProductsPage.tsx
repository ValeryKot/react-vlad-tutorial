import React, { useContext } from 'react'
import CreateProduct from '../components/CreateProduct';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import Product from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';

export default function ProductsPage() {
    const { products, loading, error, addProduct } = useProducts();
    // const [modal, setModal] = useState(true);
    const {modal, open, close} = useContext(ModalContext);
  
    const createHandler = (product: IProduct) => {
      // setModal(false);
      close();
      addProduct(product);
    };
  
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map((prod: IProduct) => (
          <Product product={prod} key={prod.id} />
        ))}
        {modal && (
          <Modal title="Create new product" onClose={() => close()}>
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}
  
        <button
          className="absolute px-5 py-2 bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl"
          onClick={() => open()}
        >
          +
        </button>
      </div>
    );
}
