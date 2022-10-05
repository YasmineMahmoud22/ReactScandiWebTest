import React from "react";
import Attriibutes from "./Attributes";
import Price from "./price";
import { connect } from "react-redux";
import { addProduct} from "../actions/cart";
import { v4 as uuidv4 } from 'uuid';
import { Interweave } from 'interweave';
import {ProductName,
        TotalPrice
        ,ProductDetailsContainer
        ,ProductDetailsColumn
        ,AddPoductButton
        ,ProductDescription} 
        from "./styles/ProductDetailsStyle";
import {incrementProduct} from "../actions/cart";

class ProductDetails extends React.Component{
    state={
        attributes:{},
    }
    addProduct = (e,ProductAttributes)=> {
        e.preventDefault();
        const {product,cart} = this.props;
        const {attributes}=this.state;
        const CheckAttributesValue = cart.some((item)=>
         ( item.product.name === product.name
          ?
          Object.entries(item.attributesValue).toString() === Object.entries(attributes).toString()
          :
          false)
        );
        const ProductExistInCart = cart.filter((item)=>
         ( item.product.name === product.name
          ?
          Object.entries(item.attributesValue).toString() === Object.entries(attributes).toString()
          :
          null)
        );

          if(Object.keys(attributes).length === ProductAttributes.length && !CheckAttributesValue){
          this.props.addProduct({
            product:product,
            attributesValue:this.state.attributes,
            value:1,
            key:uuidv4(),
        })
        }else if(CheckAttributesValue){
          this.props.increment(ProductExistInCart[0].key,1);
          }
        else{
          alert("MAKE Sure That You Enter All Attributes");
          }
    
        } 
    attributeValue=(e,attributeName)=>{
      const value = e.target.value;
  
      this.setState(prevState=>({
          attributes:{
              ...prevState.attributes,
          [attributeName]:value
          }
      }))
      
    }
  render(){
    const {product,currency}=this.props;
    const {attributes}=this.state;
    const ButtonText = product.inStock? "ADD TO CART":"OUT OF STOCK";

    return(
        <ProductDetailsColumn>
          <ProductDetailsContainer>
            <ProductName>{product.name}</ProductName>
            {product.attributes.map((attribute)=>
              (  
            <Attriibutes key={uuidv4()} attribute={attribute} attributes={attributes} attributeValue={this.attributeValue}/>
              )
            )}
            <TotalPrice>PRICE: </TotalPrice>
            <Price prices={product.prices} currency={currency}/>
            <AddPoductButton onClick={(event)=>this.addProduct(event,product.attributes)}
                disabled={product.inStock? false:true} >{ButtonText}</AddPoductButton>
            <ProductDescription>
              <Interweave content={`${product.description}`}/>
            </ProductDescription>
          </ProductDetailsContainer>
        </ProductDetailsColumn>
    )
  }

}
const mapStatetoProps=(state)=>({
    currency:state.products.currency,
    cart:state.products.cart,

})
const mapDispatchToProps =(dispatch)=>({
    addProduct: (product)=>dispatch(addProduct(product)),
    increment : (key,value)=> dispatch(incrementProduct({key,value}))
  })
export default connect(mapStatetoProps,mapDispatchToProps)(ProductDetails);