import Hero from "../Hero";
const About = ({ text }) => {
  return (
    <main>
      <Hero text="About Us" />

      <section className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
              mollitia fugiat quaerat minima magni possimus dolorem eveniet
              dicta vero aperiam a eum alias ducimus, ipsam perferendis modi
              exercitationem at placeat!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
