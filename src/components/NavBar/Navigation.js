import React from "react";
import {NavLink} from"react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import {connect} from "react-redux";
import {setCategory} from "../../actions/category";
import {NavList} from "./styles/NavigationStyle";
class Navigation extends React.Component{
    
    setCategory=(categoryName)=>{
        this.props.setCategory(categoryName);
    }
    render(){
        const {categories}=this.props;
        return(
            <NavList>
                {categories.map((category)=>
                <NavLink to={`/${category.name}`} key={uuidv4()} onClick={()=>{this.setCategory(category.name)}}>
                    <li >{category.name.toUpperCase()}</li>
                </NavLink>)}
            </NavList>
        )
    }
}

const mapDispatchToProps =(dispatch)=>({
  setCategory :(category)=> dispatch(setCategory(category))
})
export default connect(null,mapDispatchToProps)(Navigation);