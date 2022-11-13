import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                <Routes>
                    <Route exact path='/' element={<MainPage/>}/>
                    <Route exact path='/search' element={<SearchPage/>}/>
                </Routes>
            </div>
        )
    }
}

export default BooksApp
