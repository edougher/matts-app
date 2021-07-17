const taskCardReducer = (state=[], action) => {
    switch (action.type) {
        // eslint-disable-next-line no-undef
        case 'NEW_TASK':
            return [...state, action.data]
        default:
            return state
    }
}

export default taskCardReducer;