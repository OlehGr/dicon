import React from 'react';
import './index.css';
import store from './redux/redux-store'
// Импортировали функцрию присваивания в index.js
import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


const Rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <App store={store} />
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      );      
}

Rerender();

// store.subscribe(() => {
//   Rerender();
// }); //2. Передаём созданную в доке функцию рендеринга дерева,
// // и теперь имеем к ней доступ в store