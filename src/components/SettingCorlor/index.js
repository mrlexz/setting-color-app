import React, { useState } from 'react';
import SetColor from '../SetColor';
import SetSize from '../SetSize';
import Result from '../Result';
const SettingColor = () => {
    const [color, setColor] = useState("Black");
    const [size, setSize] = useState(12);
    const [kqdd, setKQ] = useState("");
    return (
        <div className="container">
            <div className="row">
                <SetColor
                    changeRed={() => setColor("Red")}
                    changeGreen={() => setColor("Green")}
                    changeBlue={() => setColor("Blue")}
                    changeYellow={() => setColor("Yellow")}
                />
                <SetSize size={size}
                    upSize={() => {
                        if (size <= 38) {
                            setSize(size + 2); setKQ("Up");
                        }
                    }}
                    downSize={() => {
                        if (size >= 12) {
                            setSize(size - 2);
                            setKQ("Down");
                        }
                    }}
                    reset={() => { setSize(12); setColor("Black") }}
                />
                <h3 className="resu">Color: {color}, Size: {size}px </h3>
            </div>
            <Result color={color} size={size} changeSize={kqdd} />
        </div>
    )
}

export default SettingColor;