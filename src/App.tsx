import { Provider } from 'react-redux'
import './App.css'
// import { Counter } from './components/Counter/Counter'
import { store } from './store'
import { ToDoList } from './components/ToDoList/ToDoList'

function App() {

  return (
    <>
      <Provider store={store}>
        {/* <Counter /> */}
        <ToDoList />
      </Provider>
    </>
  )
}

export default App
