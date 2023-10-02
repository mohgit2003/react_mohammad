import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';



function Card1(data) {
  const [show, setShow] = useState(false);

  async function api(){
    const url ='www.themealdb.com/api/json/v1/1/search.php?f='
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title} <a> (Category ({data.Category}))</a></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data.descripion}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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