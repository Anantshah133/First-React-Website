import React from "react"
import CountUp from "react-countup";

export default function CounterSection() {
    return (
        <div className="rn-counterup-area ptb-120 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h3 class="fw-500">Our Fun Facts</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="counterup-style-1 col-lg-4 col-sm-6 col-12">
                        <CountUp start={0} end={199} duration={3} separator="," className="counter">
                            {({ countUpRef }) => (
                                <h5 className="counter" ref={countUpRef}>&nbsp;</h5>
                            )}
                        </CountUp>
                        <p class="description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                    <div className="counterup-style-1 col-lg-4 col-sm-6 col-12">
                        <CountUp start={0} end={575} duration={3} separator="," className="counter">
                            {({ countUpRef }) => (
                                <h5 className="counter" ref={countUpRef}>&nbsp;</h5>
                            )}
                        </CountUp>
                        <p class="description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                    <div className="counterup-style-1 col-lg-4 col-sm-6 col-12">
                        <CountUp start={0} end={69} duration={3} separator="," className="counter">
                            {({ countUpRef }) => (
                                <h5 className="counter" ref={countUpRef}>&nbsp;</h5>
                            )}
                        </CountUp>
                        <p class="description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}