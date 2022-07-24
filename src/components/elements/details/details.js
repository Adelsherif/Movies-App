import React from 'react';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import './details.css';


export default function Details() {
    const id  = useSelector(state => state.collection.id);
    const selector  = useSelector(state => state.collection.shows);
   const movieDetails= selector.filter(element => element.id === id ? element : '');
  
  return (
    <div className='details'>
        {
           movieDetails.map(info =>
            <div className='container' key={info.id}>
              <div className='parent'>
              <div className='full'>
                <div className='image'>
                    <img src={info.Poster} ait="image" />
                </div>
                <div className='text'>
                    <div className='information'>
                        <h2>{info.Title}</h2>
                        <span>{info.Genre}</span>
                        <p><span className='rating'>IMDB</span>  : {info.imdbRating} <FaStar className='icon'/></p>
                        <p>Language : {info.Language}</p>
                        <p>Release Date : {info.Released}</p>
                        <p>Full Time : {info.Runtime}</p>
                        <p>Country : {info.Country}</p>
                        <p>Awards : {info.Awards}</p>
                        <p>Writer : {info.Writer}</p>
                        <p>Actors : {info.Actors}</p>
                       {info.totalSeasons ? <p>Total Seasons : {info.totalSeasons}</p> : ''}
                    </div>
                    <div className='watch'>
                    <button >Download</button>
                    <button >Watch</button>
                    </div>
                </div>
            </div></div>
            <div className='from'>
              <div className='story'>
                <h1>Story : </h1>
              <p> {info.Plot}</p>
              </div>
              <div className='images'>
              {
                 movieDetails.map(from =>
                       from.Images.map(image =>
                        <div className='img' key={Math.random()}>
                          <img src={image} alt='image' />
                        </div>
                        )) 
              }
            </div>
            </div>
            </div>
          )
        }
    </div>
  )
}
