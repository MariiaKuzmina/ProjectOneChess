
const reducer = (state = {}, action) => {

    switch (action.type) {
      case 'HELLO_REACT':
          let template = 'Penis';
          let iteration = state.iteration;
          if (!iteration || iteration === 5) {
            iteration = 1;
          } else {
              iteration++;
          }

          return { ...state, say : template + iteration, iteration: iteration};
        default:
        return state;
    }
    
  };
  
  export default reducer;
  