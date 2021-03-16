import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { WeatherContext } from "../../../context/weatherContext";
import { KEY } from "../../../utils/variables";

import HistoricFormatter from "./historicFormatter";
import { HistoryContainer } from "./styles";

const ViewHistoricInfo = () => {
  const { data } = useContext(WeatherContext);
  const [days, setDays] = useState([]);
  const { lat, lon } = data.coord;
  const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${KEY}`;

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      let days = res.data.daily;
      setDays(days);
    });
  }, []);

  return (
    <HistoryContainer>
      Last 5 days:
      {
        <div>
          {days.slice(0, 5).map((day) => (
            <HistoricFormatter key={day.id} temp={day.temp.day} />
          ))}
        </div>
      }
    </HistoryContainer>
  );
};

export default ViewHistoricInfo;
