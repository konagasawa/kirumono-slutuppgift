import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/CategoryItemComponenet_elImage_416830.jpg';


export default class CategoryItemComponenet extends Component {

  // Properties used by this component:
  // kimonoImage, kimonoName, kimonoPrice, kimonoDescription

  onClick_elImage = (ev) => {
    // Go to screen 'categoryItem'
    this.props.appActions.goToScreen('categoryitem', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#fbfeff',
     };
    const style_elImage = {
        height: 'auto',
     };
    const value_image = this.props.kimonoImage;
    
    const style_elImage_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elKimonoName = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_kimonoName = this.props.kimonoName;
    
    const style_elKimonoPrice = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_kimonoPrice = this.props.kimonoPrice;
    
    const style_elKimonoDescription = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_kimonoDescription = this.props.kimonoDescription;
    
    
    return (
      <div className="CategoryItemComponenet" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='elImage' style={style_elImage_outer}>
            <img style={style_elImage} src={(value_image || img_elImage)} alt="" onClick={this.onClick_elImage}  />
          
          </div>
          
          <div className='baseFont elKimonoName'>
            <div style={style_elKimonoName}>
              <div>{value_kimonoName !== undefined ? value_kimonoName : (<span className="propValueMissing">{this.props.locStrings.categoryitemcomponenet_text_968563}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elKimonoPrice'>
            <div style={style_elKimonoPrice}>
              <div>{value_kimonoPrice !== undefined ? value_kimonoPrice : (<span className="propValueMissing">{this.props.locStrings.categoryitemcomponenet_text_26459}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elKimonoDescription'>
            <div style={style_elKimonoDescription}>
              <div>{value_kimonoDescription !== undefined ? value_kimonoDescription : (<span className="propValueMissing">{this.props.locStrings.categoryitemcomponenet_text_22140}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
