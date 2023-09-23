function HeaderIndex(){

    return(
        <div>
             <header className = "flex">
            <div className = "container">
                <div className = "header-title">
                    <h1>Tourista</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
                </div>

                <div className="header-form">
                    <h2>Choose your Travel location:</h2>
                    <form className="flex" id="destinationForm">
                        <div className="input-row">
                            {/* <!-- First Row of Inputs --> */}
                            <select className="form-control" id="destination" name="destination" required>
                                {/* <!-- Options for states --> */}
                                <option  value="" disabled selected>Select State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                            <select className="form-control" id="city" name="city" required disabled>
                                <option value="" disabled selected>City</option>
                            </select>
                            <input type="number" className="form-control" placeholder="Price ($)" id="price" name="price" required />
                        </div>
                        <div className="input-row">
                            <select className="form-control" id="star-rating" name="star-rating" required>
                                <option value="" disabled selected>Star Rating</option>
                                <option value="5">&#9733; &#9733; &#9733; &#9733; &#9733;</option>
                                <option value="4">&#9733; &#9733; &#9733; &#9733;</option>
                                <option value="3">&#9733; &#9733; &#9733;</option>
                                <option value="2">&#9733; &#9733;</option>
                                <option value="1">&#9733;</option>
                            </select>
                            <select className="form-control" id="average-crowd" name="average-crowd" required>
                                <option value="" disabled selected>Average Crowd</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                                <option value="Very High">Very High</option>
                            </select>
                            <select className="form-control" id="location-type" name="location-type" required>
                                <option value="" disabled selected>Landscape Type</option>
                                <option value="Mountain">Mountain</option>
                                <option value="Plateau">Plateau</option>
                                <option value="Beach">Beach</option>
                                <option value="Desert">Desert</option>
                                <option value="Forest">Forest</option>
                            </select>
                        </div>
                        <input type="submit" className="btn" value="Search" />
                    </form>
                </div>
            </div>
        </header>
    </div>
    )
}
export default HeaderIndex;