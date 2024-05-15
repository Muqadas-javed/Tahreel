import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {LOGOUT} from '../../store/actions/ActionTypes';
import Color from '../../theme/colors/Color';
import Images from '../../assets/Images';
import Textfield from '../../Components/Textfield';
import MyHeader from '../../Components/Header';
import Icon from '../../theme/Icons';

const CustomAlert = ({
  visible,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalText}>{message}</Text>
          <View style={styles.modalbuttonContainer}>
            <TouchableOpacity style={styles.modalbutton} onPress={onClose}>
              <Text style={styles.modalbuttonText}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalbutton} onPress={onConfirm}>
              <Text style={styles.modalbuttonText}>{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ProfileScreen = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isDeleteAccountVisible, setDeleteAccountVisible] = useState(false);
  const [isTermsModalVisible, setTermsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    setAlertVisible(true);
  };

  const handleCancel = () => {
    setAlertVisible(false);
    setDeleteAccountVisible(false);
  };

  const handleConfirm = () => {
    AsyncStorage.removeItem('userInfo').then(() => {
      dispatch({type: LOGOUT, payload: null});
    });
    setAlertVisible(false);
    setDeleteAccountVisible(false);
  };

  const handleDeleteAccount = () => {
    setDeleteAccountVisible(true);
  };
  const handleTermsModalOpen = () => {
    setTermsModalVisible(true);
  };

  const handleTermsModalClose = () => {
    setTermsModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <MyHeader isTitle={'true'} isButton={true} title={'Profile'} />
      <CustomAlert
        visible={isAlertVisible}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        title="Logout"
        message="Are you sure you want to logout?"
        confirmText=" YES "
      />
      <CustomAlert
        visible={isDeleteAccountVisible}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        title="Delete Account"
        message="Are you sure you want to delete your account?"
        confirmText=" YES "
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isTermsModalVisible}
        onRequestClose={handleTermsModalClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Terms and Conditions</Text>
            <Text style={styles.modalText}>
              1. This Agreement sets forth the terms for use of the Service by
              Shippers Agreement.{' '}
            </Text>
            <Text style={styles.modalText}>
              {' '}
              2. By signing up and registering with Tarheel.pk by accessing or
              using the Service, you are accepting this Agreement,
            </Text>
            <Text style={styles.modalText}>
              {' '}
              3. On behalf of yourself or the company, entity or organization
            </Text>
            <Text style={styles.modalText}>
              {' '}
              4. That you represent, and you represent and warrant that you have
              the right, authority, and capacity to enter into this Agreement,{' '}
            </Text>
            <Text style={styles.modalText}>
              {' '}
              5. On behalf of yourself or the company, entity or organization
              that you represent.
            </Text>
            <TouchableOpacity
              style={styles.modalbutton}
              onPress={handleTermsModalClose}>
              <Text style={styles.modalbuttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.circle}>
        <Image source={Images.User1} style={styles.image} />
      </View>
      <View style={styles.userinfo}>
        <Textfield text={'Adam Smith'} size={20} styles={styles.username} />
        <Textfield text={'adam.smith@gmail.com'} />
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleTermsModalOpen}>
          <View style={styles.iconBtn}>
            <Icon
              name={'privacy-tip'}
              size={18}
              type={'material'}
              color={Color.primary}
            />
            <Text style={styles.buttonText}>Privacy Policy</Text>
            <Icon
              name={'arrow-forward-ios'}
              size={16}
              type={'material'}
              color={Color.grey}
              style={styles.iconArrow}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleTermsModalOpen}>
          <View style={styles.iconBtn}>
            <Icon
              name={'file-text-o'}
              size={16}
              type={'font-awesome'}
              color={Color.primary}
            />
            <Text style={styles.buttonText}>Terms and Conditions</Text>
            <Icon
              name={'arrow-forward-ios'}
              size={16}
              type={'material'}
              color={Color.grey}
              style={styles.iconArrow}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleDeleteAccount}>
          <View style={styles.iconBtn}>
            <Icon
              name={'lock'}
              size={18}
              type={'feather'}
              color={Color.primary}
            />
            <Text style={styles.buttonText}>Delete Account</Text>
            <Icon
              name={'arrow-forward-ios'}
              size={16}
              type={'material'}
              color={Color.grey}
              style={styles.iconArrow}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
          <View style={styles.iconBtn}>
            <Icon
              name={'logout'}
              size={16}
              type={'AntDesign'}
              color={Color.primary}
            />
            <Text style={styles.buttonText}>Log Out</Text>
            <Icon
              name={'arrow-forward-ios'}
              size={16}
              type={'material'}
              color={Color.grey}
              style={styles.iconArrow}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  Txt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    paddingBottom: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 24,
  },
  modalText: {
    marginBottom: 15,
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    padding: 14,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    justifyContent: 'space-between',
  },
  modalbuttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  modalbuttonText: {
    color: Color.primary,
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
  },
  iconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: Color.primary,
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 16,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 7,
    borderColor: Color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '20%',
    left: '30%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  userinfo: {
    position: 'absolute',
    top: '45%',
    left: '33%',
  },
  username: {
    fontWeight: '500',
    alignSelf: 'center',
  },
  buttonGroup: {
    position: 'absolute',
    marginTop: 60,
    alignSelf: 'center',
    top: '50%',
    width: '80%',
    backgroundColor: '#F8F8F8',
    margin: 30,
    borderRadius: 10,
  },
  iconArrow: {
    marginLeft: 'auto',
  },
});

export default ProfileScreen;
