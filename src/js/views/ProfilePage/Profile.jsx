import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer/Footer';

class Profile extends React.Component {
  render() {
    const { auth, currentSession } = this.props;
    return (
      <div>
        <NavigationBar />

        <div className="main-section">
          <div className="control">
            <p className="title is-inline-block">Hey {auth.firstName}</p>
            <span className="tag is-primary">{auth.isLandlord ? 'Landlord' : 'Tenant'}</span>
          </div>
          <div className="grid">
            {!!currentSession.reservations.length &&
              currentSession.reservations.map((reservation, index) => {
                const startDate = parseDate(reservation.startDate);
                const endDate = parseDate(reservation.endDate);
                const { address, description } = reservation.propertyDetails;
                return (
                  <article className="message is-dark" key={index}>
                    <div className="message-header">
                      <p>{`${address.street}, ${address.city} ${address.zipCode}`}</p>
                    </div>
                    <div className="message-body">
                      <p>From: {startDate} To: {endDate}</p>
                      <p>Monthly Rate: ${description.price}</p>
                      <Link
                        className="button is-primary"
                        to={'/listings/' + reservation.propertyID}>
                        More Details
                      </Link>
                    </div>
                  </article>
                );
              })
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function parseDate(dateString) {
  const dateObject = new Date(dateString);
  const updatedDate = dateObject.toString();

  return updatedDate.substring(0, 15);
}

Profile.propTypes = {
  auth: PropTypes.object,
  currentSession: PropTypes.object,
};

export default Profile;
