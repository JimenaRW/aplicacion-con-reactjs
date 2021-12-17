import React, { Component } from "react";
import TableRow from "./TableRow";
class TableInDb extends Component {

    constructor() {
        super()
        this.state = {
            moviesList: []
        }

    }

    render() {
        return (
            <div>
                <table className="shadow">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Calificación</th>
                            <th>Premios</th>
                            <th>Duración</th>
                            <th>Género</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.moviesList.map((item, i) => {
                            return (
                                <TableRow
                                    key={item.title + i}
                                    id={item.id}
                                    title={item.title}
                                    rating={item.rating}
                                    awards={item.awards}
                                    length={item.length}
                                    genre={item.genre}
                                />
                            )
                        })}
                    </tbody>

                </table>
            </div>
        );
    }
    
    async componentDidMount() {
        try {
            await this.apiCall('/api/movies', this.getMovies)
        } catch (err) {
            console.log(err)
        }
    }

    async apiCall(url, handler) {
        try {
            let response = await fetch(url);
            let result = await response.json();

            handler(result)
        } catch (err) {
            console.log(err)
        }
    }

    getMovies = (info => {
        this.setState(
            {
                moviesList : info.data
            }
        )
    })

}

export default TableInDb;