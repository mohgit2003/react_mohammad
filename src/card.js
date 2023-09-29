import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';



function Card1(data) {
  const [show, setShow] = useState(false);

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
        More Detales
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
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
        <Button variant="primary">Bay</Button>
        </Card.Body>
        </Card>
    </div>
    </>
  )
}
export default Card1;