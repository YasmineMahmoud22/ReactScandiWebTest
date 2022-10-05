import React from "react";
import CartAttributes from "../CartAttributes";
import Counter from "../Counter";
import Price from "../price";
import { v4 as uuidv4 } from 'uuid';
import {MiniCartContainer,MiniCartProduct,ProductDetails
    ,ProductName,MiniCartAttributeName,MiniCartImgsContainer,ProductImage, CounterImageContainer} from "./styles/MiniCartListStyle";
class MiniCartList extends React.Component{
    render(){
        const {currency,cart}=this.props
        return(
                <MiniCartContainer>
                    {cart.map((item)=>
                      <li key={uuidv4()}>
                         <MiniCartProduct>
                            <ProductDetails>
                                <ProductName>{item.product.name}</ProductName>
                                <Price minicart={true} prices={item.product.prices} currency={currency}/>                                
                                 {item.product.attributes.map((attribute)=>
                                    <div key={uuidv4()}>
                                     <MiniCartAttributeName>{attribute.name}:</MiniCartAttributeName>
                                     <CartAttributes attribute={attribute} 
                                            item={item}/>
                                    </div>
                                 )}
                               
                            </ProductDetails> 
                            <CounterImageContainer>
                            <Counter miniCart={true} item={item}/>
                            <MiniCartImgsContainer >
                                 <ProductImage src={`${item.product.gallery[0]}`}/>
                            </MiniCartImgsContainer> 
                            </CounterImageContainer>
                          </MiniCartProduct>
                        </li>
                    )}
                </MiniCartContainer>
        )
    }
}

export default MiniCartList