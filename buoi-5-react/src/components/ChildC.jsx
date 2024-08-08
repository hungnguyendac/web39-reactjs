import React from "react";

const ChildC = ({ array }) => {
    const lengthArr = array.length;

    return (
        <>
            {lengthArr && array.map( (value, index) => {
                return <h1 key={index}>{value.name}</h1>
            })}
            {!lengthArr && "Không có dữ liệu"}
        </>
    );
};

export default ChildC;
