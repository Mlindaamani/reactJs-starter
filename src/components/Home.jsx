import Card from "./Card";

function Home() {
  const products = [
    {
      id: 1,
      name: "Ferrari",
      desc: "Ferrari Description",
      price: 40000.24,
      image: "https://via.placeholder.com/50",
    },

    {
      id: 2,
      name: "Rambogirn Aventador",
      desc: "Ferrari Description",
      price: 40000.24,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Tesla ModalX",
      desc: "Ferrari Description",
      price: 40000.24,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Cyber Truck",
      desc: "Ferrari Description",
      price: 40000.24,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Avoror",
      desc: "Ferrari Description",
      price: 40000.24,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 6,
      name: "Corola",
      desc: "Ferrari Description",
      price: 40000.24,
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="container d-flex flex-wrap gap-5 mb-5 mt-5 justify-content-around align-items-center mb-5">
      {products.map((product) => (
        <Card {...product} key={product.id} />
      ))}
    </div>
  );
}

export default Home;
