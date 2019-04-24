import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/ImageFirstCategory_elImage_160748.jpg';


export default class ImageFirstCategory extends Component {

  // This component doesn't use any properties

  onClick_elImage = (ev) => {
    // Go to screen 'categoryFirst'
    this.props.appActions.goToScreen('categoryfirst', { transitionId: 'fadeIn' });
  
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
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elImage_2_text = {
        fontSize: 10.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'black',
        textAlign: 'left',
     };
    
    return (
      <div className="ImageFirstCategory" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="foreground">
          <img className='containerMinHeight elImage' style={style_elImage} src={img_elImage} alt="" onClick={this.onClick_elImage}  />
          <div className='elImage_2_text' style={style_elImage_2_text}>
            <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.imagefirstcategory_text_777866.replace(/\n/g, '<br>')}}></div></div>
          </div>
        </div>
      </div>
    )
  }
  

}
