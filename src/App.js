import { GlobalStyle } from "./theme/globalStyle";
import Card from "./components/card";
import { WeatherProvider } from "./context/weatherContext";

function App() {
  return (
    <WeatherProvider>
      <GlobalStyle />
      <Card />
    </WeatherProvider>
  );
}

export default App;
