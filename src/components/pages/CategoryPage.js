import React from "react";
import ProductsCategory from "../ProductsCategory";
import {connect} from "react-redux";


class Category extends React.Component{

    render(){
        return(
         <ProductsCategory category={this.props.category}/>
    )}
}
const mapStatetoProps=(state)=>({
    category:state.products.category,
})

export default  connect(mapStatetoProps)(Category);