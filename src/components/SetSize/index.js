import React from 'react';
import './style.css'
class SetSize extends React.Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-header">
                        Size: {this.props.size}px
                    </div>
                    <div className="card-body btnn-gr">
                        <button type="button" className=" btnn-s " onClick={this.props.upSize}>Up</button>
                        <button type="button" className=" btnn-s " onClick={this.props.downSize}>Down</button>

                    </div>
                </div>
                <div className="btnn-rs">
                    <button type="button" className="btnn-reset" onClick={this.props.reset}>Reset</button>
                </div>
            </div>
        );
    }
}
export default SetSize;