import React from 'react';
import './style.css'
class Result extends React.Component {
    render() {
        let { color, size, changeSize } = this.props;
        let style = {
            color: `${color.toLowerCase()}`,
            fontSize: `${size}px`
        };
        return (
            <div className="row result" >
                <p className="text-cont" style={style}>Text Result - Change Size: {changeSize}</p>
            </div>
        )
    }
}
export default Result;