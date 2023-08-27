import BlogSlider from "./blog-slider";

export default function Blogs() {
    return (
        <div className="rn-blog-area ptb-120 bg-color-5">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <h2>Latest News</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-55">
                    <div className="col-lg-12">
                        <BlogSlider />                        
                    </div>
                </div>
            </div>
        </div>
    )
}