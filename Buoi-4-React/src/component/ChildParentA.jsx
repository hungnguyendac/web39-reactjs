/* eslint-disable react/prop-types */

const ChildParentA = ({ data, email, age }) => {
    // console.log(age);
    return (
        <>
            <h1>Hello 500 anh em {data}</h1>
            <p>Email: {email}</p>
            <p>Tuổi: {age}</p>
        </>
    );
};

export default ChildParentA;
