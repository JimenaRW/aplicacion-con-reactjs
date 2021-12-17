import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ id, title, length, rating, genre, awards }) {

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{rating}</td>
            <td>{awards}</td>
            <td>{length !== null ? length : '-'}</td>
            <td>
                <ul>
                    <li>
                        {genre !== null ? genre.name : 'Sin género'}
                    </li>
                </ul>
            </td>
        </tr>
    );

}
TableRow.defaultProps = {
    title: PropTypes.string.isRequired,
    length: PropTypes.number
}
export default TableRow;