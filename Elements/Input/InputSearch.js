import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import SearchIcon from '../../images/js/search-icon'
import * as S from './Input.style';

export default function InputSearch({ placeholder, onChange, setFields, ...props }) {
  return (
    <S.InputSearchContainer>
      <S.InputSearch
        {...props}
        onChange={({ target }) => (onChange
          ? onChange({ target, setFields })
          : inputChange({ target, setFields })
        )}
        maskChar=""
        placeholder={placeholder}
      />
      <SearchIcon />
    </S.InputSearchContainer>
  );
}
