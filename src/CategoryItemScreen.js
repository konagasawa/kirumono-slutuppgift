import React, { Component } from 'react';
import './App.css';
import CategoryItemComponenet from './CategoryItemComponenet';
import btn_icon_130080 from './images/btn_icon_130080.png';
import Footer from './Footer';
import Header from './Header';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class CategoryItemScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, kimonoImage, kimonoName, kimonoPrice, kimonoDescription, document_key

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
    
    return (
      <div className="AppScreen CategoryItemScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elCategoryItemComponenet'>
            <div>
              <CategoryItemComponenet kimonoImage={this.props.kimonoImage || ""} kimonoName={this.props.kimonoName} kimonoPrice={this.props.kimonoPrice} kimonoDescription={this.props.kimonoDescription} visualStateIndex={this.props.document_key} ref={(el)=> this._elCategoryItemComponenet = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='actionFont elBack' style={style_elBack_outer}>
            <Button style={style_elBack}  variant="fab" color="accent" onClick={this.onClick_elBack} >
              <img src={btn_icon_130080} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
          <div className='baseFont elBottom_scroll'>
            <div style={style_elBottom_scroll}>
              <div>{this.props.locStrings.screen9_text_503147}</div>
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elFooter'>
              <Footer ref={(el)=> this._elFooter = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps containerMinHeight elHeader'>
              <Header ref={(el)=> this._elHeader = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
