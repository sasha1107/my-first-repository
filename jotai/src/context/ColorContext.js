import { createContext, useContext, useReducer } from 'react';

const ColorContext = createContext(null);

const ColorDispatchContext = createContext(null);

export function ColorProvider({ children }) {
    const [color, dispatch] = useReducer(colorReducer, initialState);
    return (
        <ColorContext.Provider value={color}>
            <ColorDispatchContext.Provider value={dispatch}>
                {children}
            </ColorDispatchContext.Provider>
        </ColorContext.Provider>
    );
}
export function useTasks() {
    return useContext(ColorContext);
}

export function useTasksDispatch() {
    return useContext(ColorDispatchContext);
}

function colorReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                color: action.color,
            };
        default:
            throw new Error('Unhandled action');
    }
}

const initialState = {
    color: 'red',
};
