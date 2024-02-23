import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const dataArray = [
  {
    title: 'Explore Seamless Travel',
    description:
      'Discover the convenience of hassle-free bus bookings that cater to your travel needs across the enchanting landscapes of Saudi Arabia.',
    image: require('../../assets/image/onboarding1.png'),
    image2: require('../../assets/image/onboarding1(2).png'),
  },
  {
    title: 'Comfort and Quality',
    description:
      'Choose your destination, select your preferred seats, and confirm your reservation within moments. Your travel plans are just a few clicks away!',
    image: require('../../assets/image/onboarding2.png'),
    image2: require('../../assets/image/onboarding2(1).png'),
  },
  {
    title: 'Manage Your Booking',
    description:
      'Effortlessly manage your booking, make changes, view your itinerary, or cancel with ease. Your travel plans are in your hands!',
    image: require('../../assets/image/onboarding3.jpeg'),
    image2: require('../../assets/image/onboarding3(1).jpeg'),
  },
];

const OnBoarding = () => {
  const [showNextButton, setShowNextButton] = useState(true);
  const data = dataArray;
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onComplete = () => {
    navigation.navigate('Welcome');
  };
  const ongoclick = title => {
    if (title === 'Manage Your Booking') {
      navigation.navigate('Welcome');
    }
  };
  const handlePress = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    setCurrentIndex(nextIndex);
    setShowNextButton(false);
    setTimeout(() => {
      setShowNextButton(true);
    }, 200);
  };

  const handleScroll = event => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  const renderItem = ({item, index}) => {
    const containerStyle = [
      styles.listContainer,
      index !== data.length - 1 && styles.firstItem,
      index === data.length - 1 && styles.lastItem,
    ];

    return (
      <SafeAreaView style={styles.container}>
        <View style={containerStyle}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.txttitle}>{item.title}</Text>
          <Text style={styles.txt}>{item.description}</Text>
          <TouchableOpacity onPress={() => ongoclick(item.title)}>
            <Image source={item.image2} style={styles.image2} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.bottomContainer}
        onPress={() => onComplete()}>
        <Text style={styles.txt2}>Skip</Text>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        scrollEnabled={true}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: Dimensions.get('window').height / 20,
    paddingHorizontal: Dimensions.get('window').width / 200,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Dimensions.get('window').width / 10,
  },
  firstItem: {
    marginHorizontal: Dimensions.get('window').width / 8,
  },
  lastItem: {
    marginHorizontal: Dimensions.get('window').width / 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height / 10,
    marginBottom: Dimensions.get('window').height / 5,
    height: Dimensions.get('window').height / 50,
  },
  bottomContainer: {
    height: Dimensions.get('window').height / 20,
    alignSelf: 'flex-end',
    paddingHorizontal: Dimensions.get('window').width / 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button2: {
    alignItems: 'center',
    marginLeft: Dimensions.get('window').height / 20,
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 1.4,
    resizeMode: 'contain',
  },
  image2: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 4,
    resizeMode: 'contain',
  },
  txttitle: {
    color: 'black',
    textAlign: 'center',
    width: Dimensions.get('window').width / 1.5,
    fontSize: 24,
    paddingBottom: 10,
  },
  txt: {
    color: 'grey',
    textAlign: 'center',
    width: Dimensions.get('window').width / 1.5,
  },
  txt2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnBoarding;
