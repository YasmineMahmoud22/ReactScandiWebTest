import React from "react";
import ProductCard from "./ProductCard";
import {CategoryContainer,Title,CardsList} from "./styles/CategoryCardsStyle";

class CategoryCards extends React.Component{
    render(){
        const {categoryProducts}=this.props;
        return(
  
            <CategoryContainer>
              <Title> {categoryProducts.name.toUpperCase()}</Title>
              <CardsList>
              {categoryProducts.products.map((product)=>
                  <li key={product.id}>
                    <ProductCard 
                      key={product.id}
                      product={product}    
                    />
                  </li>
            )}
              </CardsList>
           </CategoryContainer>
        )
    }
}

export default CategoryCards;