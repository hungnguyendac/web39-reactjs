import React from 'react'

const users = [
    {
        id: 1,
        name: "user 1",
    },
    {
        id: 2,
        name: "user 2",
    },
    {
        id: 3,
        name: "user 3",
    },
    {
        id: 4,
        name: "user 4",
    },
];

class LifeCycleClass2 extends React.PureComponent {

    constructor(props) {
        console.log(">>> Run constructor");
        super(props);

        // Khai bao state
        this.state = {
            users: [],
        };

        // Biến trạng thái
        this.isComponentMounted = false;
    }

    async componentDidMount() {
        setTimeout(() => {
            this.isComponentMounted = true;
            console.log(">>> Run DidMount");
            this.setState({
                users: users,
            });
        }, 3000);
    }

    render() {
        console.log(">>> Run Render");
        return (
            <div>
                <h1>Component Licycle</h1>
                <div>
                    {this.isComponentMounted
                        ? users.map(({ id, name }) => <p key={id}>{name}</p>)
                        : "Đang cập nhật"}
                </div>
            </div>
        );
    }
}

export default LifeCycleClass2