import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <Counter/>
            </Provider>
        </>
    );
};

export default App;


// useState();
// 1. Xac dinh trang thai ban dau: initState = 0;
// 2. Action: Up(count + 1), Down(count - 1);

// useReducer();
// 1. Xac dinh trang thai ban dau: initState = 0;
// 2. Action: Up(count + 1), Down(count - 1);
// 3. reducer -> function
// 4. dispath -> Kich hoat reducer


// REDUX tương tự useReducer + useContext()