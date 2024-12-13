import {ADD_TO_CART} from '../Constant'

export const addtoCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};


// export const removefromCart = (data) => {
//     return {
//       type: "REMOVE_FROM_CART",
//       data: data,
//     };
//   };
  