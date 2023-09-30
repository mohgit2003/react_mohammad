import Main from './Main.json'
import Card1 from './card'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './arr.css';



function Arr(){
    let [item,setItem]=useState(Main);
    const Submit=(event)=>{
        const sh=event.target.value
        const newFilter=Main.filter((value)=>{
            return value.title.toLowerCase().includes(sh.toLowerCase())
        })
        setItem(newFilter);
    }
    return(
        <>
        <Form className="d-flex" onChange={Submit} id="Search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="h"
            />
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