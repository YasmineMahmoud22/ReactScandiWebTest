import React from "react";
import { connect } from "react-redux";
import CartAttributes from "../CartAttributes";
import Counter from "../Counter";
import ImgSlider from "../imgSlider";
import Price from "../price";
import Total from "../Total";
import { v4 as uuidv4 } from 'uuid';
import { CartList,AttributeTitle,CartProductContainer, CartProductDetails, Container, HeadLine, Hr, CounterImageContainer } from "./styles/CartPageStyle";
import { ProductName} from "../styles/ProductDetailsStyle";


class CartPage extends React.Component{
    
    incrementValue=(e,productID)=>{
         this.props.increment(productID,1);
        };
    decrementValue=(e,productId)=>{
        const value = e.target.value;
        console.log(value==="1");
        if(value === "1"){
            this.props.remove(productId);
        }else{
            this.props.decrement(productId,1)
        }


    }

    
    render(){
        const{currency,cart}= this.props;
        return(
            <Container>
                <HeadLine> CART</HeadLine>
                <Hr/>
                <CartList>
                 {cart.map((item)=>
                    <li key={uuidv4()}>
                        <CartProductContainer>
                            <CartProductDetails>
                                <ProductName>{item.product.name}</ProductName>
                                 <Price prices={item.product.prices} currency={currency}/> 
                                    {item.product.attributes.map((attribute)=> 
                                        <div key={uuidv4()}>
                                        <AttributeTitle>{attribute.name.toUpperCase()}:</AttributeTitle>
                                        <CartAttributes attribute={attribute} item={item} cart={true}/>
                                       </div>
                                    )}
                            </CartProductDetails> 
                            <CounterImageContainer>
                                <Counter item={item} />
                               <ImgSlider item={item}/>
                            </CounterImageContainer>
                        </CartProductContainer>
                        <Hr/>
                    </li>
                  )}
               </CartList>
               <Total cart={cart} currency={currency} />
            </Container>
        )
    }
}
const mapStatetoProps=(state)=>({
    cart:state.products.cart,
    currency:state.products.currency,
})

export default connect(mapStatetoProps)(CartPage);