import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";

const Profile = (props) => {

    {/*Replace with real API fetch*/ }
    const bikesAvailable = 17;
    const firstName = "John";
    const lastName = "Smith";
    const address1 = "11 Street Dr.";
    const address2 = "";
    const city = "Houston";
    const state = "TX";
    const zipCode = "77777";
    const business = "Busniess Organization";

    const userData = {
        name: firstName + " " + lastName,
        address: address1 + " " + address2,
        cityStateZip: city + ", " + state + " " + zipCode,
        business: business
    };

    const [user, setUserData] = useState(userData);

    return (
        <div className="bigform">
            <div className="profilePage">
                <h1>Find a Bike</h1>
                <div className="profileInfo">
                    {/* <div className="profileFormat"> */}
                        <p>Choose Starting Point: </p>
                        
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1732.5360409091445!2d-95.4021957129791!3d29.717671213487037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1695527572209!5m2!1sen!2sus" 
                            width="100%" 
                            height="450" 
                            style={{ border: '0' }}
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Google Map"

                        ></iframe>
                    {/* </div> */}
                </div>
                <Link to="/profilesettings">
                    <button className="editSettings">
                        Edit Profile
                    </button>
                </Link>



            </div>
        </div>
    );
};

export default Profile;
