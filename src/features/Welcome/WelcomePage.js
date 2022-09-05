import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MainContainer from "../../shared/components/MainContainer";
import LottieView from 'lottie-react-native';
import AppBackground from "../../shared/components/AppBackground";
import TitleLabel from "../../shared/components/TitleLabel";
import FormButton from "../../shared/components/FormButton";
import { useNavigation } from "@react-navigation/native";

const WelcomePage = () => {
    const navigate = useNavigation();
    return(
        <MainContainer>
            <AppBackground style={{
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>

            <LottieView
                    autoPlay
                    style={styles.image}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('../../../assets/img/117164-dancing-box.json')}
                />

            <View style={styles.titleContainer}>
                <TitleLabel text = 'POS System'/>
                <TitleLabel subTitle text='Simple Point Of Sales'/>
            </View>
            <FormButton label="Sign In" onClick={() => navigate.replace(ROUTE.LOGIN)}></FormButton>
            </AppBackground>

        </MainContainer>
    )
}

const styles = StyleSheet.create({
    image : {
        width: 200,
        height: 200,
        alignItems: 'center',
    },
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    titleContainer : {
        alignItems: 'center'
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black'
    },
    subtitle: {
        fontSize: 16,
        color: 'black'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'stretch',
        margin: 16
    },
    textButton: {
        color: 'white'
    }
})

export default WelcomePage;