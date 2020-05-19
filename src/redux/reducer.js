
const showImage = {}

const reducer = (state = showImage, action) => {

  switch (action.type) {

    case 'SHOW_IMAGE':
      return {
        ...state,
        showImage: action.image
      }

    default:
      console.log('The type not exist');
      return state;
  }
}

export default reducer;