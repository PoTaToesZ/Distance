import { View, Text, FlatList, StyleSheet, Dimensions, Image, MapProgress } from 'react-native';
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
    if (price == '3.000,000 đ') {
      return 2;
    }
    if (price == '87,000 đ') {
      return 3;
    }
  };
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#fff',
        height: 1,
        borderStartWidth: 100,
        
      }}
    />
  );
  const deli = [
    {
      label: 'Nạp nhiên liệu',
      id: '1',
      date: '24 thg 12',
      distance: '6 km',
      price: '87,000 đ',
      image: require('@app/assets/images/odometer.png'),
    },
    {
      label: 'Vận chuyển hàng hóa',
      id: '2',
      date: '24 thg 11',
      distance: '11 km',
      price: '1.000,000 đ',
      image: require('@app/assets/images/odometer.png'),
    },
    {
      label: 'Vận chuyển hàng hóa',
      id: '3',
      date: '01 thg 12',
      distance: '8 km',
      price: '3.000,000 đ',
      image: require('@app/assets/images/odometer.png'),
    },
    {
      label: 'Nạp nhiên liệu tiếp theo',
      id: '4',
      date: '04 thg 12',
      distance: '14 km',
      price: '1 km trước',
      image: require('@app/assets/images/odometer.png'),
    },
  ];
  return (
    <View style={{ backgroundColor: '#fff', flexDirection: 'row', marginVertical: 20, }}>
      <View style={{ paddingTop: 100 }}>
        <StepProgressBar
          orientation={'vertical'}
          stepColor="lightgreen"
          activeStep={2}
          completedBarColor={'#FF033E'}
          stepWidth={100}
          stepHeight={60}
          barLength={70}
          barThickeness={6}
          data={[
            {},
            {},
            {},
            {},
          ]}
          barColor={'lightgrey'}
          labelTextStyle={{ fontFamily: 'roboto', color: 'black', fontSize: 16 }}
          renderStep={({ index }) => {
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
                  <FontAwesome5 name="gas-pump" size={30} color={'white'} style={{ paddingLeft: 13, paddingTop: 8 }} />
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
                  <Feather name="package" size={30} color={'white'} style={{ paddingLeft: 11, paddingTop: 9 }} />
                </View>
              );
            } else if (index === 2) {
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
                  <Feather name="package" size={30} color={'white'} style={{ paddingLeft: 11, paddingTop: 9 }} />
                </View>
              );
            }
            else if (index === 3) {
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
                  <MaterialIcons name="local-gas-station" size={30} color={'#FFAE42'} style={{ paddingLeft: 13, paddingTop: 8 }} />
                </View>
              );
            }
          }}
        />
      </View>
      <View style={{ marginLeft: -80, paddingTop: 90 }}>
        {deli.map(item => {
          return (
            <View style={styles.bigContainer}>
              <View style={styles.container1}>
                <Text style={styles.textSty}>{item.label}</Text>
                <Text style={styles.dateSty}>{item.date}</Text>
              </View>
              <View style={styles.container2}>
                <Image source={item.image} style={styles.img} />
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
              <View style={{height: 1, borderEndWidth: 300,margin: 10}}/>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Menu;
const styles = StyleSheet.create({
  bigContainer: { marginHorizontal: 20, margin: -10 },
  container1: {
    marginHorizontal: 70,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    marginVertical: 15,
    marginHorizontal: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 6
  },
  textSty: {
    color: 'black',
    fontSize: 16,
    top: 20
  },
  dateSty: {
    fontSize: 16,
    top: 20,
    color: 'black',
    left: 20
  },
  c1: { color: '#FF033E', },
  c2: { color: '#47D990' },
  c3: { color: 'gray' },
  img: {
    width: 30,
    height: 30,
  },
  priceSty: {
    fontSize: 16,
  },
  distanceSty: {
    fontSize: 16,
  },
});

