import { shoeArr } from "../data"
import { TANG_SO_LUONG, GIAM_SO_LUONG } from "../data"
const initialState = {
    shoeArr: shoeArr,
    cart: [],
    detail: {}
}
export let shoeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "THEM_SAN_PHAM": {
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex((item) =>{
                return item.id === payload.id
            })
            if (index !== -1) {
                
                cloneCart[index].quantity += 1;
            } else {
                const newItem = {
                ...payload,
                quantity: 1,
                };
                cloneCart.push(newItem);
            }
            return {
                ...state,
                cart: cloneCart,
            }
        };
        case "TANG_GIAM": {
            const cloneCart = [...state.cart];
            const index = cloneCart.findIndex((item) => item.id === payload.idShoe);
  
            if (index !== -1) {
                if (payload.options === TANG_SO_LUONG) {
                    cloneCart[index].quantity++;
                } 
                else {
                    cloneCart[index].quantity--;
                    if (cloneCart[index].quantity === -1) {
                        cloneCart.splice(index, 1);
                    }
                }
            
            }
            return {
                ...state,
                cart: cloneCart,
            }
        };

        case "XOA_SAN_PHAM": {
            const cloneCart = [...state.cart];
            const filterCart = cloneCart.filter((item) => item.id === payload.id);
            return {
                ...state,
                cart: filterCart,
            }
        };
        case "XEM_CHI_TIET": {
            return {
                ...state,
                detail: payload,
            }
        }
        default:
           return state
    }
}