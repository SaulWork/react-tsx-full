import React, { useState } from 'react'
import SelectLang from '../SelectLang'
import Header from '../Header'

type BienvenidaType = { bienvenida: string };

export const LangCtx = React.createContext<BienvenidaType>({bienvenida: ''})

const traducciones = {
  es: {
     bienvenida: 'Bienvenido a mi Startup'
  },
  en: {
     bienvenida: 'Welcome to my Startup'
  },
  fr: {
     bienvenida: 'Bienvenue dans ma Startup'
  }
}

type LangType = keyof typeof traducciones;

const Context = () => {
    
    const [lang, setLang] = useState<LangType>('es')

    return (
      <div>
        <SelectLang langs={Object.keys(traducciones)} onChangeLang={setLang} selectedLang={lang} />

        <LangCtx.Provider value={traducciones[lang]}>
          <Header />
        </LangCtx.Provider>

      </div>
    )
}

export default Context