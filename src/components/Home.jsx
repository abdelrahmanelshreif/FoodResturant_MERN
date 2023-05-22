import React, { Fragment } from 'react'
// import Header from './Header'
import'./Home.css'
import pride from './../imgs/4.png'
// import Product from './Product'
const Home = () => {
  return (
      <Fragment>
        <header>
          <div className='hero'>
            <div class="card bg-dark text-white border-0">
              <img src="/assets/images/home/3.jpg" class="card-img" alt='' height="550px"/>
              <div class="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container'>
                  <h5 class="card-title display-2 fw-bolder mb-0" > NEW DISHES ARE HERE</h5>
                  <p class="card-text lead fs-2"> CHECK OUT ALL FOODS</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <hr className="my-4" />
        <section className='numbers'>
            <div className='contianer'>
              <div className='row'>
                <div className='col-md-3'>
                  <h2>1285+</h2>
                  <h6>PHOTOS</h6>
                </div>
                <div className='col-md-3'>
                  <h2>4568+</h2>
                  <h6>SAVING</h6>
                </div>
                <div className='col-md-3'>
                  <h2>1756+</h2>
                  <h6>ROCKETS</h6>
                </div>
                <div className='col-md-3'>
                  <h2>2651+</h2>
                  <h6>GLOBES</h6>
                </div>
              </div>
            </div>
        </section>
        <section className='pride'>
          <div className='contianer'>
            <div className='row'>
              <div className='col-md-6'>
                <img src={pride} title='pride' alt='pride'/>
              </div>
              <div className='col-md-6'>
                <h2>We pride ourselves on making real food from the best ingredients</h2>
                <p>The most common way restaurants drive repeat business using phone numbers is by sending time-sensitive promotions that often lead to immediate sales. </p>
                </div>
            </div>
          </div>
        </section>
        <hr className="my-4" />
        <div class="video-action">
            <div class="row text-center">
                <h1>When a man's stomach is full it makes no <br></br> difference whether he is rich or poor.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br></br>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                {/* <a href="https://www.youtube.com/watch?v=bZx8rPd-PKQ" class="swipebox-video">
                    <div class="intro-video-pop">
                        <i class="fa fa-play"></i> Watch Our Story
                    </div>
                </a> */}
            </div>
        </div>
        <hr className="my-4" />
        <div class="container" id="faq">
            <div class="about-inline text-center">
                <h3>Frequently Asked Questions </h3>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> Is Foodera Bread really baked fresh each day?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> Do you bake breads containing animal fats or products?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> Can I order your products online?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> When are you opening a shop near me?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
            </div>
            <div class="space100"></div>            
        </div>
        <hr className="my-4" />
        {/* <!-- Testimonials --> */}
        <div id="reviews" class="testimonials-color">
            <div class="container">
                <div class="About-inline text-center">
                    <h3>Testimonials </h3>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="quote2">
                            <div>
                                <img src="/assets/images/home/tel.jpg" alt="" />
                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                                <span class="author">Simab Dave - Web Designer</span>
                            </div>
                            <div>
                                <img src="/assets/images/home/tel2.jpg" alt="" />
                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                                <span class="author">Johnthan Doe - UX Designer</span>
                            </div>
                            <div>
                                <img src="/assets/images/home/tel.jpg" alt="" />
                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
                                <span class="author">Maccy Doe - Front End</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space100"></div>
            </div>
        </div>
        <hr className="my-4" />
      </Fragment>
  )
}

export default Home 