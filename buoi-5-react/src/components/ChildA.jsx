const ChildA = ({ array }) => {
    // Check array có tồn tại giá trị hay không ?
    if (array.length < 0) return <p>Không tồn tại giá trị!!!</p>;

    return (
        <>
            {array.map((item, index) => {
                return <h1 key={index}>{item.name}</h1>;
            })}
        </>
    );
};

export default ChildA;
