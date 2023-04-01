import { useParams } from 'react-router-dom';
import data from '../data.json';
import { Link } from 'react-router-dom';

const getEventDetails = (id) => {
  const details = data.Events.find((event) => {
    return event.code === id;
  });
  return details;
};

const Card = (props) => {
  const { id } = useParams();
  const { title, date, time, desc, genre, ageGroup } = getEventDetails(id);
  return (
    <div>
      <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png' />
      <h1>{title}</h1>
      <h1>{date}</h1>
      <h1>{time}</h1>
      <h1>{desc}</h1>
      <h1>{genre}</h1>
      <h1>{ageGroup}</h1>
      <Link to={`/Events/${id}/sessions`}>
        <button>Book</button>
      </Link>
    </div>
  );
};

export default Card;
