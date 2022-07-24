import React , { useEffect } from 'react';
import './content.css'
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { text } from '../redux-body/data';
import Elements from '../elements/elements';
import Movies from '../elements/movies';
import Series from '../elements/series';
import Details from '../elements/details/details';




function Content() {
    const dispatch =  useDispatch();
    useEffect(() =>{
     dispatch(text());
    },[dispatch])
  return (
<BrowserRouter>
  <div >
    <Switch>
      <Route exact path='/' component={Elements} />
      <Route exact path='/movies' component={Movies} />
      <Route exact path='/series' component={Series} />
      <Route exact path='/element' component={Details} />
     </Switch>
  </div>
</BrowserRouter>
  )
}


export default Content;
