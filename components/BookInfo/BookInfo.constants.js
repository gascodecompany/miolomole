import * as S from './BookInfo.style';

export const BookInfoFieldsState = (props) => ({
  title: { value: '' },
  authors: { value: '' },
  illustrators: { value: '' },
  size: { value: '' },
  pages: { value: '' },
  ageIndication: { value: '' },
  genre: { value: '' },
  themes: { value: '' },
  ISBN: { value: '' },
})
  
export const BookInfoFieldsFunction = ({ fields, isLoggedIn }) => ({
  title: {
    ...fields.title,
    name: 'title',
    type: 'editable',
    className: 'title',
    styledComponent: <S.BookInfoTitle isLoggedIn={isLoggedIn} />,
  },
  authors: {
    ...fields.authors,
    name: 'authors',
    type: 'editable',
    label: 'Autoria: ',
    isArray: true,
    styldItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  illustrators: {
    ...fields.illustrators,
    name: 'illustrators',
    type: 'editable',
    label: 'Ilustrações: ',
    isArray: true,
    styldItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  size: {
    ...fields.size,
    name: 'size',
    type: 'editable',
    label: 'Tamanho: ',
    styldItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  pages: {
    ...fields.pages,
    name: 'pages',
    type: 'editable',
    label: 'Páginas: ',
    styldItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  ageIndication: {
    ...fields.ageIndication,
    name: 'ageIndication',
    type: 'editable',
    label: 'Indicação etária: ',
    styldItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  genre: {
    ...fields.genre,
    name: 'genre',
    type: 'editable',
    label: 'Gênero: ',
    isArray: true,
    styldItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  themes: {
    ...fields.themes,
    name: 'themes',
    type: 'editable',
    label: 'Temas: ',
    styldItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    isArray: true,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  ISBN: {
    ...fields.ISBN,
    name: 'ISBN',
    type: 'editable',
    label: 'ISBN: ',
    styldItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
})

export const gridTemplate = () => {
  return `
    grid-template:
      "title"
      "authors"
      "illustrators"
      "size"
      "pages"
      "ageIndication"
      "genre"
      "themes"
      "ISBN"
    ;
  `
}