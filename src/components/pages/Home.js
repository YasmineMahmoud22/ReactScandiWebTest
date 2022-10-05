import React from "react";
import {getAllProducts} from"../../gql/reguest"
import ReactLoading from 'react-loading';
import CategoryCards from "../CategoryCards";

class Home extends React.Component{
    state ={
        categoryProducts:{},
        ready:false,
    }
    async componentDidMount(){
        const categoryProducts = await getAllProducts().then(response=>{
            return [{name:response.data.category.name,products:response.data.category.products}]
        })
        this.setState({categoryProducts:categoryProducts,ready:true})
    }
    render(){
        const{categoryProducts,ready}=this.state;
        return(
            ready?
            <CategoryCards categoryProducts={categoryProducts[0]}/>
             :
            <ReactLoading type={"bars"} color="#000000" width={250} height={250}/>
           



        )
    }
}
export default Home;