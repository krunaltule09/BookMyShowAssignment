// import { movieContext } from "./context";
// import { useContext } from "react";
import ListView from "./ListView";

const AppContainer = (props) => {
  // const {data} =useContext(movieContext);

  return <ListView data={props?.data} />;
};

export default AppContainer;
