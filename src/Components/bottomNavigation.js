import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper"

export default function BottomBar() {
    const navigation = useNavigation();
    return(
        <View style={styles.bottomBar}>

            <Button 
            contentStyle={styles.button} 
            icon="home" 
            onPress={() => navigation.navigate("Home")}>
                Home
            </Button>

            <Button 
            contentStyle={styles.button} 
            icon="account" 
            onPress={() => navigation.navigate("Settings")}>
                Settings
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        bottom: 0
      },

    button: {
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: '2%' 
    }
})