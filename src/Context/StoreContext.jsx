import { createContext, useState } from "react";
import { food_list, menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product.food_id === Number(item));
                totalAmount += itemInfo.food_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const emptyCart = () => {
        setCartItems({});
    };

    const placeOrder = (deliveryData) => {
        // You can implement the logic to place an order here
        console.log("Placing order with delivery data:", deliveryData);
        // You might want to clear the cart after placing the order
        // setCartItems({});
    };

    const contextValue = {
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        emptyCart,
        placeOrder,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
