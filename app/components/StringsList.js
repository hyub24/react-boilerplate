import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const StringsList = ({ strings, error }) => {
  if (error) return <ListItem string={error.message} key={error.message} />;
  return (
    <div>
      {strings.map(string => (
        <ListItem string={string.input} key={string.id} />
      ))}
    </div>
  );
};

StringsList.propTypes = {
  strings: PropTypes.array,
  error: PropTypes.object,
};

export default StringsList;
