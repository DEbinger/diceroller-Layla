import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
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
      />
    );
  }
}

class LogoTitle2 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/archer2.jpg')}
      />
    );
  }
}

class LogoTitle3 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/archer3.jpg')}
      />
    );
  }
}

class LogoTitle4 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/hammer.jpg')}
      />
    );
  }
}

class LogoTitle5 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/hammer2.jpg')}
       />
    );
  }
}

class LogoTitle6 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/hammer3.jpg')}
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
      <View style={styles.container}>
        <ScrollView style={styles.homeContainer}>
          <Text
            onPress= { ()=> navigate('LaylaDARSH')} >DARSH<LogoTitle1 />
          </Text>
          <Text
            onPress= { ()=> navigate('LaylaDARSHPBS')}>{"\n"}DARSH{"\n"}PBS{"\n"}<LogoTitle2 />
          </Text>
          <Text
            onPress= { ()=> navigate('LaylaDARSHPBSSMITE')}>{"\n"}DARSH{"\n"}PBS{"\n"}SMITE{"\n"}<LogoTitle3 />
          </Text>
          <Text
            onPress= { ()=> navigate('LaylaHammer')}>{"\n"}HAMMER{"\n"}<LogoTitle4 />
          </Text>
          <Text
            onPress= { ()=> navigate('LaylaHammerHS')}>{"\n"}HAMMER{"\n"}HS{"\n"}<LogoTitle5 />
          </Text>
          <Text
            onPress= { ()=> navigate('LaylaHammerHSSmite')}>{"\n"}HAMMER{"\n"}HS{"\n"}SMITE{"\n"}<LogoTitle6 />
          </Text>
        </ScrollView>
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
    container: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#F65BE3',
      alignContent: 'center',
      padding: 5,
    },
    homeContainer: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#F65BE3',
      alignContent: 'center',
      alignSelf: 'center',
      padding: 5,
    },
    logo: {
      marginTop: 5,
      width: 350,
      height: 500,
    },
});
