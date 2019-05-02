import React, { Component } from 'react';
import './App.css';
import btn_icon_18106 from './images/btn_icon_18106.png';
import btn_icon_92577 from './images/btn_icon_92577.png';


export default class Header extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      elBackground_menu_visible: false,
      elMenu_items_visible: false,
      elButton_open_menu_list_visible: true,
      elButton_close_menu_list_visible: false,
      elContactUs_visible: false,
      elKimono_visible: false,
      elAboutUs_visible: false,
    };
  }

  onClick_elButton_open_menu_list = (ev) => {
    this.setState({elMenu_items_visible: true});
  
    this.setState({elButton_open_menu_list_visible: false});
  
    this.setState({elButton_close_menu_list_visible: true});
  
    this.setState({elBackground_menu_visible: true});
  
    this.setState({elKimono_visible: true});
  
    this.setState({elContactUs_visible: true});

    this.setState({elAboutUs_visible: true});
  
  }
  
  
  onClick_elButton_close_menu_list = (ev) => {
    this.setState({elMenu_items_visible: false});
  
    this.setState({elButton_open_menu_list_visible: true});
  
    this.setState({elButton_close_menu_list_visible: false});
  
    this.setState({elBackground_menu_visible: false});
  
    this.setState({elKimono_visible: false});
  
    this.setState({elContactUs_visible: false});

    this.setState({elAboutUs_visible: false});
  
  }
  
  
  onClick_elTitle_text = (ev) => {
    // Go to screen 'home'
    this.props.appActions.goToScreen('home', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elContactUs = (ev) => {
    // Go to screen 'contact'
    this.props.appActions.goToScreen('contact', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elAboutUs = (ev) => {
    // Go to screen 'about'
    this.props.appActions.goToScreen('about', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elKimono = (ev) => {
    // Go to screen 'categoryFirst'
    this.props.appActions.goToScreen('categoryfirst', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground_top = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_top_outer = {
        backgroundColor: '#eafef8',
     };
    const style_elBackground_menu = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_menu_outer = {
        backgroundColor: '#eafef8',
     };
    const elBackground_menu = this.state.elBackground_menu_visible ? (
        <div className='cardBg elBackground_menu' style={style_elBackground_menu_outer}>
          <div style={style_elBackground_menu} />
        
        </div>
        
     ) : null;
    const style_elMenu_items = {
        width: '100%',
        height: '100%',
     };
    const style_elMenu_items_outer = {
        backgroundColor: '#eafef8',
     };
    const elMenu_items = this.state.elMenu_items_visible ? (
        <div className='cardBg elMenu_items' style={style_elMenu_items_outer}>
          <div style={style_elMenu_items} />
        
        </div>
        
     ) : null;
    const style_elHeader_top = {
        width: '100%',
        height: '100%',
     };
    const style_elHeader_top_outer = {
        backgroundColor: '#eafef8',
     };
    const style_elButton_open_menu_list = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_18106+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.562%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const elButton_open_menu_list = this.state.elButton_open_menu_list_visible ? (
        <button className='actionFont elButton_open_menu_list' style={style_elButton_open_menu_list}  onClick={this.onClick_elButton_open_menu_list}  />
     ) : null;
    const style_elButton_close_menu_list = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_92577+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.562%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const elButton_close_menu_list = this.state.elButton_close_menu_list_visible ? (
        <button className='actionFont elButton_close_menu_list' style={style_elButton_close_menu_list}  onClick={this.onClick_elButton_close_menu_list}  />
     ) : null;
    const style_elTitle_text = {
        color: '#d5d5d5',
        textAlign: 'left',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elContactUs = {
        color: '#d5d5d5',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };


    const elContactUs = this.state.elContactUs_visible ? (
        <div className='baseFont elContactUs' style={style_elContactUs} onClick={this.onClick_elContactUs} >
          <div>{this.props.locStrings.header_text_1042336}</div>
        </div>
     ) : null;

    const style_elAboutUs = {
        color: '#d5d5d5',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
     const elAboutUs = this.state.elAboutUs_visible ? (
      <div className='baseFont elAboutUs' style={style_elAboutUs} onClick={this.onClick_elAboutUs} >
      <div>{this.props.locStrings.header_text_784850}</div>
    </div>
     ): null;



    const style_elKimono = {
        color: '#d5d5d5',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const elKimono = this.state.elKimono_visible ? (
        <div className='baseFont elKimono' style={style_elKimono} onClick={this.onClick_elKimono} >
          <div>{this.props.locStrings.header_text_694277}</div>
        </div>
     ) : null;
    
    return (
      <div className="Header" style={baseStyle}>
        <div className="background">
          <div className='cardBg elBackground_top' style={style_elBackground_top_outer}>
            <div style={style_elBackground_top} />
          
          </div>
          
          { elBackground_menu }
        </div>
        <div className="foreground">
          { elMenu_items }
          <div className='cardBg elHeader_top' style={style_elHeader_top_outer}>
            <div style={style_elHeader_top} />
          
          </div>
          
          { elButton_open_menu_list }
          { elButton_close_menu_list }
          <div className='headlineFont elTitle_text' style={style_elTitle_text} onClick={this.onClick_elTitle_text} >
            <div>{this.props.locStrings.comp1_title_text_129986}</div>
          </div>
          { elContactUs }
          {elAboutUs}
          { elKimono }
        </div>
      </div>
    )
  }
  

}