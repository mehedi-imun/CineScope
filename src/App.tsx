import { Button } from "./components/ui/button";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="flex h-screen w-full justify-center items-center ">
      <div className="flex items-center border border-sky-500 rounded-md p-12 gap-2">
        <Button className="bg-green-500" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button
          className="bg-blue-500"
          onClick={() => dispatch(incrementByValue(5))}
        >
          Increment By 5
        </Button>
        <h1 className="mx-10">{count}</h1>
        <Button className="bg-red-500" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default App;
