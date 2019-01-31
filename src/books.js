// Informações de todos os livros disponíveis por essa aplicação.
const books = [{
  code: 0, 
  title: 'A Mão e a Luva',
  year: 1874,
  coverUrl: require('./images/covers/a-mao-e-a-luva.png'),
  summary: require('./content/summaries/a-mao-e-a-luva.md')
}, {
  code: 1, 
  title: 'Dom Casmurro',
  year: 1899,
  coverUrl: require('./images/covers/dom-casmurro.png'),
  summary: require('./content/summaries/dom-casmurro.md')
}, {
  code: 2, 
  title: 'Esaú e Jacó',
  year: 1904,
  coverUrl: require('./images/covers/esau-e-jaco.png'),
  summary: require('./content/summaries/esau-e-jaco.md')
}, {
  code: 3, 
  title: 'Helena',
  year: 1876,
  coverUrl: require('./images/covers/helena.png'),
  summary: require('./content/summaries/helena.md')
}, {
  code: 4, 
  title: 'Iaiá Garcia',
  year: 1878,
  coverUrl: require('./images/covers/iaia-garcia.png'),
  summary: require('./content/summaries/iaia-garcia.md')
}, {
  code: 5, 
  title: 'Memorial de Aires',
  year: 1908,
  coverUrl: require('./images/covers/memorial-de-aires.png'),
  summary: require('./content/summaries/memorial-de-aires.md')
}, {
  code: 6, 
  title: 'Memórias Póstumas de Brás Cubas',
  year: 1881,
  coverUrl: require('./images/covers/memorias-postumas-de-bras-cubas.png'),
  summary: require('./content/summaries/memorias-postumas-de-bras-cubas.md')
}, {
  code: 7, 
  title: 'Quincas Borba',
  year: 1891,
  coverUrl: require('./images/covers/quincas-borba.png'),
  summary: require('./content/summaries/quincas-borba.md')
}, {
  code: 8, 
  title: 'Ressurreição',
  year: 1872,
  coverUrl: require('./images/covers/ressurreicao.png'),
  summary: require('./content/summaries/ressurreicao.md')
}]

/**
 * Buscar informações de determinado livro.
 *
 * @param {string} bookCode Código do livros que deseja buscar.
 * @returns {object} Informações do livro desejado.
 */
export const findBook = (bookCode) => books.find((book) => bookCode === book.code)

export default books