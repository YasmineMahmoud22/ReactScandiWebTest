import React from "react";
import { connect } from "react-redux";
import CartOverlay from "./CartOvelay";
import { MiniCartWrapper } from "./styles/MiniCartStyle";
class MiniCart extends React.Component{
    render(){
        const{currency,cart,DisplayCart,wrapperRef}= this.props;
        return(
           <div>
           <MiniCartWrapper>
           </MiniCartWrapper>
              <CartOverlay wrapperRef = {wrapperRef} currency={currency} cart={cart} DisplayCart={DisplayCart}/>
           </div>
        )
    }
}
const mapStatetoProps=(state)=>({
    cart:state.products.cart,
    currency:state.products.currency,
})

export default connect(mapStatetoProps)(MiniCart); 