import React from 'react';
import axios from 'axios';
import RentListings from '../RentListingsPage';

export default class ListingDetails extends React.Component {

    constructor(props) {
        super(props);

        this.loading = 'loading...';

        this.state = {
            description: this.loading,
            address: this.loading,
        }
    }

    componentDidMount() {
        console.log(this.props.location);
        const id = this.props.location.pathname.substr(10);
        axios.get(`/api/properties/${id}`)
            .then(response => {
                this.setState({ ...response.data, error: null });
            })
            .catch(err => {
                console.log('Something went wrong: ' + err);
                this.setState({
                    error: err,
                });
            })
    }



    render() {
        if (!this.state.error) {

            return (
                <div>
                    <div>
                        <p>{this.state.address.city}, {this.state.address.state}</p>
                        <p>{this.state.description.bedrooms} bedrooms, {this.state.description.bathrooms} bathrooms</p>
                        <p>Price: ${this.state.description.price}</p>
                        <p>{this.state.description.description}</p>
                    </div>

                    <RentListings />
                </div>

            )
        }
        return (
            <div>
                <h3>Error! Something went wrong on our end. More details below</h3>
                <p>{this.state.error}</p>
            </div>
        )
    }

}