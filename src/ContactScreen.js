import React, { Component } from 'react';
import './App.css';
import btn_icon_957931 from './images/btn_icon_957931.png';
import Footer from './Footer';
import Header from './Header';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ContactScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      first_name: '',
      last_name: '',
      email_address: '',
      phone_number: '',
      comment: '',
    };
  }

  textInputChanged_first_name = (event) => {
    this.setState({first_name: event.target.value});
  }
  
  textInputChanged_last_name = (event) => {
    this.setState({last_name: event.target.value});
  }
  
  textInputChanged_email_address = (event) => {
    this.setState({email_address: event.target.value});
  }
  
  textInputChanged_phone_number = (event) => {
    this.setState({phone_number: event.target.value});
  }
  
  textAreaChanged_comment = (event) => {
    this.setState({comment: event.target.value});
  }
  
  onClick_elSubmit = (ev) => {
    let address = "konagasawaapp@gmail.com";
    let subject = "Inquiry: ";
    let lastName = this.state.last_name;
    let firstName = this.state.first_name;
    let userAddress = this.state.email_address;
    let userPhone = this.state.phone_number;
    let comment = this.state.comment;
    console.log(comment);
    let body = comment;
    body = body + "Your name: " + firstName + " " + lastName;
    body = body + "Your address: " + userAddress;
    body = body + "Your phone: " + userPhone;
    window.location = "mailto:" + address + "?subject=" + subject + "&body=" + body;
  
  }
  
  
  onClick_elBack = (ev) => {
    // Go to screen 'home'
    this.props.appActions.goToScreen('home', { transitionId: 'fadeIn' });
  
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
    const style_elTitle = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elFirst_name = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elFirst_name_outer = {
        pointerEvents: 'auto',
     };
    const style_elLast_name = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elLast_name_outer = {
        pointerEvents: 'auto',
     };
    const style_elEmail_address = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elEmail_address_outer = {
        pointerEvents: 'auto',
     };
    const style_elPhone_number = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elPhone_number_outer = {
        pointerEvents: 'auto',
     };
    const style_elComment = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elComment_outer = {
        pointerEvents: 'auto',
     };
    const style_elSubmit = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elSubmit_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
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
    const style_elScroll_bottom = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen ContactScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elTitle'>
            <div style={style_elTitle}>
              <div>{this.props.locStrings.contact_text_80907}</div>
            </div>
          
          </div>
          
          <div className='baseFont elFirst_name' style={style_elFirst_name_outer}>
            <input style={style_elFirst_name} type="text" placeholder={this.props.locStrings.contact_field_265522} onChange={this.textInputChanged_first_name} value={this.state.first_name}  />
          
          </div>
          
          <div className='baseFont elLast_name' style={style_elLast_name_outer}>
            <input style={style_elLast_name} type="text" placeholder={this.props.locStrings.contact_field2_565214} onChange={this.textInputChanged_last_name} value={this.state.last_name}  />
          
          </div>
          
          <div className='baseFont elEmail_address' style={style_elEmail_address_outer}>
            <input style={style_elEmail_address} type="text" placeholder={this.props.locStrings.contact_field3_937117} onChange={this.textInputChanged_email_address} value={this.state.email_address}  />
          
          </div>
          
          <div className='baseFont elPhone_number' style={style_elPhone_number_outer}>
            <input style={style_elPhone_number} type="text" placeholder={this.props.locStrings.contact_field4_790716} onChange={this.textInputChanged_phone_number} value={this.state.phone_number}  />
          
          </div>
          
          <div className='baseFont elComment' style={style_elComment_outer}>
            <textarea style={style_elComment}  placeholder={this.props.locStrings.contact_textarea_210171} onChange={this.textAreaChanged_comment} value={this.state.comment}  />
          
          </div>
          
          <div className='actionFont elSubmit' style={style_elSubmit_outer}>
            <Button style={style_elSubmit}  color="accent" onClick={this.onClick_elSubmit} >
              {this.props.locStrings.contact_button_911440}
            </Button>
          
          </div>
          
          <div className='actionFont elBack' style={style_elBack_outer}>
            <Button style={style_elBack}  variant="fab" color="accent" onClick={this.onClick_elBack} >
              <img src={btn_icon_957931} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
          <div className='baseFont elScroll_bottom'>
            <div style={style_elScroll_bottom}>
              <div>{this.props.locStrings.contact_text2_498679}</div>
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
