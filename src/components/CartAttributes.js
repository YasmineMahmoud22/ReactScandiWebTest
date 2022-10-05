import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {AttributesContainer,ColoredBoxContainer,AttributeBox,ColoredBox} from "./styles/CartAttributesStyle";
class CartAttributes extends React.Component{
    render(){
        const {attribute,item,cart}=this.props;
        return(
            <AttributesContainer cart={cart}>
            {attribute.items.map((element)=>
                attribute.name ==="Color"
                ?
                <li key={uuidv4()}>
                <ColoredBoxContainer  cart={cart} activeColoredBox ={item.attributesValue["Color"]===element.displayValue? true:false}>
                    <ColoredBox  cart={cart} activeColoredBox ={item.attributesValue["Color"] === element.displayValue? true:false} 
                        background={`${element.value}`}></ColoredBox>
                </ColoredBoxContainer >
               </li>
               :                               
              <li key={uuidv4()}>
              <AttributeBox  cart={cart} activeBox={item.attributesValue[attribute.name]===element.value? true:false}> {element.value}</AttributeBox>
              </li>
        )}
         </AttributesContainer>
        )
    }
}
export default CartAttributes;