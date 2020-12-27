import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor() {
      super();
      this.state = {
        showModal: false
      }
    }
     
    render() {
      return (
        <div className='header'>
          <div className='header-content header-content__left'>
            
          </div>
          <div className='header-content header-content__middle'>
            Flash Cards
          </div>
          <div className='header-content header-content__right'>
            
          </div>
        </div>
      )
    }
  }
  class Card extends React.Component {
    
    constructor() {
      super();
      this.state = {
        showAnswer: false
      }
    }
   
    render() {
      const content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
      const iconClass = this.state.showAnswer ? 'reply' : 'share';
      const cardClass = this.state.showAnswer ? 'back' : '';
      const contentClass = this.state.showAnswer ? 'back' : 'front';
      const actionClass = this.state.showAnswer ? 'active' : '';
  
      return (
        <div 
          className={`card ${cardClass}`}
          onClick={() => this.setState({showAnswer: !this.state.showAnswer})}
        >
        <span className='card__counter'>{this.props.cardNumber + 1}</span>
          <div 
            className='card__flip-card'
            onClick={ () => {
              this.setState({showAnswer: !this.state.showAnswer});
            }}
          >
  
            <span className={`fa fa-${iconClass}`}/>
          </div>
          <div className={`card__content--${contentClass}`}>
            {content}
          </div>
          <div className={`card__actions ${actionClass}`}>
            <div 
              className='card__prev-button'
              onClick={() => {
                this.props.showPrevCard();
                this.setState({showAnswer: false});
              }}
            >
              Prev
            </div>
            <div 
              className='card__next-button'
              onClick={() => {
                this.props.showNextCard();
                this.setState({showAnswer: false});
              }}
            >
              Next
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Card;