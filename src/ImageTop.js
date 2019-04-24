import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/CategoryItemComponenet_elImage_416830.jpg';


export default class ImageTop extends Component {

  // This component doesn't use any properties

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
    
    return (
      <div className="ImageTop" style={baseStyle}>
        <div className="background">
          <div className='appBg elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="foreground">
          <img className='containerMinHeight elImage' style={style_elImage} src={img_elImage} alt=""  />
        </div>
      </div>
    )
  }
  

}
