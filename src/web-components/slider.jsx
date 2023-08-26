import { Component } from "react";
import Slider from "react-slick";
class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <Slider {...settings}>
                <div>
                    <div className="portfolio">
                        <div className="thumbnail-inner">
                            <div className="thumbnail image-1"></div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <p>Development</p>
                                <h4>Getting tickets to the big show</h4>
                                <div className="portfolio-button">
                                    <a href="index.html" className="rn-btn">Case Study</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="portfolio">
                        <div className="thumbnail-inner">
                            <div className="thumbnail image-2"></div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <p>Development</p>
                                <h4>Getting tickets to the big show</h4>
                                <div className="portfolio-button">
                                    <a href="index.html" className="rn-btn">Case Study</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="portfolio">
                        <div className="thumbnail-inner">
                            <div className="thumbnail image-3"></div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <p>Development</p>
                                <h4>Getting tickets to the big show</h4>
                                <div className="portfolio-button">
                                    <a href="index.html" className="rn-btn">Case Study</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="portfolio">
                        <div className="thumbnail-inner">
                            <div className="thumbnail image-4"></div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <p>Development</p>
                                <h4>Getting tickets to the big show</h4>
                                <div className="portfolio-button">
                                    <a href="index.html" className="rn-btn">Case Study</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="portfolio">
                        <div className="thumbnail-inner">
                            <div className="thumbnail image-5"></div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <p>Development</p>
                                <h4>Getting tickets to the big show</h4>
                                <div className="portfolio-button">
                                    <a href="index.html" className="rn-btn">Case Study</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="portfolio">
                        <div className="thumbnail-inner">
                            <div className="thumbnail image-6"></div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <p>Development</p>
                                <h4>Getting tickets to the big show</h4>
                                <div className="portfolio-button">
                                    <a href="index.html" className="rn-btn">Case Study</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}
export default SimpleSlider;