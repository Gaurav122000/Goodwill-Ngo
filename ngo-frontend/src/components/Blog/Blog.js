import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";
import ReadMore from '../ReadMore';


function Blog() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/blog')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);





  return (
    <>
    <div className='events'>
      {/* Our Blog Section */}
      <section className="our-blog">
        <div className="container">
          <div className="blog-row row">
            {/* Single Blog Item */}

            {blogs.map((blog) => {
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
            {/* Add more Single Blog Items here */}
          </div>
        </div>
      </section>
      {/* End Our Blog Section */}
     
    </div>
    <Footer />
  </>
  );
}

export default Blog;
