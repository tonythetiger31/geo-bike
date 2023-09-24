
const BikeHistory = (props) => {

  // Replace w data from DB
  const arrayOfTrips = [
    {
      travelDate: "2023-09-16 8:16PM",
      miles: 15,
      gallonsSaved: 0.5, //assuming 30mpg
      CO2savedTonnes: 0.0082, //assuming 0.0164 tonnes emitted per gallon
      bikeBucks: 5 //10 bikebucks per gallon saved
    },
    {
      travelDate: "2023-09-17 4:52PM",
      miles: 30,
      gallonsSaved: 1, //assuming 30mpg
      CO2savedTonnes: 0.0164, //assuming 0.0164 tonnes emitted per gallon
      bikeBucks: 10 //10 bikebucks per gallon saved
    }
  ];

  return (

    <div className="main-div">

      <div className="main-sub-div">
        {arrayOfTrips.map((trip, index) => (
          <div key={index} className="main-sub-div">
            <p className="trip-p grey">Travel Date: {trip.travelDate}</p>
            <p className="trip-p grey">Miles: {trip.miles}</p>
            <p className="trip-p grey">Gallons Saved: {trip.gallonsSaved}</p>
            <p className="trip-p grey">CO2 Saved (Tonnes): {trip.CO2savedTonnes}</p>
            <p className="trip-p grey">Bike Bucks: {trip.bikeBucks}</p>
          </div>
        ))}
      </div>
          </div>

  );
};

export default BikeHistory;
