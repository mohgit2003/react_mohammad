import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import Card1 from './card';
function Menu(){
    let [item,setItem]=useState([]);
    async function Meal(){ 
        let api=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        let data=await api.json(); 
        setItem(data.meals)
    }
    async function HanChange(event){
        let changeitem=event.target.value
        let api=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        let data=await api.json();
        if(changeitem === "All"){
            setItem(data.meals)
        }else{
        let filteitme=data.meals.filter(function(Item){return Item.strCategory == changeitem})
        setItem(filteitme);
    }}
    useEffect(()=>{Meal()},[])
    
return(
    <>
    <Form.Select aria-label="Default select example" onChange={HanChange} id='select'>
      <option value="All">All</option>
      <option value="Vegetarian">Vegetarian</option>
      <option value="Seafood">Seafood</option>
      <option value="Beef">Beef</option>
      <opiton value="side">side</opiton>
      <opiton value="Miscellaneous">Miscellaneous</opiton>
      <opiton value="Pasta">Pasta</opiton>
      <opiton value="Pork">Pork</opiton>
      <opiton value="Dessert">Dessert</opiton>
      <opiton value="Chicken">Chicken</opiton>
      <opiton value="Lamb">Lamb</opiton>
    </Form.Select>
    <div id="map">
            {item[0]!=null?item.map(function(Item){
                return(
                  <>
                  <Card1 image={Item.strMealThumb} title={Item.strMeal} descripion={Item.strInstructions} Category={Item.strCategory}/>
                  </>
                )
            }
            ):<h3 style={{marginLeft:"40%",marginTop:"10%"}}>no Searche resolt</h3>
            }
        </div>
    </>
)
}
export default Menu;