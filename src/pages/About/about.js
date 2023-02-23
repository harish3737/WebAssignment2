import React from "react";

export default function About() {
  return (
    <main className="about-page-main-container p-3">
      <div id="contact-page" className="contact-page">
        <div className="container card col-12' contact-card">
          <form action="/">
            <div className="row">
              <div className="mb-1 mt-1 col-12 ">
                <p className='fw-bold fs-2 text-center pb-2'>Want to know more about us?</p>
                <p className='fw-bold fs-3 text-center'>Contact us</p>
              </div>

            </div>
            <div className="row">
              <div className="mb-3 mt-3 col-12 col-md-6">
                <label htmlFor="pwd">Your Name</label>
                <input type="text" className="form-control mt-2" id="pwd" placeholder="Your Name" name="pswd" />
              </div>
              <div className="mb-3 mt-3 col-12 col-md-6">
                <label htmlFor="email">Your Email</label>
                <input type="email" className="form-control mt-2" id="email" placeholder="Your email"
                  name="email" />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 mt-3 col-12 ">
                <label htmlFor="pwd">Subject</label>
                <input type="text" className="form-control mt-2" id="pwd" placeholder="Subject" name="pswd" />
              </div>

            </div>
            <div className="row">
              <div className="mb-3 mt-3 col-12 ">
                <label htmlFor="pwd">Message</label>
                <textarea type="text" className="form-control mt-2" id="pwd" rows="10" placeholder="Message"
                  name="pswd" ></textarea>
              </div>

            </div>
            <div className='row mt-3'>
              <div className='col-4'></div>
              <div className='col-4 text-center'>
                <button type="submit" className="btn btn-primary contact-submit">Submit</button>
              </div>
              <div className='col-4'></div>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}