export function AuthReducer(state = {
    text: ''
}, action) {
    switch (action.type) {
        case 'login':
            const newState = {...state};
            newState.text = 'Dispatched'
            return {...newState};   
        default:
            return {...state};  
    }
}