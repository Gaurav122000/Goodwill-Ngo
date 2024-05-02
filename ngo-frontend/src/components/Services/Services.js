import React from "react";
import Footer from '../Footer/Footer';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";
import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <>
      <section className="events">
        <div className="container">
          <div className="event-row row">
            <ServicesCard
              img={"./images/image_03.jpg"}
              title={"Basic Healthcare"}
              body={"Offering medical consultations, vaccinations, and health education to underserved communities."}
            />

            <ServicesCard
              img={"./images/image_01.jpg"}
              title={"Education Support"}
              body={"Providing tutoring, scholarships, and educational materials to children from low-income families."}
            />

            <ServicesCard
              img={"./images/image_02.jpg"}
              title={"Nutrition Programs"}
              body={"Distributing nutritious food, supplements, and conducting workshops on healthy eating habits."}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
