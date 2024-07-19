// TH1: Với cách thông thường sử dụng js
// let elRoot = document.querySelector("#root");
// let elH1 = document.createElement("h1");
// elH1.innerHTML = "Hello React"

// elRoot.appendChild(elH1);


// TH2: Sử dụng React (Chưa sử dụng JSX)
const el = React.createElement
("h1", { className: "tittle"}, "Hello React");

console.log(el);

// Hiển thị ra giao diện với React
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(el);