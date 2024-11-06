module.exports = {
    host: "localhost",
    user: "chimera_user",
    password: "1234",
    database: "chimera_db",
    authPlugins: {
      mysql_native_password: () => () => Buffer.from('1234')
    }
  };