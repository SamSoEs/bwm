import React from 'react'
import RentalCard from '../components/rental/rentalCard';
import { StateContext } from '../store/Provider';
import connect from '../store/connect';

class RentalHome extends React.Component {



    componentDidMount(){
        this.props.dispatch({type: 'FETCH_RENTALS'});
    }

   renderRental = (rentals) => 
        rentals.map(rental =>
            <div key={rental._id} className="col-md-3">
                <RentalCard rental={rental}/>  
            </div>
        );

   
    render() {
        const {rentals} = this.props;
        return(
            <div className="card-list">
                <h1 className="page-title">Your Home All Around the World</h1>
                <div className="row">
                    { this.renderRental(rentals) }
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rentals: state.rentals
    }
}
export default connect(mapStateToProps)(RentalHome);