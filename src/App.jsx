import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease,setCount } from "./redux/slices/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => ({
    count: store.counterReducer.count,
  }));
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <Stack direction="horizontal" gap={3}>
        <Button onClick={()=> dispatch(decrease())} variant="danger">Azalt</Button>
        <Button onClick={() => dispatch(increase())} variant="success">
          Artır
        </Button>

        <Button onClick={()=>dispatch(setCount(0))}
         variant="primary">Sıfırla</Button>
      </Stack>
    </div>
  );
};

export default App;
