import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    width:'85%',
    marginTop:10,
    alignContent:'center',
    alignSelf:'center',
    marginHorizontal:20
    
  },
  input: {
    fontFamily:'regular',
    fontSize: 14,
    width:'90%',
    color:"black",
    paddingHorizontal:15, 
      },
  icon: {
    // position: 'absolute',
    color: 'grey',
    paddingRight:15,
  },
});
export default styles;
