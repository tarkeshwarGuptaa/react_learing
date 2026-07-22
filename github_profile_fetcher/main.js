import React from 'react';
import ReactDOM from "react-dom/client"
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Body from "./components/Body.jsx"

function GithubProfile(){
    //header
    //body
    //footer
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}






const root = document.getElementById("root");
const Root = ReactDOM.createRoot(root);
Root.render(<GithubProfile/>);