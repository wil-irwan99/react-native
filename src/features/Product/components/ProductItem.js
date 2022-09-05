import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { useTheme } from "../../../shared/context/ThemeContext";
import {MaterialIcons} from '@expo/vector-icons';
import {GestureHandlerRootView, Swipeable} from "react-native-gesture-handler";

const Item = ({productName, idx, onDelete}) => {
    const theme = useTheme();
    const styles = styling(theme)
    const leftSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange : [0, 100],
            outputRange : [0,1]
        })
    return(
        <TouchableOpacity onPress={onDelete}>
            <Animated.View style={[styles.deleteBox, {transfrom : [{scale: scale}]}]}>
                <MaterialIcons name={'delete-forever'} size={24} color="white"/> 
            </Animated.View>
        </TouchableOpacity>
    )
    }
    return (
        <GestureHandlerRootView>
            <Swipeable renderLeftAction={leftSwipe}
                    ref={ref => refNow(idx, ref)}
                    onSwipeableWillOpen={closeRow}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}> {productName} </Text>
                        </View>
                    </Swipeable>
        </GestureHandlerRootView>
    )
}

const styling = (theme) => StyleSheet.create({
    item : {
        padding: theme.spacing.s,
        marginVertical : theme.spacing.xs,
        marginHorizontal : theme.spacing.s,
        borderBottomWidth : 1,
        borderBottomColor : theme.colors.secondary
    },
    itemText : {
        fontSize : 16,
        color : theme.colors.foreground,
        fontFamily : 'Poppins-Regular'
    },
    deleteBox : {
        backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'center',
        width : 64,
        flex : 1
    }
})

export default Item;