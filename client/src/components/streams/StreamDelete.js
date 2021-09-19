import React from 'react'

import Modal from '../Modal'

const StreamDelete = () => {
    return (
        <div>
            <Modal 
            modalTitle='Delete stream'
            modalDescription='Are you sure you want to delete this stream'
            primaryButtonText='Delete'
            secondaryButtonText='Cancel'
            primaryButtonColorType='danger'
            />
        </div>
    )
}

export default StreamDelete
