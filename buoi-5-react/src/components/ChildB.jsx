const ChildB = ({array}) => {

    console.log("Props childB123: ", array);

    const lengthArr = array.length;

    console.log(lengthArr);

    return (
        <>
            {lengthArr > 0 ? (
                array.map((item, index) => {
                    return <h1 key={index}>{item.name}</h1>
                })
            ) : "Không có dữ liệu"}
        </>
    );
};

export default ChildB;
