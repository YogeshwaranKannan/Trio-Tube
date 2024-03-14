
import { Provider } from "react-redux";
import Head from "./components/Title";
import Body from "./components/body";
import "./index.css"
import appStore from "./utils/appStore";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
 
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  },
   
])
function App() {
  return (
    <Provider  store ={appStore}>
    <div>
        <Head/>
        <RouterProvider router = {appRouter}/>
    </div>
    </Provider>
    
  );
}

export default App;
