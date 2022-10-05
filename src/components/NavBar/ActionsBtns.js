import React from "react";
import CurrencyButton from "../NavButtons/CurrencyButton";
import CartButton from "../NavButtons/CartButton";
import { Actions } from "./styles/ActionsBtnsStyle";
import {NavList} from "./styles/ActionsBtnsStyle";
class ActionBtns extends React.Component{
    state={
        cartButton :false,
        currencyButton:false
    }
    
    
    render(){
        const {disableButton}=this.state;
        const {currencies}=this.props;
        return(
            <Actions>
                <NavList>
                    <li key={"currency-btn"}>
                    <CurrencyButton currencies={currencies} />
                    </li>
                    <li key={"cart-btn"}>
                     <CartButton disableButton={disableButton} />
                    </li>
                </NavList>
             </Actions>
        )
    }
}

export default ActionBtns;