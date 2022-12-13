
export function manageFriends(state = {friends: []}, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      return {...state, friends:[...state.friends, action.payload]}
    case "friends/remove":
      let newFriends = [...state.friends]
      return {...state, friends: newFriends.splice(action.payload+1, 1)}
    default : return state
  }
}