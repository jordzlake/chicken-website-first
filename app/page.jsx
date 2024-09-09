import "./home.css";
import Banner from "@/components/sections/banner/Banner";
import MainInfoBlock from "@/components/containers/mainInfoBlock/MainInfoBlock";
import Feedback from "@/components/sections/feedback/Feedback";

const Home = () => {
  return (
    <main>
      <section>
        <Banner />
      </section>
      <section>
        <div className="home-container container">
          <h2 className="home-title">Our Process</h2>
          <MainInfoBlock
            svgImage="./chicken.svg"
            num="1.0"
            heading="Quick Orders"
            para="We provide the fastest delivery of live chickens, ensuring they arrive safely and swiftly to your location. Our service is reliable, offering healthy chickens delivered straight to your door in no time."
            bgColor="#23444E"
            showArrow={true}
          />
          <MainInfoBlock
            svgImage="./clock.svg"
            num="2.0"
            heading="Punctual Schedule"
            para="We pride ourselves on delivering live chickens with a punctual schedule, ensuring they arrive exactly when expected. Our reliable service guarantees timely and safe delivery, so you can plan confidently without any delays."
            bgColor="#22677D"
            showArrow={true}
          />
          <MainInfoBlock
            svgImage="./truck.svg"
            num="3.0"
            heading="Fast Delivery"
            para="We specialize in fast delivery of live chickens, ensuring they reach you quickly and safely. Our efficient service guarantees your order arrives in the shortest possible time without compromising quality."
            bgColor="#0087B1"
            showArrow={false}
          />
        </div>
      </section>
      <section>
        <Feedback />
      </section>
    </main>
  );
};

export default Home;
