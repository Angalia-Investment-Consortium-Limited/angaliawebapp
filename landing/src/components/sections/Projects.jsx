import  { lazy } from 'react';
import { Link } from 'react-router-dom'

const PortfolioFilter5 = lazy(() => import('../elements/PortfolioFilters5'))

export default function Projects() {
    return (
        <>
            <section className="projects-section-three">
                <div className="auto-container">
                    <div className="sec-title style-four text-center">
                        <h2>Our projects make uniqueness <br /> from others</h2>
                        <span className="text-decoration-three" />
                    </div>
                   <PortfolioFilter5/>
                    <div className="bottom-text">We've been working hard to impress you. <Link to="#">Start your’s today <i className="fa fa-caret-right" /></Link></div>
                </div>
            </section>
        </>
    )
}