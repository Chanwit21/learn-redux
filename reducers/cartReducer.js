const INIT_STATE = {
  carts: [],
  countCart: 0,
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SET_CART': {
      const carts = action.payload.carts;
      const countCart = action.payload.countCart;
      return { carts, countCart };
    }
    case 'CREATE_CART': {
      const product = action.payload.product;
      const newCarts = JSON.parse(JSON.stringify(state.carts));
      newCarts.push(product);
      return { carts: newCarts, countCart: newCarts.lenght };
    }
    case 'UPDATE_CART': {
      const product = action.payload.product;
      const productId = action.payload.productId;
      const newCarts = JSON.parse(JSON.stringify(state.carts));
      const idx = newCarts.findIndex((item) => item.id === productId);
      if (idx !== -1) {
        newCarts[idx] = product;
      }
      return { carts: newCarts, countCart: newCarts.lenght };
    }
    case 'DELETE_CART': {
      const productId = action.payload.productId;
      const newCarts = JSON.parse(JSON.stringify(state.carts)).filter((item) => item.id !== productId);
      return { carts: newCarts, countCart: newCarts.lenght };
    }
    default:
      return state;
  }
};

export { cartReducer };
