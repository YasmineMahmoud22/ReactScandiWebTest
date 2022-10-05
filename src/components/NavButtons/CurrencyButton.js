import React from "react";
import { connect } from "react-redux";
import {sendCurrency} from"..//..//actions/currency"
import {CurrenciesContainer,ShowCurrenciesList, CurrenciesList, CurrencyOption} from "./styles/CurrencyButtonStyle";
class CurrencyButton extends React.Component{
    state={
        showList:false,
    }
    
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
           this.setState({showList:false,})
        }
    }
    chooseCurrency=(event)=>{
        const currency = event.target.getAttribute("data-name");
        this.props.SetCurrency(currency);
        this.setState(prevState => {
            return {
              showList: !prevState.showList
            };
          });
    }
    DisplayList =()=>{
        this.setState(prevState => {
            return {
              showList: !prevState.showList
            };
          });
    }
    render(){
        const {currencies,currency} = this.props;
        const {showList}=this.state;
        return(
            <CurrenciesContainer ref={this.wrapperRef}>
                    <ShowCurrenciesList Active={showList?true:false} onClick={this.DisplayList}>
                        {currency}
                    </ShowCurrenciesList>
                   {showList &&
                     <CurrenciesList>
                       {currencies.map((currency)=>
                       <CurrencyOption key={Math.random()} data-name={currency.symbol} onClick={this.chooseCurrency}>
                           {currency.symbol} {currency.label}           
                       </CurrencyOption>)}
                    </CurrenciesList>}
            </CurrenciesContainer>
        )
    }
}
const mapStatetoProps=(state)=>({
    currency: state.products.currency,
    category : state.products.category
});

const mapDispatchToProps =(dispatch)=>({
    SetCurrency : (currency)=> dispatch(sendCurrency(currency))

});


export default connect(mapStatetoProps,mapDispatchToProps)(CurrencyButton);