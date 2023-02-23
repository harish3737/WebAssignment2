import React from "react";
import airtel from "../../assets/images/airtel.gif"
import coforge from "../../assets/images/coforge.gif"
import nutanix from "../../assets/images/nutanix.gif"
import amazon from "../../assets/images/amazon.gif"

export default function Home() {
  return (
    <main className="home-page-main-container">
      <section id="home-page" className="home-page d-flex p-3 gap-3 flex-column flex-md-row flex-wrap flex-sm-row justify-content-evenly align-items-center">

        <div className="card" style={{ width: "18rem" }}>
          <img src={airtel} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Airtel</h5>
            <p className="card-text">Leading global telecom company</p>
            <a href="/" className="btn btn-primary">View Jobs</a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={coforge} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Coforge</h5>
            <p className="card-text">Global digital services and solutions provider </p>
            <a href="/" className="btn btn-primary">View Jobs</a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={nutanix} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Nutanix</h5>
            <p className="card-text">Global leader in cloud software</p>
            <a href="/" className="btn btn-primary">View Jobs</a>
          </div>
        </div>


        <div className="card" style={{ width: "18rem" }}>
          <img src={amazon} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Amazon</h5>
            <p className="card-text">World's largest internent company</p>
            <a href="/" className="btn btn-primary">View Jobs</a>
          </div>
        </div>
      </section>
    </main>
  );
}