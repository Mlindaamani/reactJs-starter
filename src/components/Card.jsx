export const Card = ({ name, desc, price, image }) => {
  return (
    <div className="card w-25 border-0 rounded-5 shadow-lg">
      <div className="card-header bg-dark text-light shadow fw-bold p-4">
        {name}
      </div>
      <img src={image} alt="" />
      <div className="card-body bg-dark">
        <p className="lead text-light">{desc}</p>
        <p className="fw-bold text-light">$ {price}</p>
        <button className="btn btn-warning p-2 w-50 m-2 text-nowrap fw-bold text-bg-warning">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

