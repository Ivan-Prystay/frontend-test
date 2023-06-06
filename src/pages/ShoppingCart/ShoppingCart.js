import OrderForm from '../../components/OrderForm/OrderForm';

const ShoppingCart = ({ selectedProduct, setOrder }) => {
  return (
    <>
      <h1>ShoppingCart</h1>
      <OrderForm selectedProduct={selectedProduct} setOrder={setOrder} />
    </>
  );
};

export default ShoppingCart;
