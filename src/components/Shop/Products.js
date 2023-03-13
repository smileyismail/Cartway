import { useEffect, useState, useCallback } from "react";
import ProductItem from "./ProductItem";

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
    <>
      <h2 className="m-8">Buy your favorite products</h2>

      <div className="flex justify-evenly items-center py-4 border-b-[1px] mb-4 border-action">
        <div>
          <label htmlFor="category">Select Category: </label>
          <select
            id="category"
            value={category}
            onChange={selectCategoryHandler}
            className="p-2 rounded-md border-[1px] border-action"
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
            className="p-2 rounded-md border-[1px] border-action"
          />
        </div>
      </div>
      {!isLoading && (
        <ul className="flex flex-wrap justify-center item gap-4">
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
    </>
  );
};

export default Products;
