import {Component} from "react";
import PeliculasTopRated from "../components/PeliculasTopRated/PeliculasTopRated";

class TopRated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TopRatedPeliculas: null
            
        }
    }

    render() {
        return(
            <main>
                <section>
                    <PeliculasTopRated/>
                </section>
            </main>
        )
    }
}

export default TopRated;