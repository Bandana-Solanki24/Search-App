// import React from 'react';
// import axios from 'axios';
// import {useState, useEffect} from 'react';

// function Cake() {
//   const [cardList, setCardList]=useState([]);

//   useEffect(()=>{
//     getImages()

//   },[]);
//   const getImages=async ()=>{
//     const response=await axios.get("http://localhost:5000/cakes");
//     setCardList(response.data);
//     console.log(response)
//   }

//   return (
//     <div> 
//       <ul>
        
//           {cardList.map((eachCard)=>{
//             <li key={eachCard.id}>
//               <img src={eachCard.img}/>
//             </li>

//           })}
      

//       </ul>
//     </div>
//   )
// }

// export default Cake
import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import './index.css'

const Cakes=()=>{
    const [images, setImages]=useState([]);

    useEffect(()=>{
        getImages()
    },[])

    const getImages=async ()=>{
        const result=await axios.get(" http://localhost:5000/cakes")
        setImages(result.data)
        console.log(result)
    }
    

    return(
        <div className="container">
            
            <ul>
                {images.map((image)=>{
                    return (
                        <li key={image.id}>
                            <div className="image-container">

                            <img className="image" src={image.img} alt={image.imageUrl}/>
                            
                            </div>
                            
                        </li>
                    )
                })}
            </ul>
        </div>
        

    )

}
export default Cakes;