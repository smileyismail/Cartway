import { useEffect, useState, useCallback } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

let productsData = [];

const Products = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    productsData = data;
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <div className={classes.inputs}>
        <div></div>
        <div>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            placeholder="Search Product..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
      {!isLoading && (
        <ul>
          {productsData
            .filter((product) => {
              if (searchTerm === "") {
                return product;
              } else if (
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))}
        </ul>
      )}
      {isLoading && <h1>Loading...</h1>}
    </section>
  );
};

export default Products;
