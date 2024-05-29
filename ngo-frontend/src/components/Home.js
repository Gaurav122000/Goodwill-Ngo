import React, { useEffect, useState } from 'react';
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/all.min.css";
import "../assets/css/animate.css";
import Footer from '../components/Footer/Footer';
import AboutCharity from './About/AboutCharity';
import ServicesCard from './Services/ServicesCard';
import ReadMore from './ReadMore';


// import About from './About';

function Home() {


  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/blog')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);




  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/slider-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./images/slider-2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/slider-3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* About Us Section */}

      <AboutCharity />

      {/* Events */}
      <section className="events">
        <div className="container">
          <div className="session-title row">
            <h2>Services By Our NGO</h2>
            <p>We are a non-profit & Charity raising money for child education and Child Support</p>
          </div>
          <div className="event-row row">
            {/* Example event box */}
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
            {/* Repeat similar event boxes for other causes */}
          </div>
        </div>
      </section>

     {/* Unused */}

      {/* Our Blog */}
      <section className="our-blog">
        <div className="container">
          <div className="row session-title">
            <h2>Our Blog</h2>
            <p>Take a look at what people say about us</p>
          </div>
          <div className="blog-row row">
            {/* Example blog post */}
            {blogs.slice(0, 3).map((blog) => {
              return (
                <div className="col-md-4 col-sm-6">
                  <div className="single-blog">
                    <figure>
                      <img src={blog.img} height={300} width={380} />
                    </figure>
                    <div className="blog-detail">
                      <small>{blog.name}</small>
                      <h4>{blog.title}</h4>
                      <ReadMore props={blog.blog} />
                    </div>
                  </div>
                </div>
              )

            })}


            {/* Repeat similar blog posts */}
          </div>
        </div>
      </section>
      <Footer />
      {/* </React.Fragment > */}
    </>
  );
}

export default Home;
