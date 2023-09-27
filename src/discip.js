import Accordion from 'react-bootstrap/Accordion';
import t from './Main.json'
function MoreDetales() {
  return (
    <>
   {t.map (function(Item)
   {
    return(
        <Accordion>
        <Accordion.Item>
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
          {Item.title}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )})}
    </>
  );
}

export default MoreDetales;