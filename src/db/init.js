const Database = require("./config");

const initDb = {
  async init() {
    /* Await ==> faz com que a leitura do programa seja "pausada" enquanto colhe a info Database,
     após coleta de dados o a leitura continua. Await só pode ser usado com 'async' como nome da função.*/
    const db = await Database()

    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
      )`);

    await db.exec(`CREATE TABLE questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        read INT,
        room INT 
      )`);

      await db.close()
  }
};

initDb.init();