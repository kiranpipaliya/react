import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
import { ProductContext } from '../context/product-context';
import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hook-store/store';
import './Products.css';

const Products = props => {
  const productList = useContext(ProductContext).products;
  const state = useStore()[0];
  return (
    <ul className="products-list">
      {/* {productList.map(prod => ( */}
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;