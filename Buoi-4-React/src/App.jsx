import ChildParentA from "./component/ChildParentA";
import ChildParentB from "./component/ChildParentB";
import ChildParentC from "./component/ChildParentC";
import ChildParentD from "./component/ChildParentD";
import ChildParentE from "./component/ChildParentE";
import ChildParentF from "./component/ChildParentF";

const App = () => {

    const name = "Web39kkk";
    const email = "Web3999@gmail.com";

    const content = {
        tittle: "Post 1",
        author: "Nguyen Van A",
        info: "abc"
    }

    return (
        <>
            {/* Destructuring Props*/}
            <ChildParentA data={name} email={email} age={20} />

            {/* Props */}
            <ChildParentB data={name} email={email} />

            {/* <ChildParentC content={content} /> */}
            <ChildParentC {...content} />

            <ChildParentD counter="2000"/>

            {/* Composition */}
            <ChildParentE>
                <h1>Hello 123</h1>
            </ChildParentE>

            <ChildParentF a={5}/>
        </>
    );
};

export default App;

/* 
data = {name}
- data: Tên props do mình tự đặt
- name: Giá trị căn nguyên vào component child
*/

/*
    -> Props bình thường, thành phần con nhận props
    của thành phần cha truyền vào.
    -> Children là 1 props trong React (Trường hợp đặc biệt)
    . Nhận vào bất kỳ cái gì nằm trong
    <Component>...</Component>
*/