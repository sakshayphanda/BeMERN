export function AuthReducer(state = [], action) {
    switch (action.type) {
        case 'login':
            console.log('login dispatch');
            
            return [...state]     
        default:
            return [...state]     
    }
}