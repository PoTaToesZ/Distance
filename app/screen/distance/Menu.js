import {View, Text, FlatList, StyleSheet, Dimensions,Image,MapProgress} from 'react-native';
import React from 'react';
import {
  StepProgressBar
} from 'react-native-step-progress-bar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Menu = () => {
  changeColor = (price) => {
    if (price == '1 km trước') {
      return 1;
    }
    if (price == '1.000,000 đ') {
      return 2;
    }
    if (price == '88,000 đ') {
      return 3;
    }
  };
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#b2beb5',
        height: 1,
        borderStartWidth: 100,
        borderStartColor: 'white',
        
      }}
    />
  );
  const deli = [
    {
      id: '1',
      text: '',
      date: '24 thg 12',
      distance: '6 km',
      price: '      88,000 đ',
      ico: require('@app/assets/images/placeholder.png'),
      image: require('@app/assets/images/odometer.png'),
    },
    {
      id: '2',
      text: '',
      date: '24 thg 11',
      distance: '11 km',
      price: '1.000,000 đ',
      ico: '',
      image: require('@app/assets/images/odometer.png'),
    },
    {
      id: '4',
      text: '',
      date: '04 thg 12',
      distance: '14 km',
      price: '1 km trước',
      ico: '',
      image: require('@app/assets/images/odometer.png'),
    },
  ];
  const delidata = ({item,index}) => (
    <View style={styles.bigContainer}>
      <View style={styles.container1}>
        <Text style={styles.textSty}>{item.text}</Text>
        <Text style={styles.dateSty}>{item.date}</Text>
      </View>
      {/* <Image source={item.ico} style={styles.imgico}/>  */}
      <View style={styles.container2}>
      <Image source={item.image} style={styles.img}/>
        <Text style={styles.distanceSty}>{item.distance}</Text>
        <Text
          style={[
            this.changeColor(item.price) == 1 ? styles.c1 : styles.priceSty,
            this.changeColor(item.price) == 2 ? styles.c2 : styles.priceSty,
            this.changeColor(item.price) == 3 ? styles.c3 : styles.priceSty,
            styles.priceSty,
          ]}>
          {item.price}
        </Text>
      </View>
    </View>
  );
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList data={deli} renderItem={delidata} ItemSeparatorComponent={this.renderSeparator} keyExtractor={item => `key-${item.id}`} />
      <View style={{bottom: 500, flex: 1}}>
      <StepProgressBar 
    orientation={'vertical'}
    stepColor="lightgreen"
    activeStep={1}
    completedBarColor={'#FF033E'}
    stepWidth={100}
    stepHeight={60}
    showLabel={true}
    barLength={70}
    barThickeness={6}
    data={[
        {label: 'Nạp nhiên liệu'},
        {label: 'Vận chuyển hàng hóa'},
        {label: 'Nạp nhiên liệu tiếp theo'},
    ]}
    barColor={'lightgrey'}
    labelTextStyle={{fontFamily: 'roboto', color: '#a11',paddingBottom: 75, right: 5, fontSize: 16 }}
    renderStep={({index}) => {
        if (index === 0) {
        return (
            <View
            style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#FFAE42',
                borderWidth: 5,
                borderColor: '#FFAE42',
            }}>
              <FontAwesome5 name="gas-pump" size={30} color={'white'} style={{paddingLeft:13, paddingTop: 8}}/>
            </View>
        );
        } else if (index === 1) {
        return (
            <View
            style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#47D990',
                borderWidth: 5,
                borderColor: '#47D990',
            }}>
            <Feather name="package" size={30} color={'white'} style={{paddingLeft:11, paddingTop: 9}}/>
            </View>
        );
        } else if (index === 2) {
        return (
            <View
            style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: 'white',
                borderWidth: 5,
                borderColor: '#FFAE42',
            }}>
              <MaterialIcons name="local-gas-station" size={30} color={'#FFAE42'} style={{paddingLeft:13, paddingTop: 8}}/>
            </View>
        );
        }
    }}
/></View>
    </View>
  );
};

export default Menu;
const styles = StyleSheet.create({
  bigContainer: {flex:1},
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingLeft: 60
  },
  container2: {
    paddingLeft: 60,
    padding: 20,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  textSty: {
    color: 'black',
    fontSize: 16
  },
  dateSty: {
    fontSize: 16

  },
  c1: {color: '#FF033E',},
  c2: {color: '#47D990'},
  c3: {color: 'gray'},
  img:{
    width: 25,
    height: 25,
    marginLeft: 35
  },
  priceSty:{
    // paddingLeft: 230
    fontSize: 16
  },
  distanceSty:{
    
     fontSize: 16,
     paddingRight: 140
  },
  imgico:{
    width: 20,
    height: 20
  }
  
});
