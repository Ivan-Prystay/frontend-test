import { StyledList, StyledItem, StyledButton } from './ShopProductList.styled';

const ShopProductList = ({ productList, selectedProduct, onProductAction }) => {
  const handleButtonClick = _id => {
    onProductAction(_id);
  };

  return (
    <div style={{ width: '900px', overflow: 'hidden' }}>
      <div style={{ height: '80vh', width: '1000px', overflowY: 'scroll' }}>
        <StyledList>
          {productList?.map(item => (
            <StyledItem key={item._id}>
              <div
                style={{
                  padding: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <img
                  src={item.image}
                  alt={item.nameFood}
                  style={{ width: '200px', borderRadius: '8px' }}
                />
                <p>{item.nameFood}</p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                  }}
                >
                  <StyledButton
                    type="button"
                    onClick={() => handleButtonClick(item._id)}
                  >
                    {selectedProduct.find(product => product._id === item._id)
                      ? 'Remove'
                      : 'Add to cart'}
                  </StyledButton>
                </div>
              </div>
            </StyledItem>
          ))}
        </StyledList>
      </div>
    </div>
  );
};

export default ShopProductList;
