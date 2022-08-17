import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div>
      <section class="pricing-section">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-xl-5 col-lg-6 col-md-8">
              <div class="section-title text-center title-ex1">
                <h2>Our Packages</h2>
                <p>
                  Domain and Web Hosting Bangladesh. We provide reliable domain
                  and web hosting in Bangladesh. You can Get your right domain
                  name and hosting plan here.
                </p>
              </div>
            </div>
          </div>

          <div class="row g-2">
            <div class="col-md-4">
              <div class="price-card">
                <h2>Personal</h2>
                <p>The standard version</p>
                <p class="price">
                  <span>29</span>/ Month
                </p>
                <ul class="pricing-offers">
                  <li>2 Domain Names</li>
                  <li>5 E-Mail Address</li>
                  <li>2GB Disk Space</li>
                  <li>Monthly Bandwidth</li>
                  <li>Admin Panel</li>
                </ul>
                <a href="#" class="btn btn-primary btn-mid">
                  Buy Now
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="price-card featured">
                <h2>Student</h2>
                <p>Most popular choice</p>
                <p class="price">
                  <span>20</span>/ Month
                </p>
                <ul class="pricing-offers">
                  <li>3 Domain Names</li>
                  <li>6 E-Mail Address</li>
                  <li>3GB Disk Space</li>
                  <li>Monthly Bandwidth</li>
                  <li>Powerful Admin Panel</li>
                </ul>
                <a href="#" class="btn btn-primary btn-mid">
                  Buy Now
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="price-card ">
                <h2>Business</h2>
                <p>For the whole team</p>
                <p class="price">
                  <span>89</span>/ Month
                </p>
                <ul class="pricing-offers">
                  <li>6 Domain Names</li>
                  <li>10 E-Mail Address</li>
                  <li>10GB Disk Space</li>
                  <li>Monthly Bandwidth</li>
                  <li>Powerful Admin Panel</li>
                </ul>
                <a href="#" class="btn btn-primary btn-mid">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
