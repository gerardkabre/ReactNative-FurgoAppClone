import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo';

const videoUrl =
  'https://ak1.picdn.net/shutterstock/videos/34101991/preview/stock-footage-time-lapse-of-odaiba-tokyo-at-night-with-ferris-wheel.mp4';

const Container = ({ children, yellow, video }) => {
  if (video)
    return (
      <View style={styles.container}>
        <Video
          source={{ uri: videoUrl }}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={StyleSheet.absoluteFill}
        />
        {children}
      </View>
    );
  return (
    <View style={[styles.container, yellow ? styles.bgYellow : null]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 25
  },
  bgYellow: {
    backgroundColor: '#FFC400'
  }
});

export default Container;
