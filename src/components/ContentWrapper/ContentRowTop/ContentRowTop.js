import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import GenreInDB from './GenreInDb/GenreInDB';
import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from './LastMovieInDb';

import TableInDb from '../TableInDb/TableInDb';
import SearchMovies from '../../SearchMovies';
import NotFound from '../../NotFound';

class ContentRowTop extends Component {
    constructor() {
        super();
        this.state = {
            algo: [
                {
                    title: 'Movies in Data Base',
                    color: 'primary',
                    amount: '',
                    icon: 'fa-film'
                },
                {
                    title: 'Total awards',
                    color: 'success',
                    amount: '',
                    icon: 'fa-award'
                },
                {
                    title: 'Actors quantity',
                    color: 'warning',
                    amount: '',
                    icon: 'fa-user'
                }
            ]
        }
    }

    render() {
        return (
            <>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
                <div className="row">

                    {
                        this.state.algo.map((item, i) => {
                            return <ContentRowMovies
                                key={item.title + i}
                                title={item.title}
                                color={item.color}
                                amount={item.amount}
                                icon={item.icon}
                            />
                        })
                    }
                </div>

            </div>
                    <Routes>
                            <Route path="/" elements={''}/>
                            <Route path="/lastmovie" element={<LastMovieInDb />}/>
                            <Route path="/genres" element={<GenreInDB />}/>
                            <Route path="/movies" element={<TableInDb />}/>
                            <Route path="/search" element={<SearchMovies />}/>
                            <Route path="/*" element={<NotFound />}/>

                    </Routes>
            </>                    
            
        );
    }

    async componentDidMount() {
        try {
            await this.apiCall('/api/movies/total', this.getTotal, 0)
            await this.apiCall('/api/genres/total', this.getTotal, 1)
            await this.apiCall('/api/actors/total', this.getTotal, 2)

        } catch (err) {
            console.log(err)
        }
    }

    async apiCall(url, handler, i) {
        try {
            let response = await fetch(url);
            let result = await response.json();

            handler(result, i)
        } catch (err) {
            console.log(err)
        }
    }

    getTotal = (info, i) => {

        this.setState(
            [
                this.state.algo[i].amount = info.data,
            ]
        )

    }

}

export default ContentRowTop;