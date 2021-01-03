import axios from 'axios';

// Actions
const SET_PETS = 'SET_PETS';

// Action Creators
export const setPets = (pets) => ({
    type: SET_PETS,
    pets
});

// Thunk Creators
export const fetchPets = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("/api/pets");
            dispatch(setPets(data))
        } catch (error) {
            console.log(error);
        }
    }
};

// Initial State
const initialState = [];

// Reducer
export default function petsReducer(state = initialState, action) {
    switch (action.type) {
      case SET_PETS:
        return action.pets;
      default:
        return state;
    }
}
  