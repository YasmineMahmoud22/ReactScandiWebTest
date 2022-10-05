import React from "react";
import {Link} from "react-router-dom";
import Total from "../Total";
import MiniCartList from "./MiniCartList";
import {MiniCartOverLay,HeadLine,Span,MiniCartButtons,MiniCartButton} from "./styles/CartOverlayStyle";
class CartOverlay extends React.Component{
    render(){
        const{currency,cart,DisplayCart,wrapperRef}= this.props;
        const NumberofProducts = cart.map((product)=>
        {return  product.value 
        }).reduce((a,b)=>a+b,0);
        return(
            <MiniCartOverLay ref={wrapperRef}>
            <HeadLine>My Bag, <Span>{NumberofProducts} items</Span></HeadLine>
                    <MiniCartList currency={currency} cart={cart}/>
                  <Total miniCart={true} cart={cart} currency={currency}/>
                <MiniCartButtons>
                    <Link to="/cart">
                    <MiniCartButton onClick={DisplayCart} >VIEW BAG</MiniCartButton>
                    </Link>
                    <MiniCartButton CheckOut>CHECK OUT</MiniCartButton>
                </ MiniCartButtons>
            </MiniCartOverLay>
        )
    }
}

export default CartOverlay;