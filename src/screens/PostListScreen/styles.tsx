import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    height: 50,
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
  titleText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
  listViewContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
  flatListContainer: {
    flex: 1,
    paddingBottom: 30,
  },
});
