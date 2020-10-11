import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  ImageBackground,
} from 'react-native';
// import Gallery from 'react-native-image-gallery';
export default class PackagesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    return fetch('http://172.16.156.115/mangrove/Database/Packages.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  clickEventListener() {
    Alert.alert('Success', 'Product has beed added to cart');
  }
  render() {
    return (
    //   <ImageBackground
    //     source={require('D:/application/WUbadminton/Image/back07.png')}
    //     style={{flex: 1, resizeMode: 'cover'}}>
        <View>
          <ScrollView>
            <View>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: 'white',
                      textAlign: 'center',
                      minHeight: 10,
                      minWidth: 10,
                      elevation: 50,
                      borderRadius: 10,
                      fontSize: 20,
                      marginTop: 15,
                      marginLeft: 10,
                      marginRight: 10,
                      color: '#5e3881',
                    }}>
                    <Text style={{fontSize: 25, marginTop: 10, marginLeft: 50}}>
                      ข้อมูล Packages
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    CustomerName: {item.PName}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    Price: {item.PPrice}
                    </Text>
                    {/* <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    Telephone: {item.STelephone}
                    </Text> */}
                    {/* <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    Photo: {item.SPhoto}
                    </Text> */}
                  </View>
                )}
              />
            </View>
          
                    
        
          </ScrollView>
        </View>
   
    );
  }
}