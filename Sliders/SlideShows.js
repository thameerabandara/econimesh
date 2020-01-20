import React, { Component } from 'react';
import { StyleSheet,View, ScrollView, Dimensions, Image, Button  } from 'react-native';
import Slideshow from 'react-native-image-slider-show';

const DEVICE_WIDTH = Dimensions.get('window').width 


export default class Slideshows extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          // title: 'economics',
          // caption: 'sign now Economics Page ', 
          url: 'https://source.unsplash.com/1024x768/?srilanka"',     
        }, {
          // title: 'education',
          // caption: 'sign now education Page',
          url: 'https://source.unsplash.com/1024x768/?galle dutch fort',
        }, {
          // title: 'currency',
          // caption: 'sign now currency Page',
          url: 'https://source.unsplash.com/1024x768/?Sigiriya',
        },
        {
          // title: 'Accounting',
          // caption: 'sign now Accounting Page',
          url: 'https://source.unsplash.com/1024x768/?nine_arch_bridge"',
        }, {
          // title: 'business',
          // caption: 'sign now business Page',
          url: 'https://source.unsplash.com/1024x768/?galleface',
        }, {
          // title: 'world news',
          // caption: 'sign now world news Page',
          url: 'https://source.unsplash.com/1024x768/?srilanka',
        },
      ],
    };
  }
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 5000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
 
  render() {
    return (
    <Slideshow
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
    );
  }
}

