import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import HeaderBelow from "../components/HeaderBelow";
import ChartCard from "../components/ChartCard";
import Activities from "../components/Activities";
import TopBlogs from "../components/TopBlogs";
import ArchivedBlog from "../components/ArchivedBlogs";
import axios from "axios";

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_KEY = "ad432a8c8352c8ef8cc469797072396f";

const Dashboard = (props) => {
  const [state, setState] = React.useState({
    longitude: "",
    latitude: "",
  });
  const [cityname, setCityname] = useState("Place name");
  const [countryName, setCountryName] = useState("Np");
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState([]);
  const [teamList, setTeamList] = useState("");

  const { longitude, latitude } = state;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    });
    axios
      .get(`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then((response) => {
        console.log(response.data.weather[0].description);
        setCityname(response.data.name);
        setCountryName(response.data.sys.country.toLowerCase());
        setTemperature((response.data.main.temp - 273.15).toFixed(0));
        setWeather(response.data.weather[0].description);
      });
  }, [latitude]);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNav />
        <div className="col py-3 text-dark ">
          <div className="container-fluid">
            <div className="container-fluid mt-5  text-white text-center">
              <Header />
              <HeaderBelow
                cityname={cityname}
                countryName={countryName}
                userName={props.userName}
              />
            </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col-xl-6">
                  <ChartCard />
                  <ArchivedBlog />
                </div>
                <div className="col-xl-6">
                  <Activities />
                  <TopBlogs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
