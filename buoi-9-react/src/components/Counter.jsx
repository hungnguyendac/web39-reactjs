import { useDispatch, useSelector } from "react-redux";
import { downCount, upCount } from "../actions/counterAction";

const Counter = () => {
    const result = useSelector((state) => state);
    console.log(result);

    // Cập nhật data từ UI lên store
    const dispath = useDispatch();
    
    const handleIncrement = () => {
        dispath(upCount());
    };

    const handleDecrement = () => {
        dispath(downCount());
    };
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "200px" }}>
                <button onClick={handleIncrement}>++</button>
                <h1>{result.count}</h1>
                <button onClick={handleDecrement}>--</button>
            </div>
        </>
    );
};

export default Counter;


// B1: Tạo Store -> reducer
// B2: Phân phát Store -> Child Component
// B3: Component child -> Gọi data Store

// B4: Tạo action -> Gửi đi thong dispatch
// B5: Cập nhật reducer với action gửi đi B4