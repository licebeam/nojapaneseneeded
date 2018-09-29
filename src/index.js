import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './MainContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainContainer />, document.getElementById('root'));
registerServiceWorker();
