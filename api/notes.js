
var db = require("./db")();

module.exports = function(app){
	app.get("/api/notes", function(req, res){
		db.all("SELECT * FROM NOTES", function(err, rows){
			res.json(rows);
		});
	});
	app.get("/api/notepost", function(req, res){
		db.run("INSERT INTO NOTES (note_content, note_date) VALUES ('test note...', DateTime('now'))", function(){
			res.json({
				note_idx: this.lastID
			});
		});
		
	})
	app.post("/api/notes", function(req, res){

	});
	app.get("/api/notes/:note_id", function(req, res){

	});
	app.patch("/api/notes/:note_id", function(req, res){

	});
	app.delete("/api/notes/:note_id", function(req, res){

	});
}