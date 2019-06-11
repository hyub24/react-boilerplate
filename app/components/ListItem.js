import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1% 5%;
  margin: 0;
  width: 100%;
  overflow: hidden;
  font-style: italic;
  font-size: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ListItem = ({ string }) => <Wrapper>{string}</Wrapper>;

ListItem.propTypes = {
  string: PropTypes.string,
};

export default ListItem;
