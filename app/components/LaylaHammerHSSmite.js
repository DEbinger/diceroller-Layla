import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity
       } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from './Button';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

EStyleSheet.build();

export default class LaylaHammerHSSmite extends React.Component {
  static navigationOptions = {
    title: 'Hammer',
  };
  constructor(props) {
    super(props);
  imgClick = () => {
    Alert.alert(
  'Column 1 Base D20 roll \n\nColumn 2 D20 \n + 20|20|15 \n Haste \n Song \n Smite',
  'Enjoy!',
  [
    {text: 'T20 = Total D20 Roll', onPress: () => console.log('D20 Roll Total')},
    {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel'}
  ],
  { cancelable: false }
)
  }

    this.state={

      // This is our Display number value, prior to button press
      NumberHolderD20S1 : 'B20',
      NumberHolderD20S2 : 'B20',
      NumberHolderD20S3 : 'B20',
      NumberHolderD8S1 : 'D8',
      NumberHolderD8S2 : 'D8',
      NumberHolderD8S3 : 'D8',
      NumberHolderTotalD20S1 : 'T20',
      NumberHolderTotalD20S2 : 'T20',
      NumberHolderTotalD20S3 : 'T20',
    }
  }

  rollA20 = () => {
    return Math.floor(Math.random() * 20) + 1;
  }

  handleButtonPress=()=> {
    let D20S1 = this.rollA20();
    let D20S2 = this.rollA20();
    let D20S3 = this.rollA20();
    let D20TotalS1 = D20S1 + 20 ;
    let D20TotalS2 = D20S2 + 20 ;
    let D20TotalS3 = D20S3 + 15 ;
    let D8S1 = Math.floor(Math.random()  * 8) +16;
    let D8S2 = Math.floor(Math.random()  * 8) +16;
    let D8S3 = Math.floor(Math.random()  * 8) +16;

  this.setState({

    NumberHolderD20S1 : D20S1,
    NumberHolderD20S2 : D20S2,
    NumberHolderD20S3 : D20S3,
    NumberHolderTotalD20S1 : D20TotalS1,
    NumberHolderTotalD20S2 : D20TotalS2,
    NumberHolderTotalD20S3 : D20TotalS3,
    NumberHolderD8S1 : D8S1,
    NumberHolderD8S2 : D8S2,
    NumberHolderD8S3 : D8S3,
    })
  }

  render (){
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S1 === 20 | this.state.NumberHolderD20S1 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S2Style = this.state.NumberHolderD20S2 === 20 | this.state.NumberHolderD20S2 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S3Style = this.state.NumberHolderD20S3 === 20 | this.state.NumberHolderD20S3 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    return (
       <View style={styles.archer1}>
          <View style={styles.top1}>
            <TouchableOpacity onPress={imgClick} style={styles.profileimage}>
              <Image
                style={styles.image}
                source={require('../images/hammer3.jpg')}
              />
            </TouchableOpacity>
          </View>

          <Animatable.View ref="view"
            style={styles.center1} >
            <Button style={styles.button} text="Attack!"
              onPress={() => this.handleButtonPress()}/>
          </Animatable.View>

            <View style={styles.bottom1}>
              <Animatable.View
                animation="bounce"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={D20S1Style} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD20S1}</Text>
              </Animatable.View>

            <Animatable.View
              animation="tada"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItemTotal}>
                <Animatable.Text
                  animation="zoomInUp"
                  style={styles.bottomItemInnerTotalD20}
                  adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderTotalD20S1}
                </Animatable.Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-out"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S1}</Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={D20S2Style} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD20S2}</Text>
            </Animatable.View>

            <Animatable.View
              animation="tada"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItemTotal}>
                <Animatable.Text
                  animation="zoomInUp"
                  style={styles.bottomItemInnerTotalD20}
                  adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderTotalD20S2}
                </Animatable.Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-out"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S2}</Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={D20S3Style} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD20S3}</Text>
            </Animatable.View>

            <Animatable.View
              animation="tada"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItemTotal}>
              <Animatable.Text
                animation="zoomInUp"
                style={styles.bottomItemInnerTotalD20}
                adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderTotalD20S3}</Animatable.Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-out"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S3}</Text>
            </Animatable.View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bottomItemInner20picked: {
      flex: 1,
      backgroundColor: 'red',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: 'white',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#F65BE3',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    homeContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#F65BE3',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      height: '33%',
      width: '33%',
      padding: 2,
    },
    archer1: {
      flex: 1,
      backgroundColor: '#065143',
    },
    archer2: {
      flex: 1,
      backgroundColor: '#D8FFDD',
    },
    archer3: {
      flex: 1,
      backgroundColor: '#F0C808',
    },
    top1: {
      height: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#065143',
    },
    top2: {
      height: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D8FFDD',
    },
    top3: {
      height: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F0C808',
    },
    checkboxParent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
    profileimage: {
      width: 140,
      height: 200,
      borderWidth: 4,
      borderColor: '#fff',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      maxHeight: '100%',
      maxWidth: '100%',
    },
    center1: {
      height: '10%',
      backgroundColor: '#065143',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    center2: {
      height: '10%',
      backgroundColor: '#D8FFDD',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    center3: {
      height: '10%',
      backgroundColor: '#F0C808',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    bottom1: {
      height: '33%',
      backgroundColor: '#065143',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    bottom2: {
      height: '33%',
      backgroundColor: '#D8FFDD',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    bottom3: {
      height: '33%',
      backgroundColor: '#F0C808',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    bottomItem: {
      width: '33%',
      height: '33%',
      padding: 5,
    },
    bottomItemTotal: {
      width: '33%',
      height: '33%',
      padding: 5,
    },
    bottomItemInner20: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: '#129490',
    },
    bottomItemInner8: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: '#8a2be2',
    },
    bottomItemInner4: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: '#065143',
    },
    bottomItemInnerTotalD20: {
      flex: 1,
      backgroundColor: '#CE1483',
      borderColor: '#70B77E',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: '#fff8dc',
    },
    logo1: {
      backgroundColor: '#065143',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
