import React from "react";
import HeavyIndustry from "./HeavyIndustry";
import Transportation from "./Transportation";
import HealthCare from "./HealthCare";
import Manufacturing from "./Manufacturing";

const WhatWeOffer = () => {
  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  return (
    <>
      <div className="industries-area industries-area-four pb-100">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Our Expertise</span>
            <h2>Industries We Transform</h2>
            <p>
              We specialize in delivering impactful solutions across various sectors, leveraging advanced technology to drive success and growth.
            </p>
          </div>

          <div className="tab industries-list-tab">
            <div className="row align-items-center">
              <div className="col-lg-3">
                {/* Tabs navs */}
                <ul className="tabs">
                  <li
                    className="current"
                    onClick={(e) => openTabSection(e, "tab1")}
                  >
                    <span>
                      <i className="flaticon-machine-learning"></i>
                      <h3>Heavy Industry</h3>
                      <p>Innovative solutions for large-scale industries</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab2")}>
                    <span>
                      <i className="flaticon-artificial-intelligence"></i>
                      <h3>Transportation</h3>
                      <p>Revolutionizing logistics and mobility</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab3")}>
                    <span>
                      <i className="flaticon-health"></i>
                      <h3>Health Care</h3>
                      <p>Transforming patient care and medical services</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab4")}>
                    <span>
                      <i className="flaticon-automation"></i>
                      <h3>Manufacturing</h3>
                      <p>Enhancing productivity and efficiency</p>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-9">
                <div className="tab_content">
                  {/* Tab item #1 */}
                  <div id="tab1" className="tabs_item">
                    <HeavyIndustry />
                  </div>

                  {/* Tab item #2 */}
                  <div id="tab2" className="tabs_item">
                    <Transportation />
                  </div>

                  {/* Tab item #3 */}
                  <div id="tab3" className="tabs_item">
                    <HealthCare />
                  </div>

                  {/* Tab item #4 */}
                  <div id="tab4" className="tabs_item">
                    <Manufacturing />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
