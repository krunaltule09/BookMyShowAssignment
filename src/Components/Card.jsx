import { useParams } from "react-router-dom";

const Card = (props) => {
  const { id } = useParams();
  // console.log(id);
  return <>hi {id}</>;
};

export default Card;
