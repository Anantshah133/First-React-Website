import { Component } from "react";
import Slider from "react-slick";
import BlogContent from "./blog-content";

const PostList = BlogContent.slice(0 , 6);
class BlogSlider extends Component {
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
                {/* <div>
                    <div className="blog blog-style-1"></div>
                </div>
                <div>
                    <div className="blog blog-style-1"></div>
                </div>
                <div>
                    <div className="blog blog-style-1"></div>
                </div>
                <div>
                    <div className="blog blog-style-1"></div>
                </div>
                <div>
                    <div className="blog blog-style-1"></div>
                </div>
                <div>
                    <div className="blog blog-style-1"></div>
                </div> */}
                {PostList.map((value, i) => (
                    <div key={i}>
                        <div className="blog blog-style-1">
                            <div className="thumbnail">
                                <a href="index.html">
                                    <img className="w-100" src={`https://trydo.rainbowit.net/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images" />
                                </a>
                            </div>
                            <div className="content">
                                <p className="blogtype">{value.category}</p>
                                <h4 className="title"><a href="index.html">{value.title}</a></h4>
                                <div className="blog-btn">
                                    <a className="rn-btn text-white" href="index.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        )
    }
}
export default BlogSlider;