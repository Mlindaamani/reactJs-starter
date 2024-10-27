
import { Home } from "../components/Home";
import { Card } from "../components/Card";
import { Counter } from "../components/Counter";
import { NotFound } from "../components/NotFound";
import { ListGroup } from "../components/ListGroup";
import { SignupForm } from "../components/SignupForm";
import { ReducerCounter } from "../components/ReducerCounter";
import { Routes , Route} from "react-router-dom";
export const AppRoutes = () => (
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

 