import { StyledLinkNav, NavWraper } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavWraper>
      <StyledLinkNav to="/">Shop</StyledLinkNav>
      <StyledLinkNav to="/shoppingcart">Shopping Cart</StyledLinkNav>
    </NavWraper>
  );
};
