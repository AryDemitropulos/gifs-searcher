import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({ target }) => {
    const newValue = target?.value;
    setInputValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>AddCategory</h3>
      <div className="my-30 flex-c-sb">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
