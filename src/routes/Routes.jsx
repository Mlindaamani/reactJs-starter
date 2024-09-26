import { Routes, Route } from "react-router-dom";
import {
  Home,
  SignupForm,
  ListGroup,
  ReducerCounter,
  Card,
  Counter,
  NotFound,
} from "../components";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignupForm />} />
    <Route path="/list" element={<ListGroup />} />
    <Route path="/counter" element={<ReducerCounter />} />
    <Route path="/card" element={<Card />} />
    <Route path="/counte-userstate" element={<Counter />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
