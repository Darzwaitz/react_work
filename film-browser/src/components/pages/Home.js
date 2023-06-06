import Hero from "../Hero";

const Home = () => {
  return (
    <main>
      <Hero text="Hero comp" />
      <section className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, quo aliquam, quis accusantium magni reprehenderit
              deleniti, laudantium pariatur sunt exercitationem voluptatum eum
              provident! Explicabo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
