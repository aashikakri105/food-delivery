import { useState, createContext, useMemo } from "react";
import { food_list } from "../assets/assets";
import PropTypes from "prop-types";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev;

            const newCart = { ...prev };
            if (prev[itemId] === 1) {
                delete newCart[itemId];
            } else {
                newCart[itemId] -= 1;
            }
            return newCart;
        });
    };

    const getTotalCartAmount = useMemo(() => {
        return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
            const itemInfo = food_list.find((product) => product._id === Number(itemId));
            return itemInfo ? total + itemInfo.price * quantity : total;
        }, 0);
    }, [cartItems]);

    const contextValue = useMemo(
        () => ({
            food_list,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            getTotalCartAmount,
        }),
        [cartItems, getTotalCartAmount]
    );

    return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
