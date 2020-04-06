import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function NewName(props) {
  const [name, setName] = useState(props.nextName);

  const saveName = evt => {
    if (name.name === "") {
      return;
    }
    props.addName(name);
    evt.preventDefault();
  };

  useEffect(() => setName({ ...props.nextName }), [props.nextName]);

  const onChange = evt => {
    const val = evt.target.value;
    name.name = val;
    setName({ ...name });
  };
  return (
    <div>
      <h4>Create name</h4>
      <form>
        <input value={name.name} onChange={onChange} />
        <br />
        <br />
        <button onClick={saveName}>Save</button>
      </form>
    </div>
  );
}
export default NewName;

NewName.propTypes = {
  nextName: PropTypes.object,
  addName: PropTypes.func
};
