function PopPlaces() {
    return (
      <div className="PopPlaces">
        <section id = "popular" class = "py-4">
            <div class = "title-wrap">
                <span class = "sm-title">know about some cool destination</span>
                <h2 class = "lg-title">Popular Places</h2>
            </div>

            <div class = "popular-row">
                <div class = "popular-item shadow">
                    <img src = "images/popular-1.jpg" alt = "" />
                    <div><i class = "fas fa-map-marker-alt"></i>
                        <span>Eiffel Tower, Paris</span>
                        <ul class = "rating flex">
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default PopPlaces;