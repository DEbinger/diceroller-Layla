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
import { Button } from './app/components/Button';
import LaylaDARSH from './app/components/LaylaDARSH';
import LaylaDARSHPBS from './app/components/LaylaDARSHPBS';
import LaylaDARSHPBSSMITE from './app/components/LaylaDARSHPBSSMITE';
import LaylaHammer from './app/components/LaylaHammer';
import LaylaHammerHS from './app/components/LaylaHammerHS';
import LaylaHammerHSSmite from './app/components/LaylaHammerHSSmite';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

EStyleSheet.build();

class LogoTitle1 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/archer.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle2 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/archer2.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle3 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/archer3.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle4 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/hammer.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle5 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/hammer2.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle6 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/hammer3.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'LAYLA',
  };
  render (){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.homeContainer}>
        <Text
          onPress= { ()=> navigate('LaylaDARSH')} style={styles.onpress1} > {"\n"}DARSH{"\n"}{"\n"}{"\n"}{"\n"} <LogoTitle1 />
        </Text>
        <Text
          onPress= { ()=> navigate('LaylaDARSHPBS')}> {"\n"}DARSH{"\n"}PBS{"\n"}{"\n"}{"\n"} <LogoTitle2 />
        </Text>
        <Text
          onPress= { ()=> navigate('LaylaDARSHPBSSMITE')}> {"\n"}DARSH{"\n"}PBS{"\n"}SMITE{"\n"}{"\n"} <LogoTitle3 />
        </Text>
        <Text
          onPress= { ()=> navigate('LaylaHammer')}> {"\n"}HAMMER{"\n"}{"\n"}{"\n"}{"\n"} <LogoTitle4 />
        </Text>
        <Text
          onPress= { ()=> navigate('LaylaHammerHS')}> {"\n"}HAMMER{"\n"}HS{"\n"}{"\n"}{"\n"} <LogoTitle5 />
        </Text>
        <Text
          onPress= { ()=> navigate('LaylaHammerHSSmite')}> {"\n"}HAMMER{"\n"}HS{"\n"}SMITE{"\n"}{"\n"} <LogoTitle6 />
        </Text>
      </View>
    )
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  LaylaDARSH: { screen: LaylaDARSH },
  LaylaDARSHPBS: { screen: LaylaDARSHPBS },
  LaylaDARSHPBSSMITE: { screen: LaylaDARSHPBSSMITE },
  LaylaHammer: { screen: LaylaHammer },
  LaylaHammerHS: { screen: LaylaHammerHS },
  LaylaHammerHSSmite: { screen: LaylaHammerHSSmite },
  }, {
    navigationOptions: {
      headeStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  })

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
          <LaylaDARSH />;
          <LaylaDARSHPBS />;
          <LaylaDARSHPBSSMITE />;
          <LaylaHammer />;
          <LaylaHammerHS />;
          <LaylaHammerHSSmite />;
  }
}

const styles = StyleSheet.create({
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
});
