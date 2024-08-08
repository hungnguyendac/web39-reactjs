import React from "react";

class LifeCycleClass extends React.Component {

    constructor(props) {
        // Phương thức có sẵn trước khi tạo state
        super(props);

        // Tạo ra 1 state (Trạng thái)
        this.state = {color: "red"};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({color: "blue"});
        }, 5000)
    }
    
    render() {
        // Cách console.log state để debug
        console.log(this.state.color);
        return <h1 style={{color: this.state.color}}>Hello 500 ae</h1>
    }
}

export default LifeCycleClass

/*
    B1: constructor -> Đọc xong để đấy
    B2: render() -> Tạo ra giao diện lần đầu tiên
    B3: Chạy vào componentDidMount() check cấp gì nữa không ?
*/