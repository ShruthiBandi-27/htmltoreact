import React from "react";
import { data } from "./utils";

export default function Card(props) {
  return (
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((value, index) => {
              return (
                <div key={index} className="col-lg-4">
                  <div className="card mb-5 mb-lg-0">
                    <div className="card-body">
                      <h5 className="card-title text-muted text-uppercase text-center">
                        {props.titles[index]}
                      </h5>
                      <h6 className="card-price text-center">
                        {props.headings[index]}
                        <span className="period">/month</span>
                      </h6>
                      <hr />
                      <ul className="fa-ul">
                        <li
                          style={{
                            fontWeight:
                              props.titles[index] === "FREE" ? "" : "bold",
                          }}
                        >
                          <span className="fa-li">
                            <i className="fas fa-check"></i>
                          </span>
                          {value.d1}
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check"></i>
                          </span>
                          {value.d2}
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check"></i>
                          </span>
                          {value.d3}
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check"></i>
                          </span>
                          {value.d4}
                        </li>
                        <li
                          className={
                            props.titles[index] === "FREE" ? "text-muted" : ""
                          }
                        >
                          <span className="fa-li">
                            <i
                              className={
                                props.titles[index] === "FREE"
                                  ? "fas fa-times"
                                  : "fas fa-check"
                              }
                            ></i>
                          </span>
                          {value.d5}
                        </li>
                        <li
                          className={
                            props.titles[index] === "FREE" ? "text-muted" : ""
                          }
                        >
                          <span className="fa-li">
                            <i
                              className={
                                props.titles[index] === "FREE"
                                  ? "fas fa-times"
                                  : "fas fa-check"
                              }
                            ></i>
                          </span>
                          {value.d6}
                        </li>
                        <li
                          className={
                            props.titles[index] === "FREE" ? "text-muted" : ""
                          }
                        >
                          <span className="fa-li">
                            <i
                              className={
                                props.titles[index] === "FREE"
                                  ? "fas fa-times"
                                  : "fas fa-check"
                              }
                            ></i>
                          </span>
                          {props.titles[index] === "PRO" ? (
                            <span>
                              <span style={{ fontWeight: "bold" }}>
                                Unlimited
                              </span>{" "}
                              Free Subdomain
                            </span>
                          ) : (
                            "Free Subdomain"
                          )}
                        </li>
                        <li
                          className={
                            props.titles[index] === "PRO" ? "" : "text-muted"
                          }
                        >
                          <span className="fa-li">
                            <i
                              className={
                                props.titles[index] === "PRO"
                                  ? "fas fa-check"
                                  : "fas fa-times"
                              }
                            ></i>
                          </span>
                          {value.d8}
                        </li>
                      </ul>
                      <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">
                          Button
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

           
          </div>
        </div>
      </section>
    </div>
  );
}
