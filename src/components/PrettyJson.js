import React from 'react';
import ReactJson from 'react-json-view';

export default ({ data }) => {
  return <div className="json-data">{data ? <ReactJson src={data} /> : null}</div>;
};
