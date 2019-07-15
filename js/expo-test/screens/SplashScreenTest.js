import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';

class SplashScreenTest extends Component {
  state = {
    isSplashReady: false,
    isAppReady: false,
  }

  render() {
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourceAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady) {
      return (
        <View style={styles.container}>
          <Image
            source={require('../assets/google.png')}
            onLoad={this._cacheResourceAsync}
          />
        </View>
      );
    }

    return (
      <View>
        <Text>Splash Screen Test Success</Text>
      </View>
    )
  }

  _cacheSplashResourceAsync = async () => {
    const png = require('../assets/google.png');
    return Asset.fromModule(png).downloadAsync();
  }

  _cacheResourceAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('../assets/expo-icon.png'),
      require('../assets/slack-icon.png'),
    ]

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    })

    await Promise.all(cacheImages);
    console.log(cacheImages[0].uri)
    this.setState({ isAppReady: true });
  }
}

export default SplashScreenTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});