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
            <h1>Check Out Some of My Works.</h1>
            <div className="row cs">
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <Card>
                      <Card.Img variant="top" src="images/modals/dragonEggs.jpg"/>
                      <Card.Body>
                        <Card.Title>
                          A Gift From Valyria
                        </Card.Title>
                        <Card.Text>
                          Gift From Ilyrio,Dragon Eggs that turns into rock after hundred of years.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="columns portofolio-item">
                  <div className="item-wrap">
                  <Card>
                      <Card.Img variant="top" src="images/modals/boy.png"/>
                      <Card.Body>
                        <Card.Title>
                          Little Khal
                        </Card.Title>
                        <Card.Text>
                          Never Let A witch to live among you, or a curse will dance with a fire
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>

                <div className="columns portofolio-item">
                  <div className="item-wrap">
                  <Card>
                      <Card.Img variant="top" src="images/modals/drogon.png"/>
                      <Card.Body>
                        <Card.Title>
                          Unburn
                        </Card.Title>
                        <Card.Text>
                          Little Dragons cracking the egg by the fire from R'llhor to burn the traitor
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="columns portofolio-item">
                  <div className="item-wrap">
                  <Card>
                      <Card.Img variant="top" src="images/modals/dracarys.png"/>
                      <Card.Body>
                        <Card.Title>
                          A song of Fire and Ice
                        </Card.Title>
                        <Card.Text>
                          Dragon breath never burn true cold, only steel from the story 
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="columns portofolio-item">
                  <div className="item-wrap">
                  <Card>
                      <Card.Img variant="top" src="images/modals/sansa.png"/>
                      <Card.Body>
                        <Card.Title>
                          North Remembers
                        </Card.Title>
                        <Card.Text>
                          A Northener Lady never bend a knee to a foreigner
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="columns portofolio-item">
                  <div className="item-wrap">
                  <Card>
                      <Card.Img variant="top" src="images/modals/burn.png"/>
                      <Card.Body>
                        <Card.Title>
                          Bell
                        </Card.Title>
                        <Card.Text>
                          Don't let the innocent makes weakness stronger
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="columns portofolio-item">
                  <div className="item-wrap">
                  <Card>
                      <Card.Img variant="top" src="images/modals/ashes.png"/>
                      <Card.Body>
                        <Card.Title>
                          Queen of Ashes
                        </Card.Title>
                        <Card.Text>
                          Ashes and snow is sign for a victory
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="columns portofolio-item">
                  <div className="item-wrap">
                  <Card>
                      <Card.Img variant="top" src="images/modals/king.png"/>
                      <Card.Body>
                        <Card.Title>
                          Love
                        </Card.Title>
                        <Card.Text>
                          Truth never let love fading, killing is the best words
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
  
}
export default withStyles(styles)(Portofolio);

