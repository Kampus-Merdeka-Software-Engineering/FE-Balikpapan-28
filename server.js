const express = require('express')
const db = require('./db')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

db.connect(err => {
    if (err) {
        console.log("Error menyambung database: " + err)
    }
    console.log("Tersambung ke database")
})

//pada "/data" berguna memberi seluruh komentar dari database (dioper)
app.get("/data", (req, res) => {
    const contentId = req.query.content;
    const sql = `SELECT * FROM comments WHERE bab='${contentId}'`;
    db.query(sql, (err, results) => {
        if (err) {
            console.log("Error mengambil data: " + err)
            res.status(500).json({ error: "Server error" })
            return
        }

        res.json(results)
    })
})

//pada "/submit" digunakan untuk menyimpan komentar ke database
app.post("/submit", (req, res) => {
    const referringPage = req.header('Referer') || '/';
    const { name, email, comment, bab } = req.body
    const sql = "INSERT INTO comments (nama, email, comments, bab) VALUES (?, ?, ?, ?)"

    db.query(sql, [name, email, comment, bab], (err, result) => {
        if (err) {
            console.log("Error mengambil data: " + err)
            res.status(500).json({ error: "Server error" })
            return
        }

        res.redirect(`${referringPage}#commentsSection`)
    })
})

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`)
})