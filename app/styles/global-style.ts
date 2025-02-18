import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const globalStyles = StyleSheet.create({
    backgroung: {
    backgroundColor: Colors.background,
          flex: 1
    },
    text:{
        color: 'black',
        fontSize: 40,
        padding: 50,
    },
    tittle:{
        marginTop: 200, 
        textAlign: 'center',
        fontSize: 40,
    },
    temp:{
        marginTop: 100, 
        textAlign: 'center',
        fontSize: 80,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 100,
        height: 80,
        width: 150,
        backgroundColor: '#ebf1f1',
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 10,
        fontSize: 65,
    },
    tempmenos15:{
        color: '#55ff33',
        marginTop: 100, 
        textAlign: 'center',
        fontSize: 80,
    },
    temp15a25:{
        color: '#335eff',
        marginTop: 100, 
        textAlign: 'center',
        fontSize: 80,
    },
    tempmas25:{
        color: '#ea171b',
        marginTop: 100, 
        textAlign: 'center',
        fontSize: 80,
    },
})