import React from "react";

function Footer() {
  return (
    <div className="footerDiv">
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Order Now</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Deals
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Pizza
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Burger
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Drinks
                  </a>
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">about</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contactless delivery
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Nutrition
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Our Policies</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Responsible disclosure
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQs & Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Gomti
                  Nagar, Lucknow, India
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> + 01 234
                  567 88
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> + 01 234
                  567 89
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        <div className="text-center p-4">
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Yours Kitchen .com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}

export default Footer;
