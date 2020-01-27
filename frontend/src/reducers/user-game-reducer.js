const initialState = {
  fetchStatus: true,
  tournament: {},
  games: [],
};

function userGameReducer(prevState = initialState, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}

export default userGameReducer;
