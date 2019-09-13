import React from 'react';
import './style.css'
class SetColor extends React.Component {
    render() {

        return (
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-header">
                        Color Picker
                    </div>
                    <div className="card-body btnn-gr">
                        <button type="button" className=" btnn btnn-red" onClick={this.props.changeRed}></button>
                        <button type="button" className=" btnn btnn-green" onClick={this.props.changeGreen}></button>
                        <button type="button" className=" btnn btnn-blue" onClick={this.props.changeBlue}></button>
                        <button type="button" className=" btnn btnn-yellow" onClick={this.props.changeYellow}></button>
                    </div>
                </div>

            </div>
        );
    }
}
export default SetColor;