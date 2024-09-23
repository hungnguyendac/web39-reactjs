
const Child = ({ handleIncrement }) => {
    // const [count, setCount] = useState(0);

    // const handleIncrement = () => {
    //     setCount(count + 1);
    // };
    return (
        <>
            {/* <h2>{count}</h2> */}
            <button onClick={handleIncrement}>Click me</button>
        </>
    );
};

export default Child;
