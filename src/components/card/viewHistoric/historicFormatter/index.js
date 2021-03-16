import { Historic } from "./styles";

const HistoricFormatter = ({ temp }) => {
  const currentTemp = temp ? temp - 273.15 : "";
  return <Historic>{` ${currentTemp.toFixed(1)}° `}</Historic>;
};

export default HistoricFormatter;
