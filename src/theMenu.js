import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import Card1 from './card';
function Menu(){
    let [item,setItem]=useState([]);
    let [category,setcategory]=useState([]);
    async function Meal(){ 
        let api=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        let data=await api.json(); 
        setItem(data.meals)
    }
    async function catr(){ 
        let api=await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        let data=await api.json(); 
        setcategory(data.meals)
    }
    async function HanChange(event){
        let changeitem=event.target.value
        let api=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+changeitem)
        let data=await api.json();
       
        setItem(data.meals);
    }
    useEffect(()=>{Meal() 
        catr()},[])
    
return(
    <>
    <Form.Select aria-label="Default select example" onChange={HanChange} id='select'>
      <option value="All">All</option>
      {category.map(function(category){
        return <option value={category.strCategory}>{category.strCategory}</option>
      })}
    </Form.Select>
    <div className='map'>
            {item && item.length !=0?item.map(function(Item){
                return(
                  <>
                  <Card1 image={Item.strMealThumb} title={Item.strMeal} descripion={Item.strInstructions} Category={Item.strCategory} showFavorites={true}/>
                  </>
                )
            }
            ):<h3 style={{marginLeft:"40%",marginTop:"10%"}}>no resolt</h3>
            }
        </div>
    </>
)
}
export default Menu;