import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, Button,Container,Row,Col} from 'react-bootstrap';
import Egg from '../image/sevenKingdom.jpg';

const styles = {
  root:{
    flexGrow: 1,
    padding: 20,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class Portofolio extends React.Component{
    render(){
        return (    
            <section id="portfolio">
            <div className="row cs">
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Works.</h1>
                {/* portfolio-wrapper */}
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-01" title>
                        <img alt src="images/modals/egg.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Dragon Egg</h5>
                            <p>Marriage Gift</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-02" title>
                        <img alt src="images/modals/boy.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Little Khal</h5>
                            <p>Baby Shower</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-03" title>
                        <img alt src="images/modals/drogon.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Drogon The Dragon</h5>
                            <p>Dragons</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-04" title>
                        <img alt src="images/modals/dracarys.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Burn Down Night King</h5>
                            <p>Long Night</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-05" title>
                        <img alt src="images/modals/sansa.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Lady Of Winterfell</h5>
                            <p>Jon's Sister</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-06" title>
                        <img alt src="images/modals/ashes.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Queen Of Westeros</h5>
                            <p>Iron Throne</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-07" title>
                        <img alt src="images/modals/burn.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Burn City Down</h5>
                            <p>Kings Landing</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-08" title>
                        <img alt src="images/modals/king.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Queen King</h5>
                            <p>Targaryen Blood</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div>  {/* item end */}
                </div> {/* portfolio-wrapper end */}
              </div> {/* twelve columns end */}
              {/* Modal Popup
              --------------------------------------------------------------- */}
              <div id="modal-01" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/egg.png" alt />
                <div className="description-box">
                  <h4>Precious Children</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                </div>
                <div className="link-box">
                  <a href="#">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-01 End */}
              <div id="modal-02" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/boy.png" alt />
                <div className="description-box">
                  <h4>True Heir</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                </div>
                <div className="link-box">
                  <a href="#">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-02 End */}
              <div id="modal-03" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/drogon.png" alt />
                <div className="description-box">
                  <h4>Beloved Dragon</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Branding</span>
                </div>
                <div className="link-box">
                  <a href="#">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-03 End */}
              <div id="modal-04" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/dracarys.png" alt />
                <div className="description-box">
                  <h4>Burn Down Night King</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Photography</span>
                </div>
                <div className="link-box">
                  <a href="#">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-04 End */}
              <div id="modal-05" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/sansa.png" alt />
                <div className="description-box">
                  <h4>Nephew Sister</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                </div>
                <div className="link-box">
                  <a href="#">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-05 End */}
              <div id="modal-06" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/ashes.png" alt />
                <div className="description-box">
                  <h4>Queen Of Westeros</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Photography</span>
                </div>
                <div className="link-box">
                  <a href="#">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-06 End */}
              <div id="modal-07" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/burn.png" alt />
                <div className="description-box">
                  <h4>Burn The Innocent</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
                </div>
                <div className="link-box">
                  <a href="#">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-07 End */}
              <div id="modal-08" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/king.png" alt />
                <div className="description-box">
                  <h4>My Love, Jon</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
                </div>
                <div className="link-box">
                  <a href="#">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-01 End */}
            </div> {/* row End */}
          </section>
        );
    }
  
}
export default withStyles(styles)(Portofolio);
