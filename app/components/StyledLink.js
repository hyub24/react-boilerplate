import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin: 1% 1%;
  padding: 1% 1%;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid;
  color: deepskyblue;
`;

export default StyledLink;
