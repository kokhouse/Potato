
module.exports = {
  getAll: 'SELECT * FROM sentence;',
  getByUuid: 'SELECT * FROM sentence WHERE uuid = ?;',
  cleanSentencesTable: 'DELETE FROM sentence;'
};