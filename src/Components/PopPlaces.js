import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TourPlaceData from '../TourPlaceData';
import React from 'react';
import TouristPlace from './TouristPlace';

function PopPlaces({setSiteInfo}) {

    const [siteData, setSiteData] = React.useState(TourPlaceData);

    const displaySite = siteData.map(site =>{
        
        setSiteInfo(site);


        return  <div class = "popular-item shadow">
            <img src = {site.url} alt = "" />
            <div><i class = "fas fa-map-marker-alt"></i>
                <span>{site.name}</span>
                <ul class = "rating flex">
                    {/* <li><i class = "fas fa-star"></i></li>
                    <li><i class = "fas fa-star"></i></li>
                    <li><i class = "fas fa-star"></i></li>
                    <li><i class = "fas fa-star"></i></li> */}
                    <li><i class = "fas fa-star-half-alt"></i></li>
                    <li>{site.city}, </li>
                    <li>{site.state}</li>
                    <br></br>
                </ul>
                <Link to="/site" >Visit Site </Link>
            </div>
        </div>
    })


    return (
      <div className="PopPlaces">
        <section id = "popular" class = "py-4">
            <div class = "title-wrap">
                <span class = "sm-title">Know about some cool destinations</span>
                <h2 class = "lg-title">Popular Places</h2>
            </div>
            <div class = "popular-row">
                {displaySite}
            </div>
            

        </section>
      </div>
    );
  }
  
  export default PopPlaces;