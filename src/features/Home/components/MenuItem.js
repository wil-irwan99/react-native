import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../../shared/context/ThemeContext"
import {FontAwesome} from "@expo/vector-icons"

const MenuItem = ({product}) => {
    const theme = useTheme();
    const styles = styling(theme)
    return(
        <TouchableOpacity style={{alignItems : 'center'}}>
            <View style={styles.circularMenu}>
                <FontAwesome name={product.icon} size={32} color="black"/>
            </View>
            <Text>{product.menu}</Text>
        </TouchableOpacity>
    )
}

const styling = (theme) => StyleSheet.create({
    circularMenu : {
        width : 64,
        height : 64,
        borderColor : theme.colors.primary,
        borderWidth : 2,
        borderRadius : theme.radius.xl,
        overflow : 'hidden',
        justifyContent : "center",
        alignItems : "center",
        margin : theme.spacing.s
    },
})

export default MenuItem;