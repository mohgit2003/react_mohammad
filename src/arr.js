
import Button from 'react-bootstrap/Button';
import Card1 from './card'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Stayle.css';
import { useEffect } from 'react';



function Arr(){
    let [item,setItem]=useState([]);
    async function Meal(){
        let api=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        let data=await api.json();
        setItem(data.meals)
    }
    useEffect( function(){Meal()},[])
   
        
    async function Handelsubmit(event){
        event.preventDefault()
        let sh=event.target.h.value;
        let api=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        let data=await api.json();
        let filterSh=data.meals.filter(function(Item){return Item.strMeal.toLowerCase().includes(sh.toLowerCase())})
        setItem(filterSh);
    }
    
    return(
        <>
        <Form className="d-flex" onSubmit={Handelsubmit} id="Search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="h"
            />
            <Button variant="outline-success" type='Submit'>Search</Button>
        </Form>
        <div id="map">
            {item[0]!=null?item.map(function(Item){
                return(
                  <><Card1 image={Item.strMealThumb} title={Item.strMeal} descripion={Item.strInstructions} Category={Item.strCategory} />
                  </>
                )
            }
            ):<h3 style={{marginLeft:"40%",marginTop:"10%"}}>no Searche resolt</h3>
            }
        </div>
        </>
    )
        }
export default Arr;