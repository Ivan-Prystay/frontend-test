import { useState } from 'react';

import {
  StyledForm,
  WrapList,
  WrapInput,
  StyledInput,
  SubmitButton,
} from './OrderForm.styled';

const OrderForm = ({ selectedProduct, setOrder }) => {
  const [inputValues, setInputValues] = useState({});

  const totalPrice = selectedProduct.reduce((total, item) => {
    const itemQuantity = inputValues[item._id] || 0;
    return total + item.price * itemQuantity;
  }, 0);

  const handleSubmit = event => {
    event.preventDefault();

    if (!totalPrice) {
      alert('You order is empty');
      return;
    }

    const form = event.target;
    setOrder({
      name: form.elements.name.value,
      number: form.elements.phone.value,
      adress: form.elements.adress.value,
      email: form.elements.email.value,
      totalPrice: totalPrice,
    });

    form.reset();
  };

  const handleInputChange = event => {
    const { id, value } = event.target;
    setInputValues(prevValues => ({
      ...prevValues,
      [id]: Number(value),
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <StyledForm onSubmit={handleSubmit}>
        <WrapInput>
          <label>
            Name
            <br />
            <StyledInput type="text" name="name" autoComplete="off" required />
          </label>
          <label>
            Email
            <br />
            <StyledInput
              type="email"
              name="email"
              autoComplete="off"
              required
            />
          </label>
          <label>
            Phone
            <br />
            <StyledInput type="tel" name="phone" autoComplete="off" required />
          </label>
          <label>
            Adress
            <br />
            <StyledInput
              type="text"
              name="adress"
              autoComplete="off"
              required
            />
          </label>
        </WrapInput>
        <WrapList>
          <ul>
            {selectedProduct?.map(item => (
              <li
                style={{
                  border: '1px red solid',
                  padding: '10px',
                  marginBottom: '15px',
                  borderRadius: '15px',
                }}
                key={item._id}
              >
                <img style={{ width: '220px' }} src={item.image} alt="#" />
                <p>{item.nameFood}</p>
                <p>{+item.price}</p>
                <input
                  id={item._id}
                  type="number"
                  min={0}
                  max={200}
                  value={inputValues[item._id] || ''}
                  onChange={handleInputChange}
                />
              </li>
            ))}
          </ul>
        </WrapList>
        <div style={{ display: 'block' }}>
          <p>Total Price: {totalPrice}</p>
          <SubmitButton type="submit" value="Submit" />
        </div>
      </StyledForm>
    </div>
  );
};

export default OrderForm;
