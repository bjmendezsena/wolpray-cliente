
import React, { Component } from 'react';
export default class SubirImagen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }
    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        this.props.obj['coverUrl'] =  event.target.files[0]
    }

    render() {
        return (
            <div className="form-field col-lg-6">
                <div className="form-group">
                    <label className="label" >Imagen del club</label>
                    <input className="form-control" type="file" onChange={this.fileSelectedHandler} />
                </div>
            </div>
        );
    }
}

