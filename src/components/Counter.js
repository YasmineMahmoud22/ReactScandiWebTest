import React from "react";
import { decrementProduct, incrementProduct, removeProduct } from "../actions/cart";
import { connect } from "react-redux";
import {CounterButtons} from "./styles/CounterStyle";

class Counter extends React.Component{
    incrementValue=(e,productKey)=>{
        this.props.increment(productKey,1);
       };
   decrementValue=(e,productKey)=>{
       const value = e.target.value;
       if(value === "1"){
           this.props.remove(productKey);
       }else{
           this.props.decrement(productKey,1)
       }


   }
    render(){
        const {item,miniCart}=this.props;
        return(
            
                <CounterButtons miniCart={miniCart?true:false}>
                    <li><button onClick={(event)=>this.incrementValue(event,item.key)}>+</button></li>
                    <li>{item.value}</li>
                    <li><button value={item.value} onClick={(event)=>this.decrementValue(event,item.key)}>-</button></li>
                </CounterButtons>
            
        )
    }
}
const mapDispatchtoProps=(dispatch)=>({
    increment: (key,value)=> dispatch(incrementProduct({key,value})),
    remove :(key)=> dispatch(removeProduct({key})),
    decrement:(key,value)=>dispatch(decrementProduct({key,value}))
     
    })
export default connect(null,mapDispatchtoProps)(Counter);