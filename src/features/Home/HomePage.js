import MainContainer from "../../shared/components/MainContainer";
import AppBackground from "../../shared/components/AppBackground";
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import {FontAwesome} from '@expo/vector-icons';
import { useTheme } from "../../shared/context/ThemeContext";
import PromoView from "./components/PromoView";
import MenuView from "./components/MenuView";


const HomePage = () => {
    const theme = useTheme();
    const styles = styling(theme)
    return(
        <MainContainer>
            <AppBackground>
                <View style={{flex : 1, margin: theme.spacing.s}}>
                    <HeaderPageLabel text='POS'/>
                    <View style={styles.container}>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={styles.touchAble}>
                                <FontAwesome name="sticky-note-o" size={24} color={theme.colors.primary}/>
                                <Text style={styles.text}>Add{'\n'} Order</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={styles.touchAble}>
                                <FontAwesome name="user-plus" size={24} color={theme.colors.primary}/>
                                <Text style={styles.text}>Customer{'\n'} Registration</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={styles.touchAble}>
                                <FontAwesome name="money" size={24} color={theme.colors.primary}/>
                                <Text style={styles.text}>Bill{'\n'} Payment</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <HeaderPageLabel text='Promo'/>
                    <View style={{flex : 1}}>
                        <PromoView/>
                    </View>
                    <HeaderPageLabel text='Menu'/>
                    <View style={{flex : 2}}>
                        <MenuView/>
                    </View>
                </View>
            </AppBackground>
        </MainContainer>
    )
}

const styling = (theme) => StyleSheet.create({
    container : {
        flexDirection : "row",
        borderColor : theme.colors.secondary,
        borderWidth : 1,
        borderRadius : theme.radius.m
    },
    menuContainer : {
        flex : 1,
        height : 64,
        justifyContent : "center"
    },
    text : {
        textAlign : "center",
        fontSize : 12,
        color : theme.colors.foreground,
        fontFamily : 'Poppins-Regular'
    },
    touchAble : {
        alignItems: "center"
    }
})

export default HomePage;