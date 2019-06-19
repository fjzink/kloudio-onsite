import React from 'react';

export default ({ value, onChange, onSubmit }) => {
  return (
    <form>
      <label className="input-label" htmlFor="apiurl">
        API URL:
        <input id="apiurl" className="form-input" type="text" value={value} onChange={onChange} />
      </label>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};
