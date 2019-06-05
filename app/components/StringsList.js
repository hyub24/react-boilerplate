import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const StringsList = ({ strings }) => (
  <div>
    {strings.map(string => (
      <ListItem string={string.input} key={string.id} />
    ))}
  </div>
);

StringsList.propTypes = {
  strings: PropTypes.array,
};

export default StringsList;
