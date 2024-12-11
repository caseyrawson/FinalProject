import React from 'react';
import { Link, Outlet } from "react-router-dom";



class Home extends React.Component {

    render() {
        return(
            <>
                <h1>This is the HOME stubb</h1>
                <Link to="/Quiz">Quiz</Link> {  }
                <Link to="/Score">Score</Link> {  }
                <Link to="/Contact">Contact us</Link> { }
                <Link to="/TabExample">Tab example</Link>
                <Outlet />
            </>
        );
    }
}

export default Home;