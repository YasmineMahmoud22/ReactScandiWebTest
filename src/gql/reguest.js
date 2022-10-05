import { client } from "../index.js"
import {gql} from "@apollo/client";

export  function getCurrencies() {
    return client.query({
     query:gql(`
       query{
         currencies{
             symbol,
             label
         }
       }
     
     `)
    })  
 } 

 

export function getCategoriesName(){
    return  client.query({
        query:gql(`
        query{
            categories {
                name
              }
        }
        
        `)
    })
}

export function getAllProducts(){
  return client.query({
    query:gql(`
     query{
      category {
        name
        products {
          id
          attributes {
            name,
            items{
              displayValue,
              id,
              value
            }
          }
          name
          inStock
          gallery
          prices {
            currency{
              label,
              symbol
            }
            amount
          }
        }
    }
      }
    
    `)
  })
}

export function categoryRequest(categoryName){
  return client.query({
    query:gql(`
      query{
        category(input:{title:"${categoryName}"}) {
          name,
          products {
            id,
            attributes {
              name,
              items{
                displayValue,
                id,
                value
              },
              id,
              type,
            },
            name,
            inStock,
            gallery,
            prices {
              currency{
                label,
                symbol
              }
              amount
            }
          }
        }
      }
    `)
  })
}

export function getProductById(id){
  return client.query({
    query:gql(`
    query{
      product(id: "${id}"){
        id,
        name,
        inStock,
        gallery,
        description,
        category,
        attributes{
          id,
          name,
          type,
          items{
            displayValue,
            value,
            id
          }, 
        },
        prices{
          currency{
            label,
            symbol
          }
          amount
        },
        brand
      }
    }
`)
  })
}