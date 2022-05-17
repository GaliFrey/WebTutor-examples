function openDb(sConnectionString) {
  try {
    oNewDB = undefined;
    oNewDB = new ActiveXObject("ADODB.Connection");
    oNewDB.CommandTimeout = 0;
    oNewDB.Open(sConnectionString)
  } catch (err) {
    throw ('При соединении с базой произошла ошибка: ' + err);
  }

  return oNewDB;
}

function closeDb(oConnectDB) {
  if (oConnectDB != undefined) {
    oConnectDB.Close();
  }

  return undefined;
}

function getSQLData(oConnectDB, sSqlQuery) {
  arrResult = [];

  arrQuery = oConnectDB.Execute(sSqlQuery);
  while (!arrQuery.EOF) {
    if (!arrQuery.BOF && !arrQuery.EOF) {
      oNewObject = new Object();
      for (i = 0; i < arrQuery.Fields.count; i++) {
        oNewObject.SetProperty(arrQuery.Fields(i).name,
            arrQuery.Fields(i).value);
      }
      arrResult.push(oNewObject);
    }
    arrQuery.MoveNext();
  }

  oNewObject = undefined;
  return arrResult;
}


db1 = openDb('Driver=Oracle in OraClient12Home;Data Source=Server;Uid=User;Pwd=Password;');
arrData1 = getSQLData(db1, 'SELECT * FROM Table1');
alert(ArrayCount(arrData1));

db2 = openDb('Provider=SQLOLEDB; Server=10.10.10.10; DataBase=WTDB; UID=User; PWD=Password;');
arrData2 = getSQLData(db2, 'SELECT * FROM subdivisions');
alert(ArrayCount(arrData2));

closeDb(db1);
closeDb(db2);
