import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { useAuth0 } from '@auth0/auth0-react';



function Card1(data) {
  let [show, setShow] = useState(false);
  let {user, isAuthenticated} = useAuth0()
  

  function handleShow(){
    setShow(!show)
  }
  function LocalStorage (){

    if(localStorage.getItem("favorites")){

    let stringData = localStorage.getItem("favorites")
    let array = JSON.parse(stringData);
    array.push({...data, email:user.email}) 
    
    let stringedData = JSON.stringify(array)

    localStorage.setItem("favorites", stringedData)
  }
    else {

      let array = [];
      array.push({...data, email:user.email})
      let stringedData = JSON.stringify(array)
  
      localStorage.setItem("favorites", stringedData)

    }
  }
  return (
    <>
    <div style={{display:"flex",marginTop:"3%",justifyContent:"space-between", flexWrap:"warp"}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.image}/>
        <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
        <Button variant="primary" onClick={handleShow}>
        The Recipes
      </Button>
          {data.showFavorites? <Button onClick={LocalStorage}>Add to Favorites</Button>
          : <Button onClick={LocalStorage} style={{display:"none"}}>Add to Favorites</Button>}
          {data.showDelete?<Button onClick={data.handleDelete}>Delete</Button>
          :<Button onClick={data.handleDelete} style={{display:"none"}}>Delete</Button>}
      <Modal show={show} onHide={handleShow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title} <a> (Category ({data.Category}))</a></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data.descripion}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
        </Card.Text>
        </Card.Body>
        </Card>
    </div>
    </>
  )
}
export default Card1;