import { useState } from "react";
import Card1 from "./card";


function Favorit (){

    let Favorites = localStorage.getItem("favorites");
    let favorites = JSON.parse(Favorites);
    let [favoritesState, setFavoritesState] = useState(favorites)

    function handleDelete (index) {

        favorites.splice(index, 1)
        let favoritesCopy = [...favorites]
        setFavoritesState(favoritesCopy)
        let Data = JSON.stringify(favoritesCopy)
        localStorage.setItem("favorites", Data)
      }


    return(
        <>
        <div className="map">
    {favoritesState.length !==0 ? favoritesState.map(function(item, index){
            return(
              <>
                <Card1 image={item.image} title={item.title} showFavorites={false}  index = {index} 
                handleDelete={()=>{handleDelete(index)}}/>
                </>
            )
        }
    ) : <h3>No favorites Food Recipes</h3>}
    </div>
        </>
    )
}

export default Favorit