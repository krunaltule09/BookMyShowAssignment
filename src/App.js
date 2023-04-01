// import "./styles.css";
import data from './data.json';
// import { movieContext } from "./Components/context";
// import { AppContainer } from "./Components/AppContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './Components/Card';
import ListView from './Components/ListView';
import Sessions from './Components/Sessions';

console.log('appContainer');
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<ListView data={data} />}></Route>
        <Route path='/Events/:id' element={<Card />}></Route>
        <Route path='/Events/:id/sessions' element={<Sessions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
