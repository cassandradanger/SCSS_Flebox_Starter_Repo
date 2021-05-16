import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Cheese & Bill Murray</h1>
        </header>
        <main>
          <div id="intro">
            I love cheese, especially jarlsberg bocconcini.
            Ricotta fromage jarlsberg stinking bishop boursin babybel queso parmesan.
            Emmental taleggio queso taleggio cheese and biscuits everyone loves stinking bishop cheese triangles.
            Bocconcini the big cheese cow bavarian bergkase port-salut when the cheese comes out everybody's happy fondue cheesecake.
            Babybel blue castello hard cheese cream cheese ricotta pecorino croque monsieur pecorino. 
            Goat cheesy grin croque monsieur caerphilly swiss bavarian bergkase ricotta croque monsieur. 
            Danish fontina cheese and biscuits.
          </div>
          <div id="subMain">
            <div id="form">
              <label for="title">Title:</label>
              <input id="title"></input>
              <label for="description">Description:</label>
              <input id="description"></input>
              <label for="image">Image URL:</label>
              <input id="image"></input>
              <button>Submit</button>
            </div>
            <ul>
              <li><img src="http://www.fillmurray.com/200/250"/></li>
              <li><img src="http://www.fillmurray.com/300/250"/></li>
              <li><img src="http://www.fillmurray.com/50/50"/></li>
              <li><img src="http://www.fillmurray.com/200/100"/></li>
              <li><img src="http://www.fillmurray.com/50/100"/></li>
              <li><img src="http://www.fillmurray.com/100/100"/></li>
              <li><img src="http://www.fillmurray.com/300/350"/></li>
              <li><img src="http://www.fillmurray.com/400/450"/></li>
              <li><img src="http://www.fillmurray.com/80/80"/></li>
              <li><img src="http://www.fillmurray.com/260/300"/></li>
              <li><img src="http://www.fillmurray.com/80/150"/></li>
              <li><img src="http://www.fillmurray.com/130/90"/></li>
            </ul>
          </div>
        </main>
        <div id="footer">
          <p id="footerCopy">
            Macaroni cheese danish fontina stilton cheddar say cheese cheese on toast say cheese cottage cheese. 
          </p>
          <div id="contactInfo">
            <p>Casie Siekman</p>
            <p>@CassandraDanger</p>
            <p>www.cassandradanger.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
