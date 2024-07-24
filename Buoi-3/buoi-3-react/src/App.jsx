import "./assets/styles.css";

const App = () => {
    let a = 1000;
    const urlImg = "./th.jpeg";
    const rate = 5;

    // Khai bao Fn xu ly thong bao
    const handleAlert = () => {
        alert("Hello world");
    };

    return (
        <>
            <h1 className={`tittle-${rate}`}>Hello {a} anh em</h1>
            <p className="description">Dragon Ball Super</p>
            <img src={urlImg} alt="a1" />

            {/* Event React */}
            <button onClick={handleAlert}>Alert</button>

            <button onClick={()=> alert("123")}>Hello 500 anh em</button>
        </>
    );
}

export default App;