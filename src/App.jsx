import "./App.css";

function App() {
  return (
    <div className="container h-screen w-screen bg-cream flex flex-col md:flex-row justify-center items-center">
      <div className="flex mx-1 justify-center flex-col md:flex-row md:mx-auto">
        <div className="w-80 flex justify-end">
          <img
            src="../images/image-product-desktop.jpg"
            alt=""
            className="rounded-l-xl"
          />
        </div>
        <div className="w-80 bg-white rounded-r-xl p-8 flex flex-col">
          <h3 className="font-[Montserrat] mb-5 text-blue tracking-widest text-sm">
            PERFUME
          </h3>
          <h1 className="text-4xl font-bold mb-5">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="font-[Montserrat] mb-5 text-blue">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center mb-5">
            <h2 className="text-3xl mr-3 text-green">$149.99</h2>
            <span className="font-[Montserrat] text-blue">
              <strike>$169.99</strike>
            </span>
          </div>
          <button className="font-[Montserrat] w-full bg-green text-white h-12 rounded-xl hover:bg-darkGreen">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
