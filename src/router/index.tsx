import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Details from "../pages/Detail/Details";

export function Router (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/details/:id" element={<Details  />}/>
      </Routes>
    </BrowserRouter>
  )
}