import React from 'react';
import Profile from '../image/Dany.jpg';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody,ModalFooter } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import Ig from '../image/icon/instagram.png';
import Dragon from '../image/icon/dragon.png';
import Twitter from '../image/icon/twitter.png';
class Contact extends React.Component{
    render(){
        return(
            <section id="about">
            <div className="row">
              <div className="three columns">
                <img className="profile-pic" src={Profile} />
              </div>
              <div className="nine columns main-col">
                <div className="about-dany">
                Hi! I'm Daenerys Stomborn, one of the last two surviving members (along with My older brother, Viserys) of the House Targaryen.
                I had forced to marry Dothraki horselord Khal Drogo in exchange for an army for Viserys, who is to return to Westeros and 
                recapture the Iron Throne. My brother loses the ability to control me as Khaleesi that find myself adapting to life with the
                khalasar and emerges as strong, confident and courageous. I become the heir of the Targaryen dynasty after My brother
                death and plans to reclaim the Iron Throne Myself, seeing it as My birthright. 
                </div>
              </div> {/* end .main-col */}
            </div>

            <Grid container spacing={12}>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={2}>
                    <Button className="square">
                      <img src={Dragon}></img>
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button className="square">
                      <img src={Twitter}></img>
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button className="square">
                      <img src={Ig}></img>
                    </Button>
                  </Grid>
                  <Grid item xs={3}></Grid>
                </Grid>
                <div className="twelve columns main-col">
                  <h2>Bend A Knee to</h2>
                  <br/>
                  <h3 className="storm">
                    Stormlands, Across the Narrow Sea, Westeros
                  </h3>
                </div>
          </section>
        )
    }
}
export default Contact;