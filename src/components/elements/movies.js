import React from 'react';
import './elements.css'
import { useSelector ,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { getid } from '../redux-body/reducer';


 function Movies() {
    const selector  = useSelector(state => state.collection.shows);
    const inputvalue  = useSelector(state => state.collection.value);
    const movies = selector.filter(movie => movie.Type === 'movie' ? [movie] : '')
    const dispatch = useDispatch();
    const setid = (id) =>{
         dispatch(getid(id));
    }
  return (
    <div className='content'>
    <div  className='container'>
{movies.filter(element => {
      if(inputvalue === ""){
        return element
      }else{
       return element.Title.toLowerCase().includes(inputvalue.toLowerCase())
      }
    }).map(element =>
    <Link to='/element'  key={element.id} className="element" onClick={() => setid(element.id)}>
          <div className='inner'>
           <div className='image'> <img src={element.Poster} /> </div>
           <div className='upper'>
            <p className='type'>{element.Type}</p>
            <p className='rating'><FaStar className='icon'/> {element.imdbRating}</p>
           </div>
            <div className='text'>
                <h1>{element.Title}</h1>
                <p>{element.Genre}</p>
          </div>
            </div>
        </Link>
            )}
       </div>
    </div>
  )
}

export default Movies;