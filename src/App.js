import React, {Component} from 'react';
import AllComents from "./components/allcoments/AllComents";
import AllUsers from "./components/allusers/AllUsers";

class App extends Component {
    render() {
        return (
            <div>
                <AllComents/>
                <AllUsers/>
            </div>
        );
    }
}

export default App;
