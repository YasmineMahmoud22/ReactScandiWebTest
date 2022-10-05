import React from "react";
import { TotalContainer,TotalValue ,Quantity,OrderButton,Tax} from "./styles/TotalStyle";
class Total extends React.Component{
    render(){
        const {cart,currency,miniCart}=this.props;
        const total= cart.map((product)=>
            {return  product.value * product.product.prices.filter((price)=>
                price.currency.symbol === currency
                )[0].amount;
            }).reduce((a,b)=>a+b,0);
        const NumberofProducts = cart.map((product)=>
            {return  product.value 
            }).reduce((a,b)=>a+b,0);
        const tax = (21/100)* total;
        return(                
            miniCart
            ?
            <TotalValue miniCart={miniCart?true:false}>Total <span>{currency}{total.toFixed(2)}</span></TotalValue>
            :
            <TotalContainer>
            <Tax>Tax 21%:&nbsp; &nbsp;<span>{tax.toFixed(2)}</span></Tax>
            <Quantity> Quantity: <span>{NumberofProducts}</span></Quantity>
            <TotalValue>Total:&nbsp; &nbsp; &nbsp; &nbsp;<span>{currency}{total.toFixed(2)}</span></TotalValue>
            <OrderButton>ORDER</OrderButton>
            </TotalContainer>   
            )
    }
}
export default Total;