import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyData = [
  {
    id: "p1",
    price: 7,
    title: "first item",
    description: "first item description",
  },
  {
    id: "p2",
    price: 5,
    title: "second item",
    description: "second item description",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
