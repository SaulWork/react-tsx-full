import React from 'react';

type Props = {
    langs: string[]; 
    onChangeLang : (e: "es" | "en" | "fr") => void;
    selectedLang : string
};

const SelectLang = ({langs, onChangeLang, selectedLang}:Props) => {
  const optionsLang = langs.map((l, pos) => <option key={pos} value={l}>{l.toUpperCase()}</option>)

    return (
      <select onChange={(e) => onChangeLang(e.target.value as "es" | "en" | "fr")} value={selectedLang}>
        {optionsLang}
      </select>
    )
}

export default SelectLang