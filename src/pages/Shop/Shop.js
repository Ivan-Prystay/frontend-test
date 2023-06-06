import { useState } from 'react';
import ShopButtomList from '../../components/ShopButtomList/ShopButtomList';
import ShopProductList from '../../components/ShopProductList/ShopProductList';

const Shop = ({ selectedProduct, setSelectedProduct }) => {
  const [productList, setProductList] = useState([]);

  const handleProductAction = _id => {
    const selectedProductIndex = selectedProduct.findIndex(
      item => item._id === _id
    );

    if (selectedProductIndex !== -1) {
      const updatedSelectedProduct = [...selectedProduct];
      updatedSelectedProduct.splice(selectedProductIndex, 1);
      setSelectedProduct(updatedSelectedProduct);
    } else {
      const clickedProduct = productList.find(item => item._id === _id);
      setSelectedProduct([...selectedProduct, clickedProduct]);
    }
  };

  return (
    <>
      <div
        style={{
          border: 'solid red 3px',
          borderRadius: '25px',
          display: 'flex',
          padding: '20px',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            border: 'solid red 3px',
            padding: '20px',
            borderRadius: '25px',
          }}
        >
          <ShopButtomList setProductList={setProductList} />
        </div>

        <div
          style={{
            width: '1020px',
            border: 'solid red 3px',
            height: '90vh',
            borderRadius: '25px',
          }}
        >
          <div
            style={{
              width: '980px',
              overflowY: 'scroll',
              padding: '20px',
            }}
          >
            <ShopProductList
              productList={productList}
              selectedProduct={selectedProduct}
              onProductAction={handleProductAction}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
