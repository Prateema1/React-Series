import UserContext from '../utils/UserContext';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("Set Interval Called");
        }, 2000)
    }

    componentWillUnmount () {
     clearInterval(this.timer);
    }


    render () {
        return (
            <div>
        <h2>This is About Class Componet</h2>
        <div>
            LoggedIn User
            <UserContext.Consumer>
                {({loggedInUser}) => {
                    <h1 className='text-xl font-bold'>{loggedInUser}</h1>
                }}
            </UserContext.Consumer>
        </div>
        <UserClass name={"Pratima Class 1"} location={"Gurugram"} />
    </div>
        )
    }
}

export default About;