export default function reducer(state = {
    schedule: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_AVAILABILITY_FOR_USER':
            return { ...state, fetching: true }
        case 'FETCH_AVAILABILITY_FOR_USER_REJECTED':
            return { ...state, fetching: false, error: action.payload }
        case 'FETCH_AVAILABILITY_FOR_USER_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                schedule: action.payload
            }
        default:
            return state
    }
}
