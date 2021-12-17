import React from "react";
import TableRow from "./TableRow";

function TableInDb() {
    let data = [
        {
            title : "Billy Elliot",
            length : 123,
            rating : 3,
            genres : ["Drama", "Comedia"],
            awards : 2
        },
        {
            title : "Alicia en el país de las maravillas",
            length : 105,
            rating : 4,
            genres : ["Infantil", "Comedia"],
            awards : 1
        }
    ]
    return ( 
        <div>
            <table className="shadow">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Duración</th>
                        <th>Rating</th>
                        <th>Género</th>
                        <th>Premios</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((item, i) => {
                        return (
                            <TableRow
                                key = {item.title + i}
                                title = {item.title}
                                length = {item.length}
                                rating = {item.rating}
                                genres = {item.genres}
                                awards = {item.awards}
                            />
                        )
                    })}
                </tbody>

            </table>
        </div>
    );
}

export default TableInDb;