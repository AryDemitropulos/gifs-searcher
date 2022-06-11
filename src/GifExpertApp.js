import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const initialCategories = ["Haikyuu"];
  const [categories, setCategories] = useState(initialCategories);

  const handleAdd = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <div className="m-30">
        <ol>
          {categories.map((category) => (
            <GifGrid category={category} key={category} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifExpertApp;
