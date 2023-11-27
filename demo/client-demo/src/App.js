import logo from "./logo.svg";
import React, {useState,useEffect} from "react";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/event',{
            method:'GET',
            headers:{'Content-Type': 'application/json'}
        })
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                setPosts(data);
                // console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <ul>
            {posts.map(p=>{
                return(
                    <li key={p.id}>{p.name}</li>
                )
            })}
        </ul>
      </header>

    </div>
  );
}

export default App;
