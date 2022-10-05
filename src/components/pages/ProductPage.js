import React from "react";
import {getProductById} from "../../gql/reguest";
import {withRouter} from "../../withRoute.js";
import ReactLoading from 'react-loading';
import ProductDetails from "../ProductDetails";
import { v4 as uuidv4 } from 'uuid';
import {ImagesContianer,ProductSmallImageConatiner,ProductSmallImage,SelectedImgContainer,Wrapper, OutOfStock} from "./styles/ProductPageStyle.js"


class Product extends React.Component{
    state={
        ready:false,
        product:{},
        selectedImg:'',
        
    }
    async componentDidMount(){
        const productID=this.props.params.params.productID;
        const product = await getProductById(productID).then(response=>{
              return response.data.product

        })
       
    this.setState({product,ready:true});        
  }
  SelectedImg(event){
   const selectedImg = event.target.src;
   this.setState({selectedImg})
  }
  
    render(){
        const{product,ready,selectedImg}=this.state;   
        return(
            ready ?
              <Wrapper>
                <ImagesContianer>
                        {product.gallery.slice(0,3).map((img)=>
                            <ProductSmallImageConatiner key={uuidv4()}>
                                  <ProductSmallImage src={`${img}`}  onClick={(event)=>this.SelectedImg(event)} />
                            </ProductSmallImageConatiner>
                        )}
                </ImagesContianer>
                <SelectedImgContainer background={selectedImg===''?`url(${product.gallery[0]})`:`url(${selectedImg})`}>       
                {!product.inStock && <OutOfStock><p>OUT OF STOCk</p></OutOfStock>}
                </SelectedImgContainer>
                 <ProductDetails product={product}/>    
               </Wrapper>
               
         :
          
        <ReactLoading type={"bars"} color="#000000" width={100} height={100}/>
        )
    }
  }

export default withRouter(Product);