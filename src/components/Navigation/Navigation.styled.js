import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWraper = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const StyledLinkNav = styled(NavLink)`
  font-size: 18px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
  background: rgba(224, 224, 224, 0.5);
  color: black;

  &:hover,
  &.active {
    background: #cc5454;
    color: white;
  }
`;
