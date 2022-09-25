/**
 * Couping is the measure of the degree of interdependence
 *  beetween classes
 */

//------------ tightly coupled ------------

interface MongoDataBase {
  data: string;
}

class Server {
  database: MongoDataBase = { data: "some_data" };
}

//---------- loosely coupled ---------

interface DataBase {}

interface DynamoDataBase extends DataBase {}

class ServerV2 {
  database: DataBase;

  constructor(database: DataBase) {
    this.database = database;
  }
}
