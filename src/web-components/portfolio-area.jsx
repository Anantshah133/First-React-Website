import SimpleSlider from "./slider"
export default function PortfolioArea() {
    return(
        <>
        <div className="portfolio-area ptb-120 bg-color-5">
            <div className="rn-slick-dot">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title mb-15 text-left service-style-3">
                                <h2 class="title">Our Portfolio</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <SimpleSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}