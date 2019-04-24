import React, { Component } from 'react';
import './App.css';
import CategoryItemComponenet from './CategoryItemComponenet';
import btn_icon_235884 from './images/btn_icon_235884.png';
import Footer from './Footer';
import Header from './Header';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class CategoryFirstScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    
    const dataSheet_kimono = this.props.dataSheets['kimono'];
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#fbfeff',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('kimono').items);
    
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
      <div className="AppScreen CategoryFirstScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elList'>
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols2_${index % 2}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <CategoryItemComponenet dataSheetId={'kimono'} dataSheetRow={row} {...{ 'kimonoImage': row['kimonoImage'], 'kimonoName': row['kimonoName'], 'kimonoPrice': row['kimonoPrice'], 'kimonoDescription': row['kimonoDescription'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
          <div className='actionFont elBack' style={style_elBack_outer}>
            <Button style={style_elBack}  variant="fab" color="accent" onClick={this.onClick_elBack} >
              <img src={btn_icon_235884} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
          <div className='baseFont elBottom_scroll'>
            <div style={style_elBottom_scroll}>
              <div>{this.props.locStrings.category_1_text_1043580}</div>
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
