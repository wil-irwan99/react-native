import { DATA } from "../data/products"
import { sleep } from "../shared/sleep"

export const productService = () => {
    const getAllProduct = async (page) => {
        const pagePerRow = 20;
        const startIndex = (page -1) * pagePerRow;
        const endIndex = page * pagePerRow
        try {
            return await sleep( (resolve,reject) => {
               const response = DATA.slice(startIndex, endIndex)
                if (response.length === 0){
                    reject('no more data')
                } else {
                    resolve(response)
                }
            }, 1000)
        } catch (e) {
            throw e;
        }
    }
    return {getAllProduct}
}