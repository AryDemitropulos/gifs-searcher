import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className="my-30">{category}</h2>
      {loading && <p>"Cargando..."</p>}
      <ol className="gifs-container">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ol>
    </>
  );
};
