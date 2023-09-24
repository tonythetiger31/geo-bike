import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";

const Account = (props) => {

    {/*Replace with real API fetch*/}
    const userName = "johnsmith101";
    const email = "johnsmith@email.com";
    const password = "123456789";
    const bikeBucks = "564";

    const userData = {
        userName: userName,
        email: email,
        password: password,
        bikeBucks: bikeBucks,
    };

    const [user, setUserData] = useState(userData);

  return (
    <div className="bigform">
        <div className="profilePage">
            <h1>Your account info</h1>
                <div className="profileInfo">
                    <div className="profileFormat">
                        <p>Username: </p>
                        <p>Email: </p>
                        <p>Password: </p>
                        <p>BikeBucks earned: </p>
                    </div>
                    <div className="userInfo">
                        <p>{user.userName}</p>
                        <p>{user.email}</p>
                        <PasswordDisplay password={user.password} />
                        <p>{user.bikeBucks} BikeBucks</p>
                    </div>
                </div>
            <Link to="/accountsettings">
                <button className="editSettings">
                Edit Account
                </button>
            </Link>
            
        </div>
    </div>
  );
};

const PasswordDisplay = ({password}) => {
    const hidePassword = () => {
        return password.replace(/./g, '•');
    };

    return <p>{hidePassword()}</p>
}

export default Account;
