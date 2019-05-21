import React from 'react';
import Profile from '../image/Dany.jpg';

class Contact extends React.Component{
    render(){
        return(
            <section id="about">
            <div className="row">
              <div className="three columns">
                <img className="profile-pic" src={Profile} alt />
              </div>
              <div className="nine columns main-col">
                <h2>About Daenerys</h2>
                <p>
                Queen Daenerys is one of the last two surviving members (along with her older brother, Viserys) of the House Targaryen.
                She is forced to marry Dothraki horselord Khal Drogo in exchange for an army for Viserys, who is to return to Westeros and 
                recapture the Iron Throne. Her brother loses the ability to control her as Daenerys finds herself adapting to life with the
                khalasar and emerges as strong, confident and courageous. She becomes the heir of the Targaryen dynasty after her brother's 
                death and plans to reclaim the Iron Throne herself, seeing it as her birthright. A pregnant Daenerys loses her husband and child, 
                but soon helps hatch three dragons from their eggs, which regard her as their mother, providing her with a tactical advantage and prestige. 
                Over time, she struggles to maintain control of her dragons
                </p>
                <div className="row">
                  <div className="columns contact-details">
                  <br/>
                    <h2>Send A Raven To</h2>
                    <p className="address">
                      <span>Storm Island,</span><br />
                        Cross The Narrow Sea, 
                      <span>
                        Mountain View, Westeros
                      </span><br />
                      <span>(909)456-7890</span><br />
                      <span>Dany@Thrones.com</span>
                    </p>
                  </div>
                </div> {/* end row */}
              </div> {/* end .main-col */}
            </div>
          </section>
        )
    }
}
export default Contact;