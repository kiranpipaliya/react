
import React, { useState } from "react";
export const ProductContext = React.createContext({
    products: [],
    toggleFavorite: (id) => { }
});

export default props => {
    const [productList, setProductList] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]);

    const toggleFavoriteList = (productId) => {
        setProductList(currentList => {
            console.log(currentList);
            const productIndex = currentList.findIndex(
                p => p.id === productId
            )
            const newFavStatus = !currentList[productIndex].isFavorite
            const updatedProducts = [...currentList]
            updatedProducts[productIndex] = {
                ...currentList[productIndex],
                isFavorite: newFavStatus
            }
            console.log(updatedProducts);
            return updatedProducts
        })
    }

    return (
        <ProductContext.Provider value={{ products: productList, toggleFavorite: toggleFavoriteList }}>
            {props.children}
        </ProductContext.Provider>
    );
}