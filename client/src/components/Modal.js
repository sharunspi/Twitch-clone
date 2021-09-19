import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'

const ModalDisplay = props => {
    return <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>{ props.modalTitle }</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>{props.modalDescription}</p>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary">{props.secondaryButtonText}</Button>
      <Button variant={props.primaryButtonColorType}>{props.primaryButtonText}</Button>
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
