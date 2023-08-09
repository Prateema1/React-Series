import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

       this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url: ""
        }
       }
       console.log("Constructor Called");
    }

async componentDidMount() {

    // API Call

    // console.log("COmponent DId Mount Called");

    // const data = await fetch("https://api.github.com/users/Prateema1");

    // const json = await data.json();

    // console.log(json);

    // this.setState({
    //     userInfo: json
    // })

    }

    componentDidUpdate() {
        console.log("COmponent DId Update Called");
    }
 
    render () {
        console.log("Render Called");
        const {name, location, avatar_url} = this.state.userInfo;


        return (
            <div className="user-card">
                <img src={avatar_url} />
               <h2>Name : {name}</h2>
               <h2>Location: {location}</h2>
            </div>
        )
    }
}

export default UserClass;