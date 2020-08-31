import { createBrowserHistory, createMemoryHistory } from 'history';
export const history = (typeof window !== 'undefined'
  ? createBrowserHistory()
  : createMemoryHistory());

// export const hashHistory = createHashHistory({})