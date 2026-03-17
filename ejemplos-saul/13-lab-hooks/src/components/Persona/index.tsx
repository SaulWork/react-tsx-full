import React, { useState, useMemo } from 'react'

const Persona = () => {
  const [nombre, setNombre] = useState('Charly')
  const [apellido, setApellido] = useState('Falco')
  const [email, setEmail] = useState('cfalco@gmail.com')

const nombreCompleto = useMemo(() => {
                            console.log('nombreCompleto');
                            return <>{nombre} {apellido}</>
                        }, [nombre, apellido]);

    return (
      <div>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /><br />
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} /><br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <hr/>
        <div>
            <span><b>nombre completo:</b> {nombreCompleto}</span>
        </div>
        <div>
            <span><b>email:</b> {email}</span>
        </div>
      </div>
    )
}

export default Persona