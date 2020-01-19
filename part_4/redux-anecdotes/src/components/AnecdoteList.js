import React from 'react';
import { voteFor } from '../reducers/anecdoteReducer';

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState()

  const vote = (id) => {
    return () => {
      store.dispatch(voteFor(id));
    }
  };

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList;