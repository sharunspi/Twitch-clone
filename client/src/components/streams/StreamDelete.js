import React, { useEffect} from 'react'
import { connect } from 'react-redux'

import Modal from '../Modal'
import { fetchStream, deleteStream } from '../../actions'

const StreamDelete = (props) => {

    useEffect(() => {
        console.log(props.title)
        props.fetchStream(props.match.params.id)
    },[])

    const showContent = () => {
        if(!props.stream) {
            return 'Are you sure you want to delete stream'
        }
        return `Are you sure you want to delete stream : ${props.stream.title}`
    }

    const onSubmit = () =>{
        props.deleteStream(props.match.params.id)
    }

    return (
            <Modal 
            modalTitle='Delete stream'
            modalDescription={showContent()}
            primaryButtonText='Delete'
            secondaryButtonText='Cancel'
            primaryButtonColorType='danger'
            onSubmit={onSubmit}
            />
    )
}

const mapStateToProps = (state, ownProps) =>{
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream,
    deleteStream
})(StreamDelete)
