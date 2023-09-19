import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const ClarifionUpsell = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="clarifion-upsell">
      <div
        className="div"
        style={{
          height: screenWidth < 1500 ? "1519px" : screenWidth >= 1500 ? "1379px" : undefined,
          width: screenWidth < 1500 ? "360px" : screenWidth >= 1500 ? "1500px" : undefined,
        }}
      >
        {screenWidth < 1500 && (
          <>
            <div className="frame">
              <div className="frame-2">
                <img
                  className="layer"
                  alt="Layer"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/layer-1.svg"
                />
                <div className="element">
                  <img
                    className="img"
                    alt="Fluent checkmark"
                    src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/fluent-checkmark-starburst-20-regular-1.svg"
                  />
                  <div className="text-wrapper">30-day Satisfaction Guarantee</div>
                </div>
                <img
                  className="layer"
                  alt="Layer"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/layer-1-1.svg"
                />
              </div>
              <div className="frame-3">
                <img
                  className="img-2"
                  alt="Img"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/600a41c73b670a97ae1d4f47-clarifion-logo-1.png"
                />
                <img
                  className="frame-4"
                  alt="Frame"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/frame-1484578056-1.svg"
                />
              </div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <p className="wait-your-order-in">Wait ! Your Order In Progress.</p>
                <p className="lorem-ipsum-dolor">Lorem Ipsum Dolor Sit Amet, Consectetur</p>
              </div>
              <div className="frame-3">
                <div className="frame-7">
                  <div className="group">
                    <img
                      className="tick-circle"
                      alt="Tick circle"
                      src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/tick-circle-5.svg"
                    />
                  </div>
                  <div className="text-wrapper-2">Cart Review</div>
                </div>
                <div className="frame-7">
                  <div className="group">
                    <img
                      className="tick-circle"
                      alt="Tick circle"
                      src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/tick-circle-6.svg"
                    />
                  </div>
                  <div className="text-wrapper-2">Checkout</div>
                </div>
                <div className="frame-7">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <div className="text-wrapper-3">3</div>
                    </div>
                  </div>
                  <div className="text-wrapper-4">Special Offer</div>
                </div>
                <div className="frame-7">
                  <div className="overlap-group-wrapper">
                    <div className="div-wrapper">
                      <div className="text-wrapper-5">4</div>
                    </div>
                  </div>
                  <div className="text-wrapper-2">Confirmation</div>
                </div>
              </div>
              <div className="frame-8">
                <p className="ONE-TIME-ONLY">
                  <span className="span">ONE TIME ONLY</span>
                  <span className="text-wrapper-6"> special price for 6 extra Clarifion for only </span>
                  <span className="span">$14 each</span>
                  <span className="text-wrapper-6"> ($84.00 total!)</span>
                </p>
                <img
                  className="image"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/image-4-1@4x.png"
                />
                <div className="frame-9">
                  <div className="frame-10">
                    <div className="group-2" />
                    <div className="frame-11">
                      <div className="frame-12">
                        <div className="text-wrapper-7">Clarifion Air Ionizer</div>
                        <div className="frame-13">
                          <div className="text-wrapper-8">$180</div>
                          <div className="text-wrapper-9">$84</div>
                        </div>
                      </div>
                      <img
                        className="stars"
                        alt="Stars"
                        src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/stars-2@2x.png"
                      />
                      <div className="frame-14">
                        <div className="ellipse-wrapper">
                          <div className="ellipse" />
                        </div>
                        <div className="text-wrapper-10">12 left in Stock</div>
                      </div>
                    </div>
                  </div>
                  <p className="p">
                    Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a
                    simple.
                  </p>
                </div>
                <div className="frame-9">
                  <div className="frame-15">
                    <img
                      className="img-3"
                      alt="Tick circle"
                      src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/tick-circle-7.svg"
                    />
                    <p className="div-2">
                      <span className="text-wrapper-11">Negative Ion Technology may</span>
                      <span className="text-wrapper-12"> help with allergens</span>
                    </p>
                  </div>
                  <div className="frame-15">
                    <img
                      className="img-3"
                      alt="Tick circle"
                      src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/tick-circle-7.svg"
                    />
                    <p className="div-2">
                      <span className="text-wrapper-11">Designed for</span>
                      <span className="text-wrapper-12"> air rejuvenation</span>
                    </p>
                  </div>
                  <div className="frame-15">
                    <img
                      className="img-3"
                      alt="Tick circle"
                      src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/tick-circle-7.svg"
                    />
                    <p className="div-2">
                      <span className="text-wrapper-12">Perfect for every room</span>
                      <span className="text-wrapper-11"> in all types of places.</span>
                    </p>
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="frame-16">
                    <div className="percent-wrapper">
                      <img
                        className="percent"
                        alt="Percent"
                        src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/percent-1@2x.png"
                      />
                    </div>
                    <p className="save-and-get">
                      <span className="text-wrapper-6">Save </span>
                      <span className="span">53%</span>
                      <span className="text-wrapper-6"> and get </span>
                      <span className="span">6 extra Clarifision</span>
                      <span className="text-wrapper-6"> for only </span>
                      <span className="span">$14 Each</span>
                      <span className="text-wrapper-6">.</span>
                    </p>
                  </div>
                </div>
                <div className="frame-17">
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="frame-19">
                        <p className="yes-claim-my">YES - CLAIM MY DISCOUNT</p>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/line-1-1.svg"
                        />
                      </div>
                    </div>
                    <div className="frame-20">
                      <div className="frame-21">
                        <div className="free-shipping">Free Shipping</div>
                        <img
                          className="line-2"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/line-2-2.svg"
                        />
                        <div className="frame-22">
                          <img
                            className="lock"
                            alt="Lock"
                            src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/lock--7--1-2.svg"
                          />
                          <div className="secure-bit-SSL">Secure 256-bit Ssl Encryption</div>
                        </div>
                      </div>
                      <img
                        className="line-3"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/line-3-1.svg"
                      />
                      <img
                        className="frame-4"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/frame-1000001777-1.svg"
                      />
                    </div>
                  </div>
                  <p className="no-thanks-i-don-t">NO THANKS, I DON’T WANT THIS.</p>
                </div>
                <div className="frame-23">
                  <img
                    className="img-4"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/image-6@2x.png"
                  />
                  <p className="if-you-are-not">
                    <span className="text-wrapper-13">
                      If you are not completely thrilled with your Clarifion - We have a{" "}
                    </span>
                    <span className="text-wrapper-12">30 day satisfaction guarantee</span>
                    <span className="text-wrapper-13">
                      . Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="frame-24">
              <div className="frame-25">
                <div className="text-wrapper-14">Copyright (c) 2023</div>
                <img
                  className="line-2"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/line-2-3.svg"
                />
                <div className="text-wrapper-14">clarifionsupport@clarifion.com</div>
              </div>
              <div className="frame-14">
                <img
                  className="lock-2"
                  alt="Lock"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/lock--7--1-3.svg"
                />
                <div className="secure-bit-SSL-2">Secure 256-bit Ssl Encryption.</div>
              </div>
            </div>
          </>
        )}

        {screenWidth >= 1500 && (
          <>
            <div className="USPS">
              <div className="element-2">
                <img
                  className="img"
                  alt="Fluent checkmark"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/fluent-checkmark-starburst-20-regular.svg"
                />
                <div className="text-wrapper">30-day Satisfaction Guarantee</div>
              </div>
              <div className="element-3">
                <img
                  className="img"
                  alt="Ph truck light"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/ph-truck-light.svg"
                />
                <p className="text-wrapper">FREE DELIVERY ON ORDERS OVER $40.00</p>
              </div>
              <div className="element-4">
                <img
                  className="img"
                  alt="Mdi cards heart"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/mdi-cards-heart-outline.svg"
                />
                <div className="text-wrapper">50.000+ Happy Customers</div>
              </div>
              <div className="element-5">
                <img
                  className="img"
                  alt="Fluent arrow sync"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/fluent-arrow-sync-checkmark-20-regular.svg"
                />
                <div className="text-wrapper">100% MONEY BACK GUARANTEE</div>
              </div>
            </div>
            <div className="overlap">
              <div className="frame-26">
                <img
                  className="img-5"
                  alt="Img"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/600a41c73b670a97ae1d4f47-clarifion-logo-1.png"
                />
                <img
                  className="frame-4"
                  alt="Frame"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/frame-1484578056.svg"
                />
              </div>
              <div className="frame-27">
                <p className="wait-your-order-in-2">Wait ! Your Order In Progress.</p>
                <p className="lorem-ipsum-dolor-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</p>
              </div>
            </div>
            <div className="frame-28">
              <img
                className="image-2"
                alt="Image"
                src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/image-4@4x.png"
              />
              <div className="frame-29">
                <p className="ONE-TIME-ONLY-2">
                  <span className="span">ONE TIME ONLY</span>
                  <span className="text-wrapper-6"> special price for 6 extra Clarifion for only </span>
                  <span className="span">$14 each</span>
                  <span className="text-wrapper-6"> ($84.00 total!)</span>
                </p>
                <div className="frame-30">
                  <div className="group-3" />
                  <div className="frame-31">
                    <div className="frame-12">
                      <div className="text-wrapper-15">Clarifion Air Ionizer</div>
                      <div className="frame-32">
                        <div className="text-wrapper-16">$180</div>
                        <div className="text-wrapper-17">$84</div>
                      </div>
                    </div>
                    <img
                      className="stars-2"
                      alt="Stars"
                      src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/stars@2x.png"
                    />
                    <div className="frame-14">
                      <div className="group-4">
                        <div className="ellipse-2" />
                      </div>
                      <div className="text-wrapper-18">12 left in Stock</div>
                    </div>
                    <p className="text-wrapper-19">
                      Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a
                      simple.
                    </p>
                  </div>
                </div>
                <div className="frame-9">
                  <div className="frame-15">
                    <img
                      className="tick-circle-2"
                      alt="Tick circle"
                      src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/tick-circle.svg"
                    />
                    <p className="negative-ion">
                      <span className="text-wrapper-20">Negative Ion Technology may</span>
                      <span className="text-wrapper-12"> help with allergens</span>
                    </p>
                  </div>
                  <div className="frame-15">
                    <img
                      className="tick-circle-2"
                      alt="Tick circle"
                      src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/tick-circle.svg"
                    />
                    <p className="div-3">
                      <span className="text-wrapper-20">Designed for</span>
                      <span className="text-wrapper-12"> air rejuvenation</span>
                    </p>
                  </div>
                  <div className="frame-15">
                    <img
                      className="tick-circle-2"
                      alt="Tick circle"
                      src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/tick-circle.svg"
                    />
                    <p className="div-3">
                      <span className="text-wrapper-12">Perfect for every room</span>
                      <span className="text-wrapper-20"> in all types of places.</span>
                    </p>
                  </div>
                </div>
                <div className="frame-33">
                  <div className="frame-14">
                    <div className="img-wrapper">
                      <img
                        className="percent-2"
                        alt="Percent"
                        src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/percent@2x.png"
                      />
                    </div>
                    <p className="save-and-get-2">
                      <span className="text-wrapper-6">Save </span>
                      <span className="span">53%</span>
                      <span className="text-wrapper-6"> and get </span>
                      <span className="span">6 extra Clarifision</span>
                      <span className="text-wrapper-6"> for only </span>
                      <span className="span">$14 Each</span>
                      <span className="text-wrapper-6">.</span>
                    </p>
                  </div>
                </div>
                <div className="frame-34">
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="frame-35">
                        <p className="yes-claim-my-2">YES - CLAIM MY DISCOUNT</p>
                        <img
                          className="line-4"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/line-1.svg"
                        />
                      </div>
                    </div>
                    <div className="frame-36">
                      <div className="free-shipping-2">Free Shipping</div>
                      <img
                        className="line-5"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/line-2.svg"
                      />
                      <div className="frame-37">
                        <img
                          className="lock"
                          alt="Lock"
                          src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/lock--7--1.svg"
                        />
                        <div className="secure-bit-SSL">Secure 256-bit Ssl Encryption.</div>
                      </div>
                      <img
                        className="line-5"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/line-2.svg"
                      />
                      <img
                        className="frame-38"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/frame-1000001777.svg"
                      />
                    </div>
                  </div>
                  <p className="no-thanks-i-don-t-2">NO THANKS, I DON’T WANT THIS.</p>
                </div>
                <div className="frame-14">
                  <img
                    className="image-3"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/image-6@2x.png"
                  />
                  <p className="if-you-are-not-2">
                    <span className="text-wrapper-21">
                      If you are not completely thrilled with your Clarifion - We have a{" "}
                    </span>
                    <span className="text-wrapper-12">30 day satisfaction guarantee</span>
                    <span className="text-wrapper-21">
                      . Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                    </span>
                  </p>
                </div>
              </div>
              <div className="frame-39">
                <div className="frame-40">
                  <img
                    className="img-4"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/rectangle-1127@2x.png"
                  />
                  <div className="name">
                    <img
                      className="stars-3"
                      alt="Stars"
                      src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/stars-1@2x.png"
                    />
                    <div className="frame-41">
                      <div className="text-wrapper-22">Ken T.</div>
                      <div className="verify">
                        <div className="text-wrapper-23">Verified Customer</div>
                        <img
                          className="verify-2"
                          alt="Verify"
                          src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/verify-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-wrapper-24">
                  “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I
                  went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better.
                  Wonderful.”
                </p>
              </div>
            </div>
            <div className="frame-42">
              <div className="frame-43">
                <div className="text-wrapper-25">Copyright (c) 2023</div>
                <img
                  className="line-6"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/line-2-1.svg"
                />
                <div className="text-wrapper-25">clarifionsupport@clarifion.com</div>
              </div>
              <div className="frame-44">
                <img
                  className="img-3"
                  alt="Lock"
                  src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/lock--7--1-1.svg"
                />
                <div className="secure-bit-SSL-3">Secure 256-bit Ssl Encryption.</div>
              </div>
            </div>
            <div className="frame-45">
              <div className="frame-46">
                <div className="tick-circle-wrapper">
                  <img
                    className="tick-circle-3"
                    alt="Tick circle"
                    src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/tick-circle-3.svg"
                  />
                </div>
                <p className="text-wrapper-26">Step 1 : Cart Review</p>
              </div>
              <div className="frame-46">
                <div className="tick-circle-wrapper">
                  <img
                    className="tick-circle-3"
                    alt="Tick circle"
                    src="https://cdn.animaapp.com/projects/6509bb4a44f086421d10f9d5/releases/6509bb5a465e275981b5f8b0/img/tick-circle-4.svg"
                  />
                </div>
                <div className="text-wrapper-26">Step 2 : Checkout</div>
              </div>
              <div className="frame-46">
                <div className="group-5">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-27">3</div>
                  </div>
                </div>
                <p className="text-wrapper-28">Step 3 : Special Offer</p>
              </div>
              <div className="frame-46">
                <div className="group-5">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-29">4</div>
                  </div>
                </div>
                <div className="text-wrapper-26">Step 4 : Confirmation</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
