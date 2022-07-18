import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: "1",
      quantity: 5,
      name: "Pizza",
      price: 120,
      description: "lka jsda askdh ad akjhdakjdajkh sdahjk dasdhjk a",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__480.jpg",
    },
    {
      id: "2",
      quantity: 10,
      name: "Burger",
      price: 160,
      description: "lka jsda askdh ad akjhdakjdajkh sdahjk dasdhjk a",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__480.jpg",
    },
    {
      id: "3",
      quantity: 4,
      name: "Momo",
      price: 150,
      description: "lka jsda askdh ad akjhdakjdajkh sdahjk dasdhjk a",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__480.jpg",
    },
    {
      id: "4",
      quantity: 4,
      name: "Roll",
      description: "lka jsda askdh ad akjhdakjdajkh sdahjk dasdhjk a",
      price: 300,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__480.jpg",
    },
    {
      id: "5",
      quantity: 5,
      name: "Roll",
      description: "lka jsda askdh ad akjhdakjdajkh sdahjk dasdhjk a",
      price: 200,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__480.jpg",
    },
  ];
  return (
    <div className="col-span-2 flex flex-wrap">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;
