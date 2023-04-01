// import { movieContext } from "./context";
// import { useContext } from "react";
import CardDetail from './CardDetails';
import { Link } from 'react-router-dom';
import './style.css';

const ListView = (props) => {
  // const { data } = useContext(movieContext);

  return (
    <>
      <div className='flex_row'>
        {props?.data?.Events?.map((event, id) => {
          return (
            <div className='card'>
              <Link key={event?.code} to={`/Events/${event.code}`}>
                <CardDetail event={event} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListView;
