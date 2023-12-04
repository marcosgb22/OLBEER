import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from '../Cart/Cart'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Llamada a handleShow cuando el componente se monta
    handleShow();
  }, []);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reserva</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Cart/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;