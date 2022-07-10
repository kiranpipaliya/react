import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_DATA = [
  {
    id: "b1",
    title: "My First Book",
    price: 10,
    description: "My First Book I Ever Wrote",
  },
  {
    id: "b2",
    title: "My Second Book",
    price: 5,
    description: "My Second Book I Ever Wrote",
  }

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite Book</h2>
      <ul>
        {DUMMY_DATA.map(product =>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        )}

      </ul>
    </section>
  );
};

export default Products;
