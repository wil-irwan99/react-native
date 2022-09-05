import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import AppBackground from "../../shared/components/AppBackground";
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";
import MainContainer from "../../shared/components/MainContainer";
import { useTheme } from "../../shared/context/ThemeContext"
import { useDepedency } from "../../shared/hook/UseDepedency";
import Item from "./components/ProductItem";

const ProductList = () => {
    const theme = useTheme();
    const {productService} = useDepedency();
    const [products, setProducts] = useState([]);
    const [isFetching, setFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [isNext, setIsNext] = useState(true);

    useEffect( () => {
        onGetAllProduct()
    }, [page])

    const onGetAllProduct = async () => {
        setFetching(true)
        try {
            const response = await productService.getAllProduct(page);
            if (page === 1){
                setProducts([
                    ...response
                ])
            } else {
                setProducts( prevState => [
                    ...prevState,
                    ...response
                ])
            }
            setFetching(false)
            setIsNext(true)
            // setProducts([])
            // const response = await productService.getAllProduct();
            // setProducts(response)
            // setFetching(false)
        } catch (e) {
            console.log('Error')
            setFetching(false)
            setIsNext(false)
        }
    }

    const onFetchMore = async () => {
        if (isNext) {
            setPage(prevState => prevState + 1)
        } else {
            onGetAllProduct();
        }
    }

    const onRefresh = async() => {
        setPage(1)
    }

    const onDelete = (index) => {
        console.log('Delete item', products[index])
    }

    const refRows = (index, ref) => {
        row[index] = ref
    }

    const closeRows = (index) => {
    }


    const renderItem = ({item, index}) => {
        return <Item productName={item.productName} idx={index} onDelete={() => onDelete(index)} refRow={refRows} closeRow={() =>closeRow(index)}/>
    }

    return(
        <MainContainer>
            <AppBackground>
                <View style={{margin: theme.spacing.s}}>
                    <HeaderPageLabel text={'Product'}/>
                    <FlatList 
                            data={products} 
                            renderItem={renderItem} 
                            keyExtractor={item => item.id}
                            onRefresh={onRefresh}
                            refreshing={isFetching}
                            onEndReached={onFetchMore}
                            />
                </View>
            </AppBackground>
        </MainContainer>
    )
}

export default ProductList;