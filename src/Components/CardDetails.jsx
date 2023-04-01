// import {movieContext} from './context'
// import {useContext} from 'react';
const CardDetail = (props) => {
  // const {data} =useContext(movieContext);

  return (
    <>
      <div className='cardContainer'>
        <div className='imageContainer'>
          <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png' />
        </div>
        <div>{props?.event?.title}</div>
      </div>
    </>
  );
};

export default CardDetail;
