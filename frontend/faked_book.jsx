import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {logout} from './actions/session_actions';
import {merge} from 'lodash'

import {createComment, getCommentsForPost} from './util/comment_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.merge = merge;
  window.createComment= createComment;
  window.getCommentsForPost = getCommentsForPost;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        user: {[window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.logout = logout;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});