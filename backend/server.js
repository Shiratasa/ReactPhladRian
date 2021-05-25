/* eslint-disable */
import { createRequire } from "module";
import { fileURLToPath } from 'url';

{
  /* Values */
}
var require = createRequire(import.meta.url);
var mysql = require("mysql");
var express = require("express");
var fileUpload = require("express-fileupload");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var cors = require("cors");
var formidable = require("formidable");
var Buffer = require('buffer/').Buffer;
var fs = require("fs");
var path = require("path");
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var multer = require("multer");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, window.location.origin + "/UpAlbum/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
var upload = multer({ storage: storage });
var app = express();
app.use(fileUpload());
app.use(cors());
app.use(methodOverride());
app.use(
    bodyParser.json({
    keepExtension: true,
    uploadDir: path.join(__dirname, "/files"),
    limit: '50mb'
  })
);
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

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
  /* Receiver Route */
}
app.get("/R_account", function (req, resp) {
  connection.query("SELECT * FROM UserStudent", function (error, result) {
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
app.post("/R_regis", upload.any(), function (req, resp) {
  var Username = req.body.Username;
  var Email = req.body.Email;
  var Phone = req.body.Phone;
  var Address = req.body.Address;
  var Student_Card = req.body.Student_Card;
  var School_ID = req.body.School_ID;
  var Grade = req.body.Grade;
  var Card_Image = req.body.Card_Image;
  var Password = req.body.Password;
  var State = req.body.State;
  connection.query(
    "INSERT INTO UserStudent (Username, Email, Phone, Address, Student_Card, School_ID, Grade, Card_Image, Password, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)",
    [
      Username,
      Email,
      Phone,
      Address,
      Student_Card,
      School_ID,
      Grade,
      Card_Image,
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
  var Email = req.body.Email;
  var Password = req.body.Password;
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
  var Username = req.body.Username;
  var Email = req.body.Email;
  var Phone = req.body.Phone;
  var Address = req.body.Address;
  var Password = req.body.Password;
  var Point = req.body.Point;
  var State = req.body.State;
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
  var Email = req.body.Email;
  var Password = req.body.Password;
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
  var Email = req.body.Email;
  var Password = req.body.Password;
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
  var Email = req.body.Email;
  var Password = req.body.Password;
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
  var Username = req.body.Username;
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
  var Username = req.body.Username;
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
  var Email = req.body.Email;
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
  var Email = req.body.Email;
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
  var Obj = req.body.Obj;
  var Pic1 = req.body.Pic1;
  var Pic2 = req.body.Pic2;
  var Pic3 = req.body.Pic3;
  var Pic4 = req.body.Pic4;
  var Type_ID = req.body.Type_ID;
  var School_ID = req.body.School_ID;
  var Quantity = req.body.Quantity;
  var Quality = req.body.Quality;
  var Detail = req.body.Detail;
  var Fragile = req.body.Fragile;
  var Warning = req.body.Warning;
  var State = req.body.State;
  connection.query(
    "INSERT INTO ItemDonate (Obj, Pic1, Pic2, Pic3, Pic4, Type_ID, School_ID, Quantity, Quality, Detail, Fragile, Warning, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 1)",
    [
      Obj,
      Pic1,
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
var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
