import React, { Component } from 'react';
import './App.css';
import ImageTop from './ImageTop';
import ImageFirstCategory from './ImageFirstCategory';
import Footer from './Footer';
import Header from './Header';


export default class HomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    const style_elTopTextMessage = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elBottom_scroll = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elBottom_scroll_outer = {
        display: 'none',
     };
    
    return (
      <div className="AppScreen HomeScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elTopTextMessage'>
            <div style={style_elTopTextMessage}>
              <div>{this.props.locStrings.home_text_158175}</div>
            </div>
          
          </div>
          
          <div className='hasNestedComps elImage_1'>
            <div>
              <ImageTop ref={(el)=> this._elImage_1 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elImage_2'>
            <div>
              <ImageFirstCategory ref={(el)=> this._elImage_2 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='baseFont elBottom_scroll' style={style_elBottom_scroll_outer}>
            <div style={style_elBottom_scroll}>
              <div>{this.props.locStrings.home_text_522796}</div>
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
