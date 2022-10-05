import React from "react";
import { ImageSliderContainer, ArrowContainer,Arrow, CartImage } from "./styles/ImgSliderStyle";
class ImgSlider extends React.Component{
    state={
        values:{},
    }
    NextImg=(e,length)=>{
        let current=0;
        if (this.state.values.hasOwnProperty(e.target.value)){
             current= (this.state.values[e.target.value] >= length-1)? 0 : this.state.values[e.target.value]+1;
        }else( 
            current=1
        )
        this.setState(prevState=>({
            values:{
                ...prevState.values,
             [e.target.value]:current
            }
        }))
    }

    PrevImg=(e,length)=>{
        let current=0;
        if (this.state.values.hasOwnProperty(e.target.value)){
             current= (this.state.values[e.target.value] === 0)? length-1 : this.state.values[e.target.value]-1;
        }else( 
            current=1
        )
        
        
        this.setState(prevState=>({
            values:{
                ...prevState.values,
             [e.target.value]:current
            }
        }))
    }
    render(){
            const {item}=this.props;
            const numOfImges = item.product.gallery.length;
            const imgId =item.product.id
            const imgs =item.product.gallery;
            const {values}=this.state;
     return(
          <ImageSliderContainer>
             {numOfImges===1 ? null:
             <div>
               <ArrowContainer>
                    <Arrow value={imgId}
                     onClick={(event)=>{this.NextImg(event,numOfImges,imgId)}}>
                    </Arrow>
                </ArrowContainer>
                <ArrowContainer backArrow>
                    <Arrow backArrow value={imgId}
                     onClick={(event)=>{this.PrevImg(event,numOfImges)}}>
                    </Arrow>
                </ArrowContainer>
             </div>
             }
            {
            values[imgId]===undefined ?
                <CartImage alt={"img"} src={imgs[0]}/>
                :
                item.product.gallery.map((img,index)=>
                    {        
                if(index===values[imgId]){
                        return (<CartImage alt={"img"} src={img}/>)
                    }else if(index===this.state.values[imgId]){
                        return (<CartImage alt={"img"} src={img}/>)                                    
                    } else{   
                    return null             
                    }
                }
            )
            }
            
            
          </ImageSliderContainer>
        )
    }
}
export default ImgSlider;