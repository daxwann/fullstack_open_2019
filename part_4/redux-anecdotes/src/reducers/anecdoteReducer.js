const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_ANECDOTE':
      const id = action.data.id;
      const anecdoteToChange = state.find(anecdote => anecdote.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      };
      return state.map(anecdote => {
        return anecdote.id !== id ? anecdote : changedAnecdote;
      });
    case 'ADD_ANECDOTE':
      const content = action.data.content;
      const newAnecdote = {
        content: content,
        id: getId(),
        votes: 0
      }
      return [...state, newAnecdote];
    default:
      return state;
  }
}

// action creaters
export const voteFor = (id) => {
  return ({
    type: 'VOTE_ANECDOTE',
    data: { id }
  });
};

export const addAnecdote = (content) => {
  return ({
    type: 'ADD_ANECDOTE',
    data: { content }
  })
};

export default reducer