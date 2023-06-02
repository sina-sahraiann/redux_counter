import { incrementType, decrementType, resetType } from './actionTypes.js'

const incrementAction = () => {
    return { type: incrementType }
}

const decrementAction = () => {
    return { type: decrementType }
}

const resetAction = () => {
    return { type: resetType }
}

export {incrementAction, decrementAction, resetAction}

