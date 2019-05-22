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
                <h2>About Me</h2>
                <p>
                I'm Daenerys Stomborn, one of the last two surviving members (along with My older brother, Viserys) of the House Targaryen.
                I had forced to marry Dothraki horselord Khal Drogo in exchange for an army for Viserys, who is to return to Westeros and 
                recapture the Iron Throne. My brother loses the ability to control me as Khaleesi that find myself adapting to life with the
                khalasar and emerges as strong, confident and courageous. I become the heir of the Targaryen dynasty after My brother
                death and plans to reclaim the Iron Throne Myself, seeing it as My birthright. I lose My husband and child, 
                but soon helps hatch three dragons from their eggs, which regard myself as their mother, providing myself with a tactical advantage and prestige. 
                Over time, I'm struggles to maintain control of my dragons
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