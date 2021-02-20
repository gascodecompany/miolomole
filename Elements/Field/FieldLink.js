import React from 'react';
import { StyledFieldLink, StyledFieldLinkWarning } from '../../Elements/Field/Field.style';
import { useLocation, useParams } from 'react-router-dom';

export default function FieldFile({value}) {
  const { pathname } = useLocation();
  const { id } = useParams()

  return (
    <>
      { id 
        ?  <StyledFieldLink type='link' state={value} link={`${pathname}/caderno`} className="orangeButton">
          { value ? "Editar conteúdo" : "Criar Conteúdo" }
        </StyledFieldLink>
        : <StyledFieldLinkWarning>Você precisa salvar o conteúdo dinâmico para editar</StyledFieldLinkWarning>
      }
     
    </>
  );
}