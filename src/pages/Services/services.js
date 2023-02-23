import React from "react";

export default function Services() {
    return (
        <main className="services-page-main-container p-3">
            <section id="services-page" className="services-page">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Resume Writing
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-group">
                                    <li className="list-group-item"><a href="https://resume.naukri.com/resume-writing-services?fftid=101001">Text Resume</a></li>
                                    <li className="list-group-item"><a href="https://resume.naukri.com/visual-resume-writing-services?fftid=101002">Visual Resume</a></li>
                                    <li className="list-group-item"><a href="https://resume.naukri.com/resume-critique?fftid=101006">Resume Critique</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Learn & Upskill
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-group">
                                    <li className="list-group-item"><a
                                        href="https://www.naukri.com/learning/data-science-courses-certification-training-ct123?fftid=naukri_gnb">Data
                                        Science Courses</a></li>
                                    <li className="list-group-item"><a
                                        href="https://www.naukri.com/learning/technology-courses-certification-training-ct139?fftid=naukri_gnb">Technology
                                        courses</a></li>
                                    <li className="list-group-item"><a
                                        href="https://www.naukri.com/learning/management-courses-certification-training-ct135?fftid=naukri_gnb">Management
                                        Courses</a></li>
                                    <li className="list-group-item"><a
                                        href="https://www.naukri.com/learning/finance-courses-certification-training-ct133?fftid=naukri_gnb">Finance
                                        Courses</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Free Resume Resources
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-group">
                                    <li className="list-group-item"><a href="https://www.firstnaukri.com/resume-maker?utm_campaign=gnb&utm_source=naukri&utm_medium=desktop">Resume maker for fresher</a></li>
                                    <li className="list-group-item"><a href="https://resume.naukri.com/resume-quality-score?fftid=101003">Resume Quality Score</a></li>
                                    <li className="list-group-item"><a href="https://resume.naukri.com/resume-samples?fftid=101004">Resume Samples</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}