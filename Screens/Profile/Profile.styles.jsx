import { StyleSheet  } from 'react-native'
import { Colors } from '../../Utils/Colors'

export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: Colors.primary,    
    },

    bottomContainer:{
        flex: 1,
        backgroundColor: "#141617",
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        padding: 15,
        paddingBottom: 40,
        gap: 15,

    }, 

    image:{
        flex: 1,
    },

    imageContainer:{
        flex: 0.4,
        maxHeight: 260,
        justifyContent:'center',
        alignItems: 'center',
        gap: 15,
        paddingTop: 15
    },

    sectionHeader:{
        fontSize: 21,
        color: Colors.White,
        fontWeight: '600',
        paddingVertical: 10
    },

    profileImage:{
        maxWidth: 125,
        maxHeight: 125,
        borderRadius: 62.5,
        borderWidth: 3, 
        borderColor: Colors.White
    },

    name: {
        color: Colors.White,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600'
    },

    role:{
        color: Colors.secondary,
        fontSize: 15
    }

})