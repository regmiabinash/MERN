
import './App.css'
import TaskPage from './pages/task.page.jsx';
import LoginPage from './pages/login.page.jsx';
import RegisterPage from './pages/register.page.jsx';
import Homepage from './pages/home.page.jsx';
import NotfoundPage from './pages/notfound.page.jsx';
import {BrowserRouter , Routes , Route} from 'react-router'

function App() {

  return (
    <main className='h-screen min-w-full tracking-wider'>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>} />
        {/* <Route path='/task' element={<TaskPage/>}/> */}
        <Route path='/' element={<Homepage/>}/>
        {/* dynamic route */}
        {/* <Route path='/product/:id'element={<div>Product Page</div>}/> */}
        {/* not found */}
        <Route path='*' element={<NotfoundPage/>}/>
      </Routes>
      </BrowserRouter>
      {/* <RegisterPage/>
      <LoginPage/>
      <TaskPage/> */}
    </main>
  );
}

export default App

// {"":""}
// xml
// user ={name:'abc'}
// <user>
//    <name>abc</name>
//  </user>

// *rule to be a component
// -component function name start from capital
// -always return single wrap jsx

// *props: it's an object 