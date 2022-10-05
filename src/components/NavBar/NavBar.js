import React from "react";
import {getCategoriesName, getCurrencies} from "../../gql/reguest"
import ReactLoading from 'react-loading';
import Navigation from "../NavBar/Navigation";
import Logo from "./Logo";
import ActionBtns from "./ActionsBtns";
import { Nav } from "./styles/NavBarStyle";

class NavBar extends React.Component{
    state={
        ready:false,
        categories:{},
        currencies:{}
      }
    
      async componentDidMount(){
        const categories= await getCategoriesName().then(
          response=>{
            return (
              response.data.categories
            )
          });
        const currencies = await getCurrencies().then(
            response=>{
                return(
                    response.data.currencies
                )
            }
        )
          this.setState({categories:categories,currencies:currencies,ready:true})
        }
   
   render(){
       const {ready,categories,currencies}=this.state;
        return(
        ready?
        <Nav>
        <Navigation categories={categories}/>
        <Logo/>
        <ActionBtns currencies={currencies}/>
         </Nav>:
           <ReactLoading type={"bars"} color="#000000" width={250} height={250}/>


    )
   }
}

export default NavBar;