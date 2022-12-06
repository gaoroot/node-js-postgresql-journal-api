module.exports = (sequelize, Sequelize) => {
  const Journal = sequelize.define("journal", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    tag: {
      type: Sequelize.STRING
    }
  });

  return Journal;
};
