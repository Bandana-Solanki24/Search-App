import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const Cakes = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const result = await axios.get(" http://localhost:5000/cakes");
    setImages(result.data);
    console.log(result);
  };

  return (
    <div className="container">
      <ul>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <div className="image-container">
                <img className="image" src={image.img} alt={image.imageUrl} />
                <div className="names">{image.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cakes;
