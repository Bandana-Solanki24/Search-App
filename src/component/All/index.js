import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const All = () => {
  const [images, setImages] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const result = await axios.get("http://localhost:5000/all");
    setImages(result.data);
    console.log(result);
  };

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header-container">
        <h1 className="heading">Our store</h1>
        <input
          placeholder="Search Products"
          onChange={handleChange}
          value={searchItem}
          className="input-element"
          type="text"
        />
      </div>

      <ul>
        {filteredImages.map((image) => {
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

export default All;
