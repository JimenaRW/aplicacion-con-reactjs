import React, {Component} from 'react';
import Genre from './Genre.js';

class GenreInDB extends Component {
    constructor(){
        super()
        this.state = {
            genresList : []
        }
        this.bgColorOver = this.bgColorOver.bind(this)
        this.bgColorLeave = this.bgColorLeave.bind(this)

        
    }
    bgColorOver() {
        document.querySelector(".fondoCaja").classList.add("bg-secondary")
    }
    bgColorLeave() {
        document.querySelector(".fondoCaja").classList.remove("bg-secondary")
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 onMouseLeave={this.bgColorLeave} onMouseOver={this.bgColorOver} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                    </div>
                    <div className="card-body fondoCaja">
                        <div className="row">
                            {
                                this.state.genresList.map((genre,index) => <Genre key={genre.name + index} name={genre.name}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    async componentDidMount() {
        try {
            await this.apiCall('/api/genres', this.getGenres)
        } catch (err) {
            console.log(err)
        }

    }

    async apiCall(url, handler) {
        try {
            let response = await fetch(url);
            let result = await response.json();

            handler(result)
        } catch (error) {
            console.log(error)
        }
    }

    getGenres = (info => {
        this.setState(
            {
                genresList : info.data
            }
        )
    })
        
}

export default GenreInDB;