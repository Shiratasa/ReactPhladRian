/* eslint-disable */
import { createRequire } from "module";
import { fileURLToPath } from "url";

{
  /* Values */
}
var require = createRequire(import.meta.url);
var mysql = require("mysql");
var express = require("express");
var fileUpload = require("express-fileupload");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var cors = require("cors");
var formidable = require("formidable");
var Buffer = require("buffer/").Buffer;
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
    limit: "50mb",
  })
);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
var mailValueR = "x";
var mailValueD = "x";
var mailValueS = "x";
var mailValueA = "x";

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
  /* Account List Get */
}
app.get("/R_list", function (req, resp) {
  connection.query(
    "SELECT * FROM UserStudent WHERE Email = ? AND State=1",
    [mailValueR],
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});
app.get("/D_list", function (req, resp) {
  connection.query(
    "SELECT * FROM UserDonor WHERE Email = ? AND State=1",
    [mailValueD],
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});
app.get("/S_list", function (req, resp) {
  connection.query(
    "SELECT * FROM UserSponsor WHERE Email = ? AND State=1",
    [mailValueS],
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});
app.get("/A_list", function (req, resp) {
  connection.query(
    "SELECT * FROM UserAdmin WHERE Email = ? AND State=1",
    [mailValueA],
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Item List Get */
}
app.get("/Item", function (req, resp) {
  connection.query(
    "SELECT * FROM ItemDonate WHERE State=1 ORDER BY Item_ID DESC",
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Reward List Get */
}
app.get("/Reward", function (req, resp) {
  connection.query(
    "SELECT * FROM ItemReward WHERE State=1 ORDER BY Reward_ID DESC",
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Item List Get */
}
app.get("/Wish/:Student_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM WebWishlist
     JOIN ItemDonate ON WebWishlist.Item_ID = ItemDonate.Item_ID 
     WHERE WebWishlist.Student_ID=${req.params.Student_ID} AND WebWishlist.State=1`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* DonorItem List Get */
}
app.get("/DonorItem/:Donor_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM ItemDonate WHERE Donor_ID = ${req.params.Donor_ID} AND State=1 ORDER BY Item_ID DESC`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* SponsorItem List Get */
}
app.get("/SponsorItem/:Sponsor_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM ItemReward WHERE Sponsor_ID = ${req.params.Sponsor_ID} AND State=1 ORDER BY Reward_ID DESC`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Item Detail Get */
}
app.get("/Item/:Item_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM ItemDonate 
   JOIN ListItem ON ItemDonate.Type_ID = ListItem.Type_ID 
   JOIN ListSchool ON ItemDonate.School_ID = ListSchool.School_ID 
   JOIN AllCondition ON ItemDonate.Quality = AllCondition.Quality 
   JOIN AllFragility ON ItemDonate.Fragile = AllFragility.Fragile 
   WHERE ItemDonate.Item_ID = ${req.params.Item_ID} AND ItemDonate.State=1`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Reward Detail Get */
}
app.get("/Reward/:Reward_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM ItemReward
   JOIN ListReward ON ItemReward.Type_ID = ListReward.Type_ID  
   JOIN AllFragility ON ItemReward.Fragile = AllFragility.Fragile 
   WHERE ItemReward.Reward_ID = ${req.params.Reward_ID} AND ItemReward.State=1`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Receiver Profile Get */
}
app.get("/R_Account/:Student_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM UserStudent 
   JOIN ListSchool ON UserStudent.School_ID = ListSchool.School_ID
   JOIN AllGrade ON UserStudent.Grade = AllGrade.Grade 
   WHERE UserStudent.Student_ID = ${req.params.Student_ID} AND UserStudent.State=1`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Receiver Profile Get */
}
app.get("/D_Account/:Donor_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM UserDonor
    WHERE Donor_ID = ${req.params.Donor_ID} AND State=1`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Sponsor Profile Get */
}
app.get("/S_Account/:Sponsor_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM UserSponsor
    JOIN ListCompany ON UserSponsor.Company_ID = ListCompany.Company_ID
    WHERE UserSponsor.Sponsor_ID = ${req.params.Sponsor_ID} AND UserSponsor.State=1`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* School List Get */
}
app.get("/School", function (req, resp) {
  connection.query(
    "SELECT * FROM ListSchool WHERE State=1",
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Company List Get */
}
app.get("/Company", function (req, resp) {
  connection.query(
    "SELECT * FROM ListCompany WHERE State=1",
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Fragile List Get */
}
app.get("/Frag", function (req, resp) {
  connection.query("SELECT * FROM AllFragility", function (error, result) {
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
  /* Quality List Get */
}
app.get("/Qual", function (req, resp) {
  connection.query("SELECT * FROM AllCondition", function (error, result) {
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
  /* Grade List Get */
}
app.get("/Grade", function (req, resp) {
  connection.query("SELECT * FROM AllGrade", function (error, result) {
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
  /* Item Type Get */
}
app.get("/Categ_I", function (req, resp) {
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
  /* Reward Type Get */
}
app.get("/Categ_G", function (req, resp) {
  connection.query("SELECT * FROM ListReward", function (error, result) {
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
  /* Reward Type Get */
}
app.get("/Categ_R", function (req, resp) {
  connection.query("SELECT * FROM ListReward", function (error, result) {
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
  /* Receiver Registration Post */
}
app.post("/R_regis", upload.any(), function (req, resp) {
  var Username = req.body.Username;
  var Email = req.body.Email;
  var Phone = req.body.Phone;
  var ZIP = req.body.ZIP;
  var Address = req.body.Address;
  var Student_Card = req.body.Student_Card;
  var School_ID = req.body.School_ID;
  var Grade = req.body.Grade;
  var Card_Image = req.body.Card_Image;
  var Password = req.body.Password;
  var Chance = req.body.Chance;
  var State = req.body.State;
  connection.query(
    "INSERT INTO UserStudent (Username, Email, Phone, Address, Student_Card, School_ID, Grade, Card_Image, Password, ZIP, Chance, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 5, 1)",
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
      ZIP,
      Chance,
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
  /* Receiver Update Post */
}
app.post("/R_update/:Student_ID", upload.any(), function (req, resp) {
  var Username = req.body.Username;
  var Phone = req.body.Phone;
  var Address = req.body.Address;
  var ZIP = req.body.ZIP;
  var Student_Card = req.body.Student_Card;
  var School_ID = req.body.School_ID;
  var Card_Image = req.body.Card_Image;
  connection.query(
    `UPDATE UserStudent SET
     Username = CASE
     WHEN '${Username}' != '' THEN '${Username}'
     ELSE Username
     END,
     Phone = CASE
     WHEN '${Phone}' != '' THEN '${Phone}'
     ELSE Phone
     END,
     Address = CASE
     WHEN '${Address}' != '' THEN '${Address}'
     ELSE Address
     END,
     ZIP = CASE
     WHEN '${ZIP}' != '' THEN '${ZIP}'
     ELSE ZIP
     END,
     Student_Card = CASE
     WHEN '${Student_Card}' != '' THEN '${Student_Card}'
     ELSE Student_Card
     END,
     School_ID = CASE
     WHEN '${School_ID}' != '' THEN '${School_ID}'
     ELSE School_ID 
     END,
     Card_Image = CASE
     WHEN '${Card_Image}' != '' THEN '${Card_Image}'
     ELSE Card_Image
     END
     WHERE Student_ID = ${req.params.Student_ID}`,
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
  /* Donor Update Post */
}
app.post("/D_update/:Donor_ID", upload.any(), function (req, resp) {
  var Username = req.body.Username;
  var Phone = req.body.Phone;
  var Address = req.body.Address;
  var ZIP = req.body.ZIP;
  connection.query(
    `UPDATE UserDonor SET
     Username = CASE
     WHEN '${Username}' != '' THEN '${Username}'
     ELSE Username
     END,
     Phone = CASE
     WHEN '${Phone}' != '' THEN '${Phone}'
     ELSE Phone
     END,
     Address = CASE
     WHEN '${Address}' != '' THEN '${Address}'
     ELSE Address
     END,
     ZIP = CASE
     WHEN '${ZIP}' != '' THEN '${ZIP}'
     ELSE ZIP
     END
     WHERE Donor_ID = ${req.params.Donor_ID}`,
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
  /* Sponsor Update Post */
}
app.post("/S_update/:Sponsor_ID", upload.any(), function (req, resp) {
  var Username = req.body.Username;
  var Staff_Card = req.body.Staff_Card;
  var Company_ID = req.body.Company_ID;
  var Phone = req.body.Phone;
  connection.query(
    `UPDATE UserSponsor SET
     Username = CASE
     WHEN '${Username}' != '' THEN '${Username}'
     ELSE Username
     END,
     Staff_Card = CASE
     WHEN '${Staff_Card}' != '' THEN '${Staff_Card}'
     ELSE Staff_Card
     END,
     Company_ID = CASE
     WHEN '${Company_ID}' != '' THEN '${Company_ID}'
     ELSE Company_ID
     END,
     Phone = CASE
     WHEN '${Phone}' != '' THEN '${Phone}'
     ELSE Phone
     END
     WHERE Sponsor_ID = ${req.params.Sponsor_ID}`,
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
  /* PassR Update Post */
}
app.post("/P_updateR/:Student_ID", upload.any(), function (req, resp) {
  var Password = req.body.Password;
  connection.query(
    `UPDATE UserStudent SET
     Password = CASE
     WHEN '${Password}' != '' THEN '${Password}'
     ELSE Password
     END
     WHERE Student_ID = ${req.params.Student_ID}`,
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
  /* PassR Check Get */
}
app.post("/P_checkR/:Student_ID", function (req, resp) {
  var Password = req.body.Password;
  connection.query(
    `SELECT * FROM UserStudent WHERE Student_ID = ${req.params.Student_ID} AND BINARY Password='${Password}' AND State=1`,
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
        resp.send({ message: "Fake password..." });
        console.log("Fake password...");
      }
    }
  );
});

{
  /* PassD Update Post */
}
app.post("/P_updateD/:Donor_ID", upload.any(), function (req, resp) {
  var Password = req.body.Password;
  connection.query(
    `UPDATE UserDonor SET
     Password = CASE
     WHEN '${Password}' != '' THEN '${Password}'
     ELSE Password
     END
     WHERE Donor_ID = ${req.params.Donor_ID}`,
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
  /* PassD Check Get */
}
app.post("/P_checkD/:Donor_ID", function (req, resp) {
  var Password = req.body.Password;
  connection.query(
    `SELECT * FROM UserDonor WHERE Donor_ID = ${req.params.Donor_ID} AND BINARY Password='${Password}' AND State=1`,
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
        resp.send({ message: "Fake password..." });
        console.log("Fake password...");
      }
    }
  );
});

{
  /* PassS Update Post */
}
app.post("/P_updateS/:Sponsor_ID", upload.any(), function (req, resp) {
  var Password = req.body.Password;
  connection.query(
    `UPDATE UserSponsor SET
     Password = CASE
     WHEN '${Password}' != '' THEN '${Password}'
     ELSE Password
     END
     WHERE Sponsor_ID = ${req.params.Sponsor_ID}`,
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
  /* PassS Check Get */
}
app.post("/P_checkS/:Sponsor_ID", function (req, resp) {
  var Password = req.body.Password;
  connection.query(
    `SELECT * FROM UserSponsor WHERE Sponsor_ID = ${req.params.Sponsor_ID} AND BINARY Password='${Password}' AND State=1`,
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
        resp.send({ message: "Fake password..." });
        console.log("Fake password...");
      }
    }
  );
});

{
  /* Receiver Account Get */
}
app.post("/R_login", function (req, resp) {
  var Email = req.body.Email;
  var Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserStudent WHERE Email=? AND BINARY Password=? AND State=1",
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
        mailValueR = Email;
      } else {
        resp.send({ message: "Not a Receiver..." });
        console.log("Not a Receiver...");
      }
    }
  );
});

{
  /* Donor Registration Post */
}
app.post("/D_regis", function (req, resp) {
  var Username = req.body.Username;
  var Email = req.body.Email;
  var Phone = req.body.Phone;
  var ZIP = req.body.ZIP;
  var Address = req.body.Address;
  var Password = req.body.Password;
  var Point = req.body.Point;
  var State = req.body.State;
  connection.query(
    "INSERT INTO UserDonor (Username, Email, Phone, Address, Password, ZIP, Point, State) VALUES (?, ?, ?, ?, ?, ?, 0, 1)",
    [Username, Email, Phone, Address, Password, ZIP, Point, State],
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
  /* Donor Account Get */
}
app.post("/D_login", function (req, resp) {
  var Email = req.body.Email;
  var Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserDonor WHERE Email=? AND BINARY Password=? AND State=1",
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
        mailValueD = Email;
      } else {
        resp.send({ message: "Not a Donor..." });
        console.log("Not a Donor...");
      }
    }
  );
});

{
  /* Sponsor Account Get */
}
app.post("/S_login", function (req, resp) {
  var Email = req.body.Email;
  var Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserSponsor WHERE Email=? AND BINARY Password=? AND State=1",
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
        mailValueS = Email;
      } else {
        resp.send({ message: "Not a Sponsor..." });
        console.log("Not a Sponsor...");
      }
    }
  );
});

{
  /* Admin Account Get */
}
app.post("/A_login", function (req, resp) {
  var Email = req.body.Email;
  var Password = req.body.Password;
  connection.query(
    "SELECT * FROM UserAdmin WHERE Email=? AND BINARY Password=? AND State=1",
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
        mailValueA = Email;
      } else {
        resp.send({ message: "Not an Admin..." });
        console.log("Not an Admin...");
      }
    }
  );
});

{
  /* Email Scan Post */
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
  /* Email Scan Get */
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
  /* Item Data Post */
}
app.post("/I_donate", function (req, resp) {
  var Donor_ID = req.body.Donor_ID;
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
    "INSERT INTO ItemDonate (Donor_ID, Obj, Pic1, Pic2, Pic3, Pic4, Type_ID, School_ID, Quantity, Quality, Detail, Fragile, Warning, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 1)",
    [
      Donor_ID,
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
  /* Item Update Post */
}
app.post("/I_update/:Item_ID", function (req, resp) {
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
  connection.query(
    `UPDATE ItemDonate SET
     Obj = CASE
     WHEN '${Obj}' != '' THEN '${Obj}'
     ELSE Obj
     END,
     Pic1 = CASE
     WHEN '${Pic1}' != '' THEN '${Pic1}'
     ELSE Pic1
     END,
     Pic2 = CASE
     WHEN '${Pic2}' != '' THEN '${Pic2}'
     ELSE Pic2
     END,
     Pic3 = CASE
     WHEN '${Pic3}' != '' THEN '${Pic3}'
     ELSE Pic3
     END,
     Pic4 = CASE
     WHEN '${Pic4}' != '' THEN '${Pic4}'
     ELSE Pic4
     END,
     Type_ID = CASE
     WHEN '${Type_ID}' != '' THEN '${Type_ID}'
     ELSE Type_ID
     END,
     School_ID = CASE
     WHEN '${School_ID}' != '' THEN '${School_ID}'
     ELSE School_ID
     END,
     Quantity = CASE
     WHEN '${Quantity}' != '' THEN '${Quantity}'
     ELSE Quantity
     END,
     Quality = CASE
     WHEN '${Quality}' != '' THEN '${Quality}'
     ELSE Quality
     END,
     Detail = CASE
     WHEN '${Detail}' != '' THEN '${Detail}'
     ELSE Detail
     END,
     Fragile = CASE
     WHEN '${Fragile}' != '' THEN '${Fragile}'
     ELSE Fragile
     END
     WHERE Item_ID = ${req.params.Item_ID}`,
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
  /* Item Delete Post */
}
app.post("/I_delete/:Item_ID", function (req, resp) {
  connection.query(
    `UPDATE ItemDonate 
     SET State=0
     WHERE Item_ID = ${req.params.Item_ID}`,
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
  /* Reward Update Post */
}
app.post("/I_update2/:Reward_ID", function (req, resp) {
  var Obj = req.body.Obj;
  var Pic1 = req.body.Pic1;
  var Pic2 = req.body.Pic2;
  var Pic3 = req.body.Pic3;
  var Pic4 = req.body.Pic4;
  var Type_ID = req.body.Type_ID;
  var Quantity = req.body.Quantity;
  var Detail = req.body.Detail;
  var Fragile = req.body.Fragile;
  connection.query(
    `UPDATE ItemReward SET
     Obj = CASE
     WHEN '${Obj}' != '' THEN '${Obj}'
     ELSE Obj
     END,
     Pic1 = CASE
     WHEN '${Pic1}' != '' THEN '${Pic1}'
     ELSE Pic1
     END,
     Pic2 = CASE
     WHEN '${Pic2}' != '' THEN '${Pic2}'
     ELSE Pic2
     END,
     Pic3 = CASE
     WHEN '${Pic3}' != '' THEN '${Pic3}'
     ELSE Pic3
     END,
     Pic4 = CASE
     WHEN '${Pic4}' != '' THEN '${Pic4}'
     ELSE Pic4
     END,
     Type_ID = CASE
     WHEN '${Type_ID}' != '' THEN '${Type_ID}'
     ELSE Type_ID
     END,
     Quantity = CASE
     WHEN '${Quantity}' != '' THEN '${Quantity}'
     ELSE Quantity
     END,
     Detail = CASE
     WHEN '${Detail}' != '' THEN '${Detail}'
     ELSE Detail
     END,
     Fragile = CASE
     WHEN '${Fragile}' != '' THEN '${Fragile}'
     ELSE Fragile
     END
     WHERE Reward_ID = ${req.params.Reward_ID}`,
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
  /* Reward Delete Post */
}
app.post("/I_delete2/:Reward_ID", function (req, resp) {
  connection.query(
    `UPDATE ItemReward
     SET State=0
     WHERE Reward_ID = ${req.params.Reward_ID}`,
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
  /* Reward Data Post */
}
app.post("/I_reward", function (req, resp) {
  var Sponsor_ID = req.body.Sponsor_ID;
  var Obj = req.body.Obj;
  var Pic1 = req.body.Pic1;
  var Pic2 = req.body.Pic2;
  var Pic3 = req.body.Pic3;
  var Pic4 = req.body.Pic4;
  var Type_ID = req.body.Type_ID;
  var Quantity = req.body.Quantity;
  var Detail = req.body.Detail;
  var Fragile = req.body.Fragile;
  var Warning = req.body.Warning;
  var State = req.body.State;
  connection.query(
    "INSERT INTO ItemReward (Sponsor_ID, Obj, Pic1, Pic2, Pic3, Pic4, Type_ID, Quantity, Detail, Fragile, Warning, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 1)",
    [
      Sponsor_ID,
      Obj,
      Pic1,
      Pic2,
      Pic3,
      Pic4,
      Type_ID,
      Quantity,
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
  /* Request List1 Get */
}
app.get("/Re1/:Student_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM WebRequest
     JOIN ItemDonate ON WebRequest.Item_ID = ItemDonate.Item_ID 
     WHERE WebRequest.Student_ID=${req.params.Student_ID}
     AND WebRequest.Company_ID IS NULL AND WebRequest.Sponsor_ID IS NULL
     AND WebRequest.Accept=0 AND WebRequest.State=1`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Request List2 Get */
}
app.get("/Re2/:Student_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM WebRequest
     JOIN ItemDonate ON WebRequest.Item_ID = ItemDonate.Item_ID 
     WHERE WebRequest.Student_ID=${req.params.Student_ID}
     AND WebRequest.Company_ID IS NOT NULL AND WebRequest.Sponsor_ID IS NULL
     AND WebRequest.Accept=0 AND WebRequest.State=1`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Request List3 Get */
}
app.get("/Re3/:Student_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM WebRequest
     JOIN ItemDonate ON WebRequest.Item_ID = ItemDonate.Item_ID 
     WHERE WebRequest.Student_ID=${req.params.Student_ID}
     AND WebRequest.Company_ID IS NOT NULL AND WebRequest.Sponsor_ID IS NOT NULL
     AND WebRequest.Accept=0 AND WebRequest.State=1`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Request List4 Get */
}
app.get("/Re4/:Student_ID", function (req, resp) {
  connection.query(
    `SELECT * FROM WebRequest
     JOIN ItemDonate ON WebRequest.Item_ID = ItemDonate.Item_ID 
     WHERE WebRequest.Student_ID=${req.params.Student_ID}
     AND WebRequest.Company_ID IS NOT NULL AND WebRequest.Sponsor_ID IS NOT NULL
     AND WebRequest.Accept=1 AND WebRequest.State=1`,
    function (error, result) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        resp.send(result);
        console.log(result);
      }
    }
  );
});

{
  /* Admin Account Example */
}
app.get("/", function (req, resp) {
  connection.query(
    "SELECT * FROM UserAdmin WHERE State=1",
    function (error, rows, fields) {
      if (error) {
        console.error("Query failed:\n" + error.stack);
        connection.end();
        throw error;
      } else {
        rows.forEach((result) => {
          resp.json(result);
        });
      }
    }
  );
});

{
  /* SQL Port */
}
var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
