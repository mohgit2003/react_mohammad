import { useEffect, useState } from "react";
import Card1 from "./card";


function Favorit (){
    let [isAuthenticated,user]=useState()
    let Favorites = localStorage.getItem("favorites");
    let favorites = JSON.parse(Favorites);
    let [favoritesState, setFavoritesState] = useState([])

    function handleDelete (index) {

        favorites.splice(index, 1)
        let favoritesCopy = [...favorites]
        setFavoritesState(favoritesCopy)
        let Data = JSON.stringify(favoritesCopy)
        localStorage.setItem("favorites", Data)
      }
    function favoritData(){
        if(isAuthenticated){
         let filterfavorit=favorites.fiter(function(item){return user.email === item.email})
         setFavoritesState(filterfavorit)
        }
       
    }
    useEffect(function(){favoritData()},[])
    return(
        <>
        <div className="map">
    {isAuthenticated && favoritesState.length !==0 ? favoritesState.map(function(item, index){
            return(
              <>
                <Card1 image={item.image} title={item.title} showFavorites={false}  index = {index} 
                handleDelete={()=>{handleDelete(index)}} key={index} email={user.email} showDelete={true}/>
                </>
            )
        }
    ) : <h3>No favorites Food Recipes</h3>}
    </div>
        </>
    )
}

export default Favorit