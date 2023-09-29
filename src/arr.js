import Main from './Main.json'
import Card1 from './card'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './arr.css';



function Arr(){
    let [item,setItem]=useState(Main);
    function Submit (search){
        search.preventDefault()
        let sh=search.target.h.value;
        let filt=Main.filter(function(Item){return Item.title.toLowerCase().includes(sh.toLowerCase())})
        setItem(filt);
    }
    return(
        <>
        <Form className="d-flex" onSubmit={Submit} id="Search">
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
            {item.map(function(Item){
                return(
                  <><Card1 image={Item.image_url} title={Item.title} descripion={Item.description} />
                  </>
                )
            }
            )
            }
        </div>
        </>
    )
}

export default Arr;