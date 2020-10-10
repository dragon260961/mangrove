import React, {Component} from 'react';
import {
  View,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import Swiper from 'react-native-swiper';
const {width, height} = Dimensions.get('window');

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    marginTop :10,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width,
    flex: 1,
  },
};

var styles1 = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="light-content" />
          <Image
            source={require('D:/xampp7/htdocs/mangrove/image/mangrove.jpg')}
            style={styles.imgBackground}
          />
          <Swiper
            style={styles.wrapper}
            horizontal={true}
            autoplay={true}
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,.3)',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            paginationStyle={{
              bottom: 70,
            }}
            loop={false}>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require('D:/xampp7/htdocs/mangrove/image/mangrove.jpg')}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require('D:/xampp7/htdocs/mangrove/image/mangroves.jpg')}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('D:/xampp7/htdocs/mangrove/image/mangrovess.jpg')} />
            </View>
          </Swiper>

          <Swiper style={styles.wrapper} showsButtons loop={false}>
            <View testID="Hello" style={styles1.slide1}>
              <Text style={styles1.text}>Hello Swiper</Text>
            </View>
            <View testID="Beautiful" style={styles1.slide2}>
              <Text style={styles1.text}>Beautiful</Text>
            </View>
            <View testID="Simple" style={styles1.slide3}>
              <Text style={styles1.text}>And simple</Text>
            </View>
          </Swiper>
          <View style={styles.container}>
            <Swiper
              style={styles.wrapper}
              height={200}
              horizontal={false}
              autoplay>
              <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>

            <Swiper
              style={styles.wrapper}
              height={240}
              onMomentumScrollEnd={(e, state, context) =>
                console.log('index:', state.index)
              }
              dot={
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,.2)',
                    width: 5,
                    height: 5,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: '#000',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              paginationStyle={{
                bottom: -23,
                left: null,
                right: 10,
              }}
              loop>
              <View
                style={styles.slide}
                title={
                  <Text numberOfLines={1}>
                    Aussie tourist dies at Bali hotel
                  </Text>
                }>
                <Image
                  resizeMode="stretch"
                  style={styles.image}
                  source={require('D:/xampp7/htdocs/mangrove/image/mangrove.jpg')}
                />
              </View>
              <View
                style={styles.slide}
                title={
                  <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
                }>
                <Image
                  resizeMode="stretch"
                  style={styles.image}
                  source={require('D:/xampp7/htdocs/mangrove/image/mangrove.jpg')}
                />
              </View>
              <View
                style={styles.slide}
                title={
                  <Text numberOfLines={1}>Why Stone split from Garfield</Text>
                }>
                <Image
                  resizeMode="stretch"
                  style={styles.image}
                  source={require('D:/xampp7/htdocs/mangrove/image/mangrove.jpg')}
                />
              </View>
              <View
                style={styles.slide}
                title={
                  <Text numberOfLines={1}>
                    Learn from Kim K to land that job
                  </Text>
                }>
                <Image
                  resizeMode="stretch"
                  style={styles.image}
                  source={require('D:/xampp7/htdocs/mangrove/image/mangrove.jpg')}
                />
              </View>
            </Swiper>
          </View>
        </ScrollView>
      </View>
    );
  }
}