export const initialState = {
  // user: undefined,
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log(state.basket);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        alert("Can't Remove!");
      }

      return {
        ...state,
        basket: newBasket,
      };

    // case "ADD_USER":
    //   return {
    //     user: action.user,
    //   };

    default:
      return state;
  }
};

export default reducer;
