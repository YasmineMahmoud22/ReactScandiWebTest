import React from "react";
import { categoryRequest } from "../gql/reguest";
import ReactLoading from 'react-loading';
import CategoryCards from "./CategoryCards";


class ProductsCategory extends React.Component{
    state ={
        category:[],
        ready:false,
        categoryName:""
    }
     async componentDidMount(){
            const category = await categoryRequest(this.props.category).then(response=>{
                return(
                    response.data.category
                )
            }
                )
            this.setState({category, ready:true,categoryName:this.props.category});
    }

    async componentDidUpdate(){
        if(this.state.categoryName!==this.props.category){
            const category = await categoryRequest(this.props.category).then(response=>{
                return(
                    response.data.category
                )
            }
                )
            this.setState({category,categoryName:this.props.category});
        }
    }
    render(){
        const {category,ready}=this.state;
        return(
            ready?
             <CategoryCards categoryProducts={category}/>
            : 
         <ReactLoading type={"bars"} color="#000000" width={250} height={250}/>

        )
    }
}

export default ProductsCategory;