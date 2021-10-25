/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default class WebLocalScreen extends React.Component {
  render() {
    return (
      <WebView
        style={styles.webSize}
        originWhitelist={['*']}
        source={{uri: 'file:///android_asset/local.html'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}></WebView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webSize: {
    width: '100%',
    height: '100%',
  },
});
