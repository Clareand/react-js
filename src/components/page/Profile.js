import React from 'react';

class Profile extends React.Component{
    render(){
        return(
            <section id="resume">
            {/* Education
          ----------------------------------------------- */}
            <div className="row education">
              <div className="three columns header-col">
                <h1><span>Education</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Dothraki Khalasar</h3>
                    <p className="info">Master in Dothraki Languange <span>•</span> <em className="date">816 BC</em></p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                    </p>
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Slaver's Bay</h3>
                    <p className="info">B.A. Degree in High Valarian Trading <span>•</span> <em className="date">820 BC</em></p>
                    <p>
                      Valarian of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                      Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                      nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                      ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                    </p>
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work
          ----------------------------------------------- */}
            <div className="row skil">
              <div className="three columns header-col">
                <h1><span>Achievment</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Conquer the Seven Kingdoms</h3>
                    <p className="info">Burning the Innocent<span>•</span> <em className="date">823 BC - Present</em></p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                    </p>
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Survive The Long Night</h3>
                    <p className="info">Fighting Icy Viserion<span>•</span> <em className="date">822 BC</em></p>
                    <p>
                      Icy Viserion version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                      Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                      nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                      ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                    </p>
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Work */}
            {/* Skills
          ----------------------------------------------- */}
            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Skills</span></h1>
              </div>
              <div className="nine columns main-col">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>
                <div className="bars">
                  <ul className="skills">
                    <li><span className="bar-expand photoshop" /><em>Execute Traitor</em></li>
                    <li><span className="bar-expand illustrator" /><em>Burn People</em></li>
                    <li><span className="bar-expand wordpress" /><em>Show Mercy</em></li>
                    <li><span className="bar-expand css" /><em>Ride A Dragon</em></li>
                    <li><span className="bar-expand html5" /><em>Fight Dead Army</em></li>
                    <li><span className="bar-expand jquery" /><em>Friendzoning People</em></li>
                  </ul>
                </div>{/* end skill-bars */}
              </div> {/* main-col end */}
            </div> {/* End skills */}
          </section>
        );
    }
}
export default Profile;