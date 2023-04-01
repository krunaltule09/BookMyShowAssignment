// import { movieContext } from "./context";
// import { useContext } from "react";
import CardDetail from "./CardDetails";
import { Link } from "react-router-dom";

const ListView = (props) => {
  // const { data } = useContext(movieContext);

  return (
    <>
      {props?.data?.Events?.map((event, id) => {
        return (
          <Link to={`/Events/${event.code}`}>
            <CardDetail key={event?.code} event={event} />
          </Link>
        );
      })}
    </>
  );
};

export default ListView;
