import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const ModalDisplay = props => {
    return <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>{ props.modalTitle }</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>{props.modalDescription}</p>
    </Modal.Body>
  
    <Modal.Footer>
      <Link to="/">
      <Button variant="secondary">{props.secondaryButtonText}</Button>
      </Link>
      <Button onClick={() => props.onSubmit() } variant={props.primaryButtonColorType}>{props.primaryButtonText}</Button>
    </Modal.Footer>
  </Modal.Dialog>
}

const ModalWindow = props => {
    return ReactDOM.createPortal (
        <ModalDisplay { ...props } />,
        document.getElementById('modal')
    )
}

export default ModalWindow
