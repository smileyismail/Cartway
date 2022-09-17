import { useEffect, useState, useCallback } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  function selectCategoryHandler(e) {
    setCategory(e.target.value);
    setSearchTerm("");
  }

  let sortedProducts = products.filter((product) => {
    if (category === "men's clothing") {
      return product.category === "men's clothing";
    }
    if (category === "jewelery") {
      return product.category === "jewelery";
    }
    if (category === "electronics") {
      return product.category === "electronics";
    }
    if (category === "women's clothing") {
      return product.category === "women's clothing";
    }

    return product;
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <div className={classes.inputs}>
        <div className={classes.sort}>
          <label htmlFor="category">Select Category: </label>
          <select
            id="category"
            value={category}
            onChange={selectCategoryHandler}
          >
            <option value="all">All</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelry</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>
        <div>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            placeholder="Search Product..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCategory("all");
            }}
          />
        </div>
      </div>
      {!isLoading && (
        <ul>
          {sortedProducts
            .filter((product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                a
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
