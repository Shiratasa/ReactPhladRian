/* eslint-disable */
import { createRequire } from "module";

{
  /* Values */
}
const require = createRequire(import.meta.url);
var mysql = require("mysql");
var express = require("express");
var fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(cors());

{
  /* SQL Connect */
}
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "PhladRian_Database",
});
connection.connect(function (error) {
  if (error) {
    console.error("Connection failed:\n" + error.stack);
    connection.end();
    throw error;
  } else {
    console.log("Connected as id: " + connection.threadId);
  }
});

{
  /* Item Get */
}
app.get("/Item", function (req, resp) {
  connection.query("SELECT * FROM ItemDonate", function (error, result) {
    if (error) {
      console.error("Query failed:\n" + error.stack);
      connection.end();
      throw error;
    } else {
      resp.send(result);
      console.log(result);
    }
  });
});

{
  /* School Get */
}
app.get("/School", function (req, resp) {
  connection.query("SELECT * FROM ListSchool", function (error, result) {
    if (error) {
      console.error("Query failed:\n" + error.stack);
      connection.end();
      throw error;
    } else {
      resp.send(result);
      console.log(result);
    }
  });
});

{
  /* Category Get */
}
app.get("/Categ", function (req, resp) {
  connection.query("SELECT * FROM ListItem", function (error, result) {
    if (error) {
      console.error("Query failed:\n" + error.stack);
      connection.end();
      throw error;
    } else {
      resp.send(result);
      console.log(result);
    }
  });
});

{
  /* Receiver Post */
}
app.post("/R_regis", function (req, resp) {
  const Username = req.body.Username;
  const Email = req.body.Email;
  const Phone = req.body.Phone;
  const Address = req.body.Address;
  const Student_Card = req.body.Student_Card;
  const School_ID = req.body.School_ID;
  const Grade = req.body.Grade;
  const Image = req.body.Image;
  const Password = req.body.Password;
  const State = req.body.State;
  connection.query(
    "INSERT INTO UserStudent (Username, Email, Phone, Address, Student_Card, School_ID, Grade, Image, Password, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)",
    [
      Username,
      Email,
      Phone,
      Address,
      Student_Card,
      School_ID,
      Grade,
      Image,
      Password,
      State,
    ],
    function (error, result) {
      if (error) {
        console.error("Insert failed:\n" + error.stack);
        connection.end();
        throw error;
      }
    }
  );
});

{
  /* Receiver Get */
}
app.post("/R_login", function (req, resp) {
  const Email = req.body.Email;
  const Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserStudent WHERE Email=? AND Password=?",
    [Email, Password],
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      }
      if (result.length > 0) {
        resp.send(result);
        console.log(result);
      } else {
        resp.send({ message: "Not a Receiver..." });
        console.log("Not a Receiver...");
      }
    }
  );
});

{
  /* Donor Post */
}
app.post("/D_regis", function (req, resp) {
  const Username = req.body.Username;
  const Email = req.body.Email;
  const Phone = req.body.Phone;
  const Address = req.body.Address;
  const Password = req.body.Password;
  const Point = req.body.Point;
  const State = req.body.State;
  connection.query(
    "INSERT INTO UserDonor (Username, Email, Phone, Address, Password, Point, State) VALUES (?, ?, ?, ?, ?, 0, 1)",
    [Username, Email, Phone, Address, Password, Point, State],
    function (error, result) {
      if (error) {
        console.error("Insert failed:\n" + error.stack);
        connection.end();
        throw error;
      }
    }
  );
});

{
  /* Donor Get */
}
app.post("/D_login", function (req, resp) {
  const Email = req.body.Email;
  const Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserDonor WHERE Email=? AND Password=?",
    [Email, Password],
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      }
      if (result.length > 0) {
        resp.send(result);
        console.log(result);
      } else {
        resp.send({ message: "Not a Donor..." });
        console.log("Not a Donor...");
      }
    }
  );
});

{
  /* Sponsor Get */
}
app.post("/S_login", function (req, resp) {
  const Email = req.body.Email;
  const Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserSponsor WHERE Email=? AND Password=?",
    [Email, Password],
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      }
      if (result.length > 0) {
        resp.send(result);
        console.log(result);
      } else {
        resp.send({ message: "Not a Sponsor..." });
        console.log("Not a Sponsor...");
      }
    }
  );
});

{
  /* Admin Get */
}
app.post("/A_login", function (req, resp) {
  const Email = req.body.Email;
  const Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserAdmin WHERE Email=? AND Password=?",
    [Email, Password],
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      }
      if (result.length > 0) {
        resp.send(result);
        console.log(result);
      } else {
        resp.send({ message: "Not an Admin..." });
        console.log("Not an Admin...");
      }
    }
  );
});

{
  /* Name Post */
}
app.post("/N_post", function (req, resp) {
  const Username = req.body.Username;
  connection.query(
    "INSERT INTO AllUser (Username) VALUES (?)",
    [Username],
    function (error, result) {
      if (error) {
        console.error("Insert failed:\n" + error.stack);
        connection.end();
        throw error;
      }
    }
  );
});

{
  /* Name Get */
}
app.post("/N_get", function (req, resp) {
  const Username = req.body.Username;
  connection.query(
    "SELECT * FROM AllUser WHERE Username=?",
    [Username],
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      }
      if (result.length > 0) {
        resp.send(result);
        console.log(result);
      } else {
        resp.send({ message: "New username..." });
        console.log("New username...");
      }
    }
  );
});

{
  /* Email Post */
}
app.post("/E_post", function (req, resp) {
  const Email = req.body.Email;
  connection.query(
    "INSERT INTO AllEmail (Email) VALUES (?)",
    [Email],
    function (error, result) {
      if (error) {
        console.error("Insert failed:\n" + error.stack);
        connection.end();
        throw error;
      }
    }
  );
});

{
  /* Email Get */
}
app.post("/E_get", function (req, resp) {
  const Email = req.body.Email;
  connection.query(
    "SELECT * FROM AllEmail WHERE Email=?",
    [Email],
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      }
      if (result.length > 0) {
        resp.send(result);
        console.log(result);
      } else {
        resp.send({ message: "New email..." });
        console.log("New email...");
      }
    }
  );
});

{
  /* Item Post */
}
app.post("/I_donate", function (req, resp) {
  const Obj = req.body.Obj;
  const Pic1 = req.body.Pic1;
  var F_P1 = req.files.Pic1;
  var F1_name = F_P1.name;
  const Pic2 = req.body.Pic2;
  const Pic3 = req.body.Pic3;
  const Pic4 = req.body.Pic4;
  const Type_ID = req.body.Type_ID;
  const School_ID = req.body.School_ID;
  const Quantity = req.body.Quantity;
  const Quality = req.body.Quality;
  const Detail = req.body.Detail;
  const Fragile = req.body.Fragile;
  const Warning = req.body.Warning;
  const State = req.body.State;
  F_P1.mv('public/Album/'+F_P1.name);
  connection.query(
    "INSERT INTO ItemDonate (Obj, Pic1, Pic2, Pic3, Pic4, Type_ID, School_ID, Quantity, Quality, Detail, Fragile, Warning, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 1)",
    [
      Obj,
      F1_name,
      Pic2,
      Pic3,
      Pic4,
      Type_ID,
      School_ID,
      Quantity,
      Quality,
      Detail,
      Fragile,
      Warning,
      State,
    ],
    function (error, result) {
      if (error) {
        console.error("Insert failed:\n" + error.stack);
        connection.end();
        throw error;
      }
    }
  );
});

{
  /* Admin Example */
}
app.get("/", function (req, resp) {
  connection.query("SELECT * FROM UserAdmin", function (error, rows, fields) {
    if (error) {
      console.error("Query failed:\n" + error.stack);
      connection.end();
      throw error;
    } else {
      rows.forEach((result) => {
        resp.json(result);
      });
    }
  });
});

{
  /* SQL Port */
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
