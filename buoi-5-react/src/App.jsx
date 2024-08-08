import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";
import ChildC from "./components/ChildC";
import ChildD from "./components/ChildD";

const App = () => {
    const array = [
        {
            id: 1,
            name: "Buoi 1",
        },
        {
            id: 2,
            name: "Buoi 2",
        },
    ];

    const star = 3;

    return (
        <>
            {/* Render theo đk if else 1 component */}
            <ChildA array={array} />

            {/* Render theo toán tử 3 ngôi */}
            <ChildB array={array} />

            {/* Render theo toán tử && */}
            <ChildC array={array} />

            {/* Render với Enum */}
            <ChildD star={star}/>
        </>
    );
};

export default App;
