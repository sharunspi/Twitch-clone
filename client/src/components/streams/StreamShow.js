import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js'

import { fetchStream } from '../../actions';

class StreamShow extends Component {
    constructor(props){
        super(props)
        this.videoRef = createRef()
    }
    componentDidMount(){
        const { id } = this.props.match.params
        this.props.fetchStream(id)
        this.buildPlayer()
    }
    componentDidUpdate(){
        this.buildPlayer()
    }
    componentWillUnmount(){
        this.player.destroy()
    }
    buildPlayer(){
        if(this.player || !this.props.stream) {
            return
        }
        const { id } = this.props.match.params
        const options = {
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        }
        this.player = flv.createPlayer(options)
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    }

    render() {
        if(!this.props.stream){
            return <div>
                Loading ..
            </div>
        }
        return <div>
            <video ref={this.videoRef} className="w-100" controls/>
            <h1>{this.props.stream.title}</h1>
            <h4>{this.props.stream.description}</h4>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream
})(StreamShow)
