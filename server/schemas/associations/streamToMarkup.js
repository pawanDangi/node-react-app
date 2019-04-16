const relationship = db => {
  // Streams to Markups relationship
  db.Streams.hasOne(db.Markups, { as: 'markup', foreignKey: 'streamId' });
  db.Markups.belongsTo(db.Streams, { foreignKey: 'streamId' });
};

export default relationship;
