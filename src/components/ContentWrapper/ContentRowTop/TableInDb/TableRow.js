import React from 'react';

function TableRow({ title, length, rating, genres, awards }) {
    return ( 
        <tr>
            <td>{ title }</td>
            <td>{ length }</td>
            <td>{ rating }</td>
            <td>
                <ul>

                { genres.map( (genre,i) => <li key={genre + i} >{genre}</li>) }
                
                </ul>
            </td>
            <td>{ awards }</td>
        </tr>
     );
}

export default TableRow;