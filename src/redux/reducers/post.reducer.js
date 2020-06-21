export function Posts(state = [], action) {
    switch (action.type) {
        case 'fetchSuccess':
            const posts = action.payload;
            return [...posts];
        case 'createsuccess': {
            const post = action.payload;
            const newState = [post, ...state];
            return [...newState]; 
        }
        case 'delete': {
            const index = action.payload;
            const newState = [...state];
            newState.splice(index, 1);
            return [...newState]; 
        }
        default:
            return [...state]
    }
}