import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import pinne from '../images/pinne.png'
import card1 from '../images/card1.webp'
import card2 from '../images/card2.webp'
import card3 from '../images/card3.webp'
import card4 from '../images/card4.webp'
import card5 from '../images/card5.webp'
import card6 from '../images/card6.webp'
import card7 from '../images/card7.webp'
import card8 from '../images/card8.webp'
import card9 from '../images/blog2.webp'
import card10 from '../images/blog3.webp'
import card11 from '../images/blog4.webp'
import card12 from '../images/blog5.webp'
import card13 from '../images/blog6.webp'
import card14  from '../images/blog7.webp'
import card15 from '../images/blog8.webp'
import card16 from '../images/blog9.webp'
import card17 from '../images/card9.webp'
import card18 from '../images/card1.webp'
import card19 from '../images/card2.webp'
import card20 from '../images/card3.webp'

import bookmark from '../images/bookmark.svg'
const BlogCard = () => {
  return (
    <section className='blogCard'>
        <Container>
            <Row>
                <Col md = '12'>
                    
                <article class="headings">
                    <h1 class="blog-heading">Explore Places, Restaurants &amp; Events Around You</h1>
                    <h2 class="blog-subheading">We've got it all covered for you </h2>
		        </article>
                </Col>

                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card1} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card2} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card3} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card4} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card5} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card6} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card7} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card8} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card9} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card10} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card11} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card12} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card13} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card14} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card15} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card16} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card17} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card18} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card19} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md = '4'>
                    <div className="card_wrapper">
                            <a className='pin-holder'>
                                <img src = {pinne} className='img-fluid w-100' />    
                            </a>
                        <div className="image_holder">
                            <img src = {card20} className='img-fluid w-100'/>
                        </div>
                        <div className="card_details">
                        <h6 className="category"><a>Entertainment</a></h6>
                        <a className='detail_holder'>
                            <h2 className="blog-title">10 Best Korean Series On Netflix That You Need To </h2>
                            <h4 className='blog-description'>If you have a Netflix subscription, here's our list of the  Best Korean Series on Netflix. From thriller to romantic they are the best Korean Series You should put on your bucket list.</h4>
                        </a>
                        <div className="tags">
                            <h3 className="tag-holder">
                                <a>Mystery</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Netflix</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Comedy</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Crime</a>
                            </h3>
                            <h3 className="tag-holder">
                                <a>Drama</a>
                            </h3>
                        </div>
                        <p className="date">
                            598 views. 4 min read
                        </p>
                        <div className="bookmark-button">
                            <div className="bookmark">
                                <img src = {bookmark} className='img-fluid w-100' />
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default BlogCard
