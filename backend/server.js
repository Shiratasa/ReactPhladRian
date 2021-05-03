/* eslint-disable */
import { createRequire } from "module";

{
  /* Values */
}
const require = createRequire(import.meta.url);
var express = require("express");
var mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(express.json());
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
  /* Receiver Post */
}
app.post("/R_regis", function (req, resp) {
  const Username = req.body.Username;
  const Email = req.body.Email;
  const Image = req.body.Image;
  const Password = req.body.Password;
  const State = req.body.State;
  connection.query(
    "INSERT INTO UserStudent (Username, Email, Image, Password, State) VALUES (?, ?, ?, ?, 1)",
    [Username, Email, Image, Password, State],
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
  const Username = req.body.Username;
  const Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserStudent WHERE Username=? AND Password=?",
    [Username, Password],
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
  const Password = req.body.Password;
  const Point = req.body.Point;
  const State = req.body.State;
  connection.query(
    "INSERT INTO UserDonor (Username, Email, Password, Point, State) VALUES (?, ?, ?, 0, 1)",
    [Username, Email, Password, Point, State],
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
  const Username = req.body.Username;
  const Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserDonor WHERE Username=? AND Password=?",
    [Username, Password],
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
  const Username = req.body.Username;
  const Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserSponsor WHERE Username=? AND Password=?",
    [Username, Password],
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
  const Username = req.body.Username;
  const Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserAdmin WHERE Username=? AND Password=?",
    [Username, Password],
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
