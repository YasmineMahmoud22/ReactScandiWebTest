import React from "react";
import { Cost } from "./styles/PriceStyle";
class Price extends React.Component{
    render(){
        const {prices,currency,minicart}= this.props;
        const price = prices.filter((price)=>(
            price.currency.symbol===currency
       ))
        return(
            <Cost minicart={minicart?true:false}>
                {price[0].currency.symbol}<span>{price[0].amount}</span>
            </Cost>

        )
    }
}

export default Price;