// Create InitialState
const InitialState = {
    //state items to share go here
    user: {
    }
}

const GET_USER = 'GET_USER'

//action bulders contain the information for the reducer function to change state

export function getUser(userObj){
    //return action object
    return{
        //action always contains a type property and a payload property
        type: GET_USER,
        payload: userObj
    }
}



//Reducer function is the control center of the reducer file. It is what actually changes state, based on infomration recieved from action builders

export default function reducer(state=InitialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return{...state, user: payload}
        default: return state;
    }
}