import { decrementAction, incrementAction, resetAction } from "./redux/actionCreators.js"
import { decrementType, incrementType, resetType } from "./redux/actionTypes.js"

const incBtn = document.querySelector("#increament")
const resetBtn = document.querySelector("#decreament")
const decBtn = document.querySelector("#Reset")

const numElm = document.querySelector("#num")

const counterReducer = (state = 0, action) => {

    switch (action.type) {
        case incrementType: {
            return state + 1
        }
        case decrementType: {
            return state - 1
        }
        case resetType: {
            return state - state
        }
        default: {
            return state
        }
    }
}

const store = Redux.createStore(counterReducer)

incBtn.addEventListener('click', () => {
    store.dispatch(incrementAction())
    let newValue = store.getState()
    numElm.innerHTML = newValue
})

resetBtn.addEventListener('click', () => {
    store.dispatch(decrementAction())
    let newValue = store.getState()
    numElm.innerHTML = newValue
})

decBtn.addEventListener('click', () => {
    store.dispatch(resetAction())
    let newValue = store.getState()
    numElm.innerHTML = newValue
})