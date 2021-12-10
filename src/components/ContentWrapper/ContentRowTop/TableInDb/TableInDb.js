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
            let response = await fetch('/api/movies');
            let result = await response.json();
            
            //console.log(result)
            this.setState(
                {
                    moviesList : result.data
                }
            ) 
        } catch (err) {
            console.log(err)
        }
    }

}

export default TableInDb;