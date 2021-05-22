/* eslint-disable */
import { createRequire } from "module";

var http = require("http");
var formidable = require("formidable");
var fs = require("fs");
var path = require("path");

http.createServer(function (req, resp) {
	if (req.url == "/fileupload") {
		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			var oldpath = files.ImageR.path;
			var newpath = window.location.origin + "/UpAlbum/" + files.ImageR.name;
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
				resp.write("File " + files.ImageR.name + " is being uploaded.");
				resp.end();
			});
		});
	} else {
		resp.writeHead(200, {"Content-Type": "text/html"});
		resp.write("<form action='fileupload' method='post' enctype='multipart/form-data'>");
		resp.write("<input type='file' name='ImageR'><br>");
		resp.write("<input type='submit'>");
		resp.write("</form>");
		return resp.end();
	}
}).listen(3000);