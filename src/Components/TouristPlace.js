function TouristPlace(siteInfo)
{
    console.log({siteInfo})
    return(
        <div>
             <div class="profile-container">
         <img src={siteInfo.url}  class="profile-image" />

         <div class="profile-component">
             <h2>{siteInfo.city}, {siteInfo.state}</h2>
             <h4>{siteInfo.landscape}</h4>
            <div class="star-rating"> <span>Star Rating: {siteInfo.star}</span>
                 {/* <span>&#9733;</span>
        //         <span>&#9733;</span>
        //         <span>&#9733;</span>
        //         <span>&#9733;</span>
        //         <span>&#9734;</span>  */}
             </div>
             <p>Average Crowd: {siteInfo.crowd}</p>
             <p class="des">{siteInfo.description}</p>
         </div>
         </div>
         </div>
    )
}

export default TouristPlace;