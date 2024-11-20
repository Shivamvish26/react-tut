import React,{useContext} from 'react'
import NoteContext from '../../Context/notes/Notecontext'

const About = () => {

  const a = useContext(NoteContext)

  return (
    <div>
        <h1>This is about {a.name} and he is in class {a.class}</h1>
    </div>
  )
}

export default About
