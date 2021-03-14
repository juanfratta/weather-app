import { useEffect, useReducer } from "react";
import { tempReducer } from "../../reducer/tempReducer";
import { get_temp } from "../../reducer/tempActions";

import Form from "./form";
import ViewInfo from "./viewInfo";

import { CardContainer } from "./styles";

const initialState = {
  loading: false,
  data: null,
  error: false,
  url: undefined,
  city: undefined,
};

const Card = () => {
  const [state, dispatch] = useReducer(tempReducer, initialState);

  useEffect(() => {
    get_temp(dispatch);
  }, []);

  return (
    <CardContainer>
      {state.loading && <div>Loading...</div>}
      {state.data && (
        <>
          <ViewInfo name={state.name} temp={state.main.temp} />
          <Form />
        </>
      )}
      {state.error && <div> Error...</div>}
    </CardContainer>
  );
};

export default Card;
