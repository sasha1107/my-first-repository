import { createContext, useReducer, useContext } from 'react';

const CounterContext = createContext(null);

const CounterDispatchContext = createContext(null);

export function CounterContextProvider({ children }) {
    const [countContext, dispatch] = useReducer(
        counterContextReducer,
        initialState
    );
    return (
        <CounterContext.Provider value={countContext}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterContext.Provider>
    );
}
export function useContextCount() {
    return useContext(CounterContext);
}

export function useContextDispatch() {
    return useContext(CounterDispatchContext);
}

function counterContextReducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'sub':
            return {
                ...state,
                count: state.count - 1,
            };
        case 'add2':
            return {
                ...state,
                count2: state.count2 + 1,
            };
        case 'sub2':
            return {
                ...state,
                count2: state.count2 - 1,
            };
        default:
            throw new Error('Unhandled action');
    }
}

const initialState = {
    count : 0,
    count2: 0,
};
