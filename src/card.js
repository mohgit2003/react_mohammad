import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import main from './Main.json';

function Card1() {
  return (
    <>
    <div style={{display:"flex",marginTop:"3%",justifyContent:"space-between"}}>
    {main.map(function(Item){
        return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Item.image_url}/>
        <Card.Body>
        <Card.Title>{Item.title}</Card.Title>
        <Card.Text>
          {Item.description}
        </Card.Text>
        <Button variant="primary">Bay</Button>
        </Card.Body>
        </Card>
    )
    }
    )
    }
    </div>
    </>
  )
}
export default Card1;