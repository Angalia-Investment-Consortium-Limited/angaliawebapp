import { useState } from "react"
import single4 from "../../assets/images/resource/single-service-4.jpg"

export default function ServiceTabs1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>01. Expertise 
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                                02. Customized Solutions
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                                03. Efficiency
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                                04. Compliance
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            {/* <h4>Workflow and <br />our successive work process</h4> */}
                            <div className="text">Our team comprises seasoned professionals with extensive industry experience.</div>
                            {/* <img src={single4} alt="" /> */}
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            {/* <h4>Workflow and <br />our successive work process</h4> */}
                            <div className="text">We tailor our services to meet the unique needs and objectives of each client.</div>
                            {/* <img src={single4} alt="" /> */}
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            {/* <h4>Workflow and <br />our successive work process</h4> */}
                            <div className="text">AICL streamlines financial processes, reducing overhead costs and improving operational efficiency.</div>
                            {/* <img src={single4} alt="" /> */}
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            {/* <h4>Workflow and <br />our successive work process</h4> */}
                            <div className="text">We ensure strict adherence to regulatory requirements and accounting standards.</div>
                            {/* <img src={single4} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
