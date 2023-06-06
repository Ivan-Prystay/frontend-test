import React, { useEffect, useState } from 'react';
import shoplist from '../../services/shopsList.json';
import {
  getMcDonnyProducts,
  getCfkProducts,
  getEtcProducts,
} from '../../api/apiServices';

import {
  StyledLi,
  StyledUl,
  PageTitle,
  StyledButon,
} from './ShopButtomList.styled';

const ShopButtomList = ({ setProductList }) => {
  const [selectedButton, setSelectedButton] = useState(shoplist[0].id);
  const fetchMcDonny = async () => {
    try {
      setProductList(await getMcDonnyProducts());
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCfk = async () => {
    try {
      setProductList(await getCfkProducts());
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEtc = async () => {
    try {
      setProductList(await getEtcProducts());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMcDonny();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonClick = id => {
    setSelectedButton(id);
    if (id === '1') {
      fetchMcDonny();
    } else if (id === '2') {
      fetchCfk();
    } else {
      fetchEtc();
    }
  };
  return (
    <StyledUl>
      <PageTitle>Shops:</PageTitle>
      {shoplist.map(({ id, companyName }) => (
        <StyledLi key={id}>
          <StyledButon
            title="Press My"
            type="button"
            onClick={() => handleButtonClick(id)}
            className={selectedButton === id ? 'selected' : ''}
          >
            {companyName}
          </StyledButon>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default ShopButtomList;
