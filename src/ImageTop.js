import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/CategoryItemComponenet_elImage_416830.jpg';
import apikey from './utilities';
import APIKEY from './utilities';
import UTILITIES_ARRAY from './utilities';
//import { Slide } from 'react-slideshow-image';

import ImageGallery from '../node_modules/react-image-gallery';
import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";


var images1 = [];
//var images = [];
const slideImages = [
  'images/ImageTop_elImage_32839.jpg',
  'images/btn_icon_18106.png'
];


export default class ImageTop extends Component {

  // This component doesn't use any properties

    constructor(props){
      super(props);  
  
      //Properties for Image Gallery
      this.state = {
        showIndex: false,
        showBullets: false,
        infinite: true,
        showThumbnails: false,
        showFullscreenButton: false,
        showGalleryFullscreenButton: false,
        showPlayButton: false,
        showGalleryPlayButton: false,
        showNav: false,
        isRTL: false,
        slideDuration: 450,
        slideInterval: 5000,
        slideOnThumbnailOver: false,
        thumbnailPosition: 'bottom',
        showVideo: {},
      };
  
    }
  
    componentDidMount(){
      if(images1[0] == null){
        fetch(UTILITIES_ARRAY[1] + "api/?key=" + UTILITIES_ARRAY[0] + 
        "&q=kimono+dress+geisha+beauty&min_width=4203&min_height=2820&image_type=photo/?min_height=2820&min_width=4203&orientation=horizontal")
        .then(function(response){
          //do something with one that come back to
          if(response.status !== 200){
            throw Error(`status. ${response.status}`);
          }
          return response.json();
        }).then(jsondata => {
          //do something with json-objects
  
          //populate image url from json
          for(var i=0; i<jsondata.hits.length; i++){
             images1.push({
               original: jsondata.hits[i].largeImageURL,
              thumbnail: jsondata.hits[i].webformatURL,
          });
        }
        
        }).catch(error => {
          images1.push({
            original: "https://cdn.pixabay.com/photo/2016/11/14/03/43/asia-1822520_960_720.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2016/11/14/03/43/asia-1822520_960_720.jpg",
          })
        //  this.setState({
        //     largeImageURL: "wrong.jpg"
        //   })
        })
      }// END: if(images1[0] == null){
    }
  
    //ADDED FOR IMAGE GALLERY
    componentDidUpdate(prevProps, prevState) {
      if (this.state.slideInterval !== prevState.slideInterval ||
          this.state.slideDuration !== prevState.slideDuration) {
        // refresh setInterval
        this._imageGallery.pause();
        this._imageGallery.play();
      }
    }
  
    _onImageClick(event) {
      console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
    }
  
    _onImageLoad(event) {
      console.debug('loaded image', event.target.src);
    }
  
    _onSlide(index) {
      this._resetVideo();
      console.debug('slid to index', index);
    }
  
    _onPause(index) {
      console.debug('paused on index', index);
    }
  
    _onScreenChange(fullScreenElement) {
      console.debug('isFullScreen?', !!fullScreenElement);
    }
  
    _onPlay(index) {
      console.debug('playing from index', index);
    }
  
    _handleInputChange(state, event) {
      this.setState({[state]: event.target.value});
    }
  
    _handleCheckboxChange(state, event) {
      this.setState({[state]: event.target.checked});
    }
  
    _handleThumbnailPositionChange(event) {
      this.setState({thumbnailPosition: event.target.value});
    }
  
    _getStaticImages() {
      let images = [];
      for (let i = 2; i < 12; i++) {
        images.push({
          original: `https://pixabay.com/get/e83db30d2cf2063ed1584d05fb1d4794e27ee7d41fb20c4090f5c47daeeeb7bed1_1280.jpg`,
          thumbnail:`https://pixabay.com/get/e83db30d2cf2063ed1584d05fb1d4794e27ee7d41fb20c4090f5c47daeeeb7bed1_1280.jpg`
        });
      }
  
      return images;
    }
  
    _resetVideo() {
      this.setState({showVideo: {}});
  
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: true});
      }
  
      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: true});
      }
    }
  
    _toggleShowVideo(url) {
      this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
      this.setState({
        showVideo: this.state.showVideo
      });
  
      if (this.state.showVideo[url]) {
        if (this.state.showPlayButton) {
          this.setState({showGalleryPlayButton: false});
        }
  
        if (this.state.showFullscreenButton) {
          this.setState({showGalleryFullscreenButton: false});
        }
      }
    }
  
    _renderVideo(item) {
      return (
        <div className='image-gallery-image'>
          {
            this.state.showVideo[item.embedUrl] ?
              <div className='video-wrapper'>
                  <a
                    className='close-video'
                    onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                  >
                  </a>
                  <iframe
                    width='560'
                    height='315'
                    src={item.embedUrl}
                    frameBorder='0'
                    allowFullScreen
                  >
                  </iframe>
              </div>
            :
              <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
                <div className='play-button'></div>
                <img src={item.original}/>
                {
                  item.description &&
                    <span
                      className='image-gallery-description'
                      style={{right: '0', left: 'initial'}}
                    >
                      {item.description}
                    </span>
                }
              </a>
          }
        </div>
      );
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
    
    return (
            //ADDED FOR IMAGE GALLERY
            <section id='sec_imagetop' className='imagetop'>
            <ImageGallery
              autoPlay={true}
              ref={i => this._imageGallery = i}
              items={images1}
              lazyLoad={false}
              onClick={this._onImageClick.bind(this)}
              onImageLoad={this._onImageLoad}
              onSlide={this._onSlide.bind(this)}
              onPause={this._onPause.bind(this)}
              onScreenChange={this._onScreenChange.bind(this)}
              onPlay={this._onPlay.bind(this)}
              infinite={this.state.infinite}
              showBullets={this.state.showBullets}
              showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
              showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
              showThumbnails={this.state.showThumbnails}
              showIndex={this.state.showIndex}
              showNav={this.state.showNav}
              isRTL={this.state.isRTL}
              thumbnailPosition={this.state.thumbnailPosition}
              slideDuration={parseInt(this.state.slideDuration)}
              slideInterval={parseInt(this.state.slideInterval)}
              slideOnThumbnailOver={this.state.slideOnThumbnailOver}
              additionalClass="app-image-gallery"
            />
          </section>
      
    )
  }
  

}


