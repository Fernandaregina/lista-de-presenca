
import './styles.css'
// useState são hooks
import React, { useState, useEffect } from "react";

import { Card } from '../componentes/card';

// função quando alguem digita o nome e salvando ela
export function Home() {
  const [studentName,setStudentName] = useState ('') ;
  const [students,setStudents] = useState ([]) ;
  const [user, setUser] = useState ({name: "", avatar: ""})

  function handleAddStudent (){
    const newStudent = {
      name: studentName, 
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit'
      })
    };
    // salvando as informações anteriores com as novas - e formar a listagem
    setStudents (prevState =>[...prevState, newStudent]);
  }
  
  useEffect(() => {
    fetch('https://api.github.com/users/Fernandaregina')
    .then( (response) => response.json())
    .then( (data) => {
      setUser({
      name: data.name,
      avatar: data.avatar_url,
      })

    })
  })
  
  return(
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil " />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite seu Nome"
        onChange={e => setStudentName(e.target.value)} 
      />
      <button 
        type="button" 
        onClick={handleAddStudent}>
          Adicionar
      </button>

      { 
      students.map(student => (
        <Card 
        // key normalmente utilizamos ID 
        key={student.time}
        name={student.name} 
        time={student.time} 
        /> )
        
      )}
      
    </div>
  )
  
 } 



