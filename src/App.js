import React from 'react';
import './App.css';
// import { useNavigate } from "react-router-dom";

function App() {

    // const navigate = useNavigate();
    return (
        <div className="App flex flex-col m-auto ">
            <header className="header-section w-screen h-screen">

                <div className="flex flex-col gap-4 w-[28rem] p-2 ml-[7rem] mt-[15rem]">
                    <h1 className="text-5xl text-[#fff] font-extrabold">Your Guide To Game of Thrones</h1>
                    <a className="text-3xl bg-[#fbbf24] max-w-fit px-3 py-2" href="#main-section">Explore</a>
                </div>

            </header>

            <main className="main-section w-screen h-screen bg-blue-200" id="main-section">
                <h2 className="">Main section</h2>
            </main>

        </div>
    );
}

export default App;
