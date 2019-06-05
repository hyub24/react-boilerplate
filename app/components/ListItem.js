import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ string }) => <div>{string}</div>;

ListItem.propTypes = {
  string: PropTypes.string,
};

export default ListItem;
