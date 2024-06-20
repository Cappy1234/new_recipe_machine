import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #3f51b5;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

const Header = () => {
  return <HeaderContainer>Recipe Search Application</HeaderContainer>;
};

export default Header;
