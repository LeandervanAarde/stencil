import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
        flex: .6,
        borderWidth: 3,
        borderRadius: 9,
        borderColor: Colors.White,
        elevation: 3,
        overflow: 'hidden'
  },
  image:{
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 9
  },
  imageContainer:{
    width: 100,
    aspectRatio: 1/1,
    backgroundColor:'red',
    borderRadius: 50,
    borderWidth: 3, 
    borderColor: Colors.White,
    overflow: 'hidden',
    margin: 10,

  },

  ribbon:{
    height: 70,
    backgroundColor: 'rgba(0, 0, 0 , 0.5)',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },

  yesContainer:{
    paddingHorizontal: 10,
    borderColor: Colors.Success,
    borderWidth: 3, 
    borderRadius: 3,
    // paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    borderRadius: 9
  },

  yes:{
    color: Colors.Success,
    fontSize: 18,
    fontWeight: 700
  },

  noContainer:{
    paddingHorizontal: 10,
    borderColor: Colors.Danger,
    borderWidth: 3, 
    borderRadius: 3,
    // paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    borderRadius: 9
  },

  no:{
    color: Colors.Danger,
    fontSize: 18,
    fontWeight: 700
  },

  label:{
    color: Colors.White,
    fontSize: 14
  }
});
