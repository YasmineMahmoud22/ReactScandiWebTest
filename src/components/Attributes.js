import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {Attributes,
        AttributeTitle,
        AttributesContainer,
        AttributeBox,
        ColoredBox,ColoredBoxContainer   
         } from './styles/AttributesStyle';

class Attriibutes extends React.Component{
   
    render(){
        const {attribute,attributes,attributeValue}=this.props;
        return(
            <Attributes>
                <AttributeTitle>{attribute.name.toUpperCase()}:</AttributeTitle>
                <AttributesContainer>
                    {attribute.items.map((item)=>
                      attribute.name ==="Color"? 
                      <li key={uuidv4()} >
                        <ColoredBoxContainer activeColoredBox ={attributes.Color===item.displayValue? true:false}>
                            <ColoredBox activeColoredBox ={attributes.Color===item.displayValue? true:false} 
                            background={`${item.value}`} value={item.displayValue} 
                            onClick={(event)=>attributeValue(event,attribute.name)} ></ColoredBox>
                        </ColoredBoxContainer>
                      </li>:                               
                      <li key={uuidv4()}>
                      <AttributeBox  activeBox={attributes[attribute.name]===item.value? true:false} value={item.value} 
                        onClick={(event)=>attributeValue(event,attribute.name)} > {item.value}</AttributeBox>
                      </li>
                    )}
                </AttributesContainer>
             </Attributes>
        )
    }
}
export default Attriibutes;