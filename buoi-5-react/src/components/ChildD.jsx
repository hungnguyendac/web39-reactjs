const ChildD = ({ star }) => {
    const rating = {
        3: "Tuyệt vời",
        2: "Bình thường",
        1: "Rất tệ",
    };
    console.log(rating[3]);
    return (
        <>
            <div>{rating[star]}</div>;
        </>
    );
    
    
};

export default ChildD;
