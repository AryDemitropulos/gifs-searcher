import React, { useState } from "react";

export const GifGridItem = ({ title, url }) => {
  const [showTitle, setShowTitle] = useState(false);
  return (
    <div className="gif-container animate__fadeIn">
      <img
        src={url}
        title={title}
        onMouseEnter={() => setShowTitle(true)}
        onMouseLeave={() => setShowTitle(false)}
      />
      {showTitle && (
        <h4
          className="title animate__fadeInUp"
          onMouseEnter={() => setShowTitle(true)}
          onMouseLeave={() => setShowTitle(false)}
        >
          {title}
        </h4>
      )}
    </div>
  );
};
