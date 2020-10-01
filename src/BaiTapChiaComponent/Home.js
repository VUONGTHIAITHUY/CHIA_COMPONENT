import React, { Component } from 'react'
import Header from './Header'
import Intro from './Intro'
import MovieList from './MovieList'
import Promotion from './Promotion'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Intro/>
                <MovieList/>
                <Promotion/>
                <Footer/>
            </div>
        )
    }
}

