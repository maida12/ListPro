import { Routes, Route,Switch } from 'react-router-dom'
import { useContext } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import MainPage from './MainPage'
import Sidebar from './Sidebar'
import Newproject from './Newproject'
import Createtask from './Createtask'
import TaskList from './TaskList'
import CreateNotes from './CreateNotes'
import ProjectAlbum from './ProjectAlbum'
import { UserContext } from './App'
import Reports from './Reports'
import NotesList from './NotesList'
import TaskDetails from './TaskDetails'
import NotesDetails from './NotesDetails'


function RoutesComp() {

  const userContext = useContext(UserContext)
  return (
    <>
    <Routes>
    
      {userContext.email && (
        <>
        
      
        <Route path='/'  element={<ProjectAlbum/>} />
        <Route path='/ProjectAlbum' element={<ProjectAlbum />} />
        <Route path='/Newproject' element={<Newproject />} />
        <Route path='/Createtask' element={<Createtask />} />
        <Route path='/MainPage' element={<MainPage />} />
        <Route path='/CreateNotes' element={<CreateNotes/>}/>
        <Route path='/TaskList' element={<TaskList/>}/>

        <Route path='/TaskDetails' element={<TaskDetails/>} />
        <Route path='/Reports' element={<Reports/>} />
        <Route path='/NotesList' element={<NotesList/>}/>
        <Route path='/NotesDetails' element={<NotesDetails/>}/>
    
        
        </>
      )}
     
     
      {!userContext.email && (
        <>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/ProjectAlbum' element={<ProjectAlbum />} />
         
          
        </>
      )}
     
    </Routes>
    </>
  )
}

export default RoutesComp






