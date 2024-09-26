import { NavBar} from "./components";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-2 p-0">{/* sidebar */}</div>
          <div className="col-md-10 contents">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
