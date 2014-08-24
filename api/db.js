//setting sqlite
module.exports = function(){
	var sqlite3 = require("sqlite3").verbose();
	var db = new sqlite3.Database("DB_NOTES.db", function(){
		db.run("CREATE TABLE IF NOT EXISTS NOTES (note_idx INTEGER PRIMARY KEY AUTOINCREMENT, note_content TEXT, note_color VARCHAR(7), note_isdone VARCHAR(1), note_priority INTEGER, note_date DATETIME)");
	});	
	return db;
}