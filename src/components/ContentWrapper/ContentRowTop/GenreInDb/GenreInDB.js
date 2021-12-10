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
                                this.state.genresList.map((genre,index) => <Genre key={index} {...genre}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    async componentDidMount() {
        try {
            let response = await fetch('/api/genres');
            let result = await response.json();
            
            //console.log(result)
            this.setState(
                {
                    genresList : result.data
                    
                }
            )    

        } catch(err) {
            console.log(err)
        }
    }
        
}

export default GenreInDB;