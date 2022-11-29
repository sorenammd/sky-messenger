import React from 'react'
import ReactLoading from "react-loading";
export default function Loader({ type, width, height, color }) {
    return (
        <div className="loading-wrapper">
            <ReactLoading type={type} color={color} height={height} width={width} />
        </div>
    )
}
Loader.defaultProps = {
    type: 'spin',
    color: 'blue',
    width: '100px',
    height: '100px'
};
