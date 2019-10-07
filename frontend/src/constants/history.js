import { createBrowserHistory } from 'history'
const supportsHistory = 'pushState' in window.history
const history = createBrowserHistory({ basename: '', forceRefresh: !supportsHistory })

export default history
