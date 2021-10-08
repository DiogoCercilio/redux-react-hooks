import store from './store';
import { Provider } from 'react-redux';

import CourseList from './components';
import Footer from './components/footer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CourseList>
        </CourseList>
      </div>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
