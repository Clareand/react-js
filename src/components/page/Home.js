import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <header id="home">
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Daenerys Stomborn</h1>
          <h3><span>of the House Targaryen, the First of Her Name, Queen of the Andals,
                the Rhoynar and the First Men, Lady of the Seven Kingdoms and Protector of the Realm,
                Lady of Dragonstone, Queen of Meereen, Khaleesi of the Great Grass Sea, the Unburnt, 
                Breaker of Chains and Mother of Dragons.</span></h3>
          <hr />
        </div>
      </div>
    </header> 
    );
  }
}

export default Home;