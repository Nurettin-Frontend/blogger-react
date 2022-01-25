// import { useSelector, useDispatch } from "react-redux";
import  Routes  from "./routes";
function App() {
  // const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);

  // const incrementHandler = () => {
  //   return (dispatch, getState) => {
  //     const state = getState();

  //     console.log("blabla" + state.counter);
  //     dispatch({ type: "INC" });
  //   };
  // };
  // const handler = () => {
  //   dispatch(incrementHandler());
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "DESC", posts: [1, 2, 3] });
  // };

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
