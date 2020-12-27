import React from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import './Main.css';

class Main extends React.Component {
    render() {
      return (
        <div className='wrapper'>
          <Header />
          <div className='content-wrapper'>
            <CardContainer />
          </div>
        </div>
      );
    }
  }
  
//   ReactDOM.render(<Main />, document.getElementById('app'));
export default Main;