// import {movieContext} from './context'
// import {useContext} from 'react';
const CardDetail = (props) => {
  // const {data} =useContext(movieContext);

  return (
    <>
      <div className="cardContainer">
        <div className="imageContainer">
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzOS4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-peatrzdcmr-portrait.jpg" />
        </div>
        <div>{props?.event?.title}</div>
      </div>
    </>
  );
};

export default CardDetail;
