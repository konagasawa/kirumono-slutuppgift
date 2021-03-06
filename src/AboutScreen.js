import React, { Component } from 'react';
import './App.css';
import btn_icon_518385 from './images/btn_icon_518385.png';
import Footer from './Footer';
import Header from './Header';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class AboutScreen extends Component {

  // Properties used by this component:
  constructor(props){
    super(props);
    
    this.state = {
      about_text : "Kimono is a custom tailered traditional dress, and a entire process to make a full dress takes a tremendous time and procedure." 
      + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    }

  }


  // appActions, deviceInfo

  onClick_elBack = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#fbfeff',
     };
    const style_elAbout_us = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elBack = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
     };
    const style_elBack_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elBottom_scroll = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elBottom_scroll_outer = {
        display: 'none',
     };
    
    return (
      <div className="AppScreen AboutScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elAbout_us'>
            <div style={style_elAbout_us}>
              <div>{this.props.locStrings.about_text_521117}</div>
              <div>{this.state.about_text}</div>
            </div>
          
          </div>
          
          <div className='actionFont elBack' style={style_elBack_outer}>
            <Button style={style_elBack}  variant="fab" color="accent" onClick={this.onClick_elBack} >
              <img src={btn_icon_518385} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
          <div className='baseFont elBottom_scroll' style={style_elBottom_scroll_outer}>
            <div style={style_elBottom_scroll}>
              <div>{this.props.locStrings.about_text_639193}</div>
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elFooter'>
              <Footer ref={(el)=> this._elFooter = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elHeader'>
              <Header ref={(el)=> this._elHeader = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
