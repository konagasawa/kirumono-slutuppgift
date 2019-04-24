import React, { Component } from 'react';
import './App.css';


export default class Footer extends Component {

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
        backgroundColor: '#eafef8',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elTitle_text = {
        color: 'white',
        textAlign: 'left',
     };
    
    return (
      <div className="Footer" style={baseStyle}>
        <div className="background">
          <div className='cardBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='headlineFont elTitle_text' style={style_elTitle_text}>
            <div>{this.props.locStrings.header2_title_text_175933}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
