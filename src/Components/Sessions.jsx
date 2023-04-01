import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import { Link } from 'react-router-dom';

const getSessionDetails = (id) => {
  const details = data.Session.filter((session) => {
    return session.Product === id;
  });
  return details;
};

function Sessions() {
  const { id } = useParams();
  const sessionDetails = getSessionDetails(id);
  return sessionDetails?.map((session) => {
    return (
      <Link to={`/Events/${id}/sessions/${session.code}/tickets`}>
        <div class='sessions'>
          <div className='seesion'>
            <span>
              <h3>When:- </h3>
              {session.sessionDate} - ({session.sessionTime})
            </span>{' '}
            <br />
            <h3>Where:- </h3> {session.Venue}
            <br /> <h3>Total Seats:- </h3>
            {session.totalSeats} <br />
            <br />
            <hr />
          </div>
        </div>
      </Link>
    );
  });
}

export default Sessions;
