import { FlatList } from "react-native"
import MenuItem from "./MenuItem"

const MenuView = () => {
    const menus = [
        {id : 1, menu : 'Menu 1', icon : 'glass'},
        {id : 2, menu : 'Menu 2', icon : 'glass'},
        {id : 3, menu : 'Menu 3', icon : 'glass'},
        {id : 4, menu : 'Menu 4', icon : 'glass'},
        {id : 5, menu : 'Menu 5', icon : 'user'},
        {id : 6, menu : 'Menu 6', icon : 'glass'},
        {id : 7, menu : 'Menu 7', icon : 'film'},
        {id : 8, menu : 'Menu 8', icon : 'glass'},
        {id : 9, menu : 'Menu 9', icon : 'heart'},
        {id : 10, menu : 'Menu 10', icon : 'music'},
        {id : 11, menu : 'Menu 11', icon : 'music'},
        {id : 12, menu : 'Menu 12', icon : 'music'}
    ]

    const renderItem = ({item}) => {
            return <MenuItem product={item}/>
    }

    return(
        <FlatList 
            data={menus} 
            renderItem={renderItem} 
            numColumns={3}
            columnWrapperStyle={{justifyContent : "space-between"}}
            keyExtractor={item => item.id}
            />
    )
}

export default MenuView;