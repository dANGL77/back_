class MarkController {
    async createMark(req, res){
        const {name, overview, location} = req.body
        const newMark = await db.query('INSERT INTO mark (name, overview, location values ($1,$2,$3) RETURNING *')
        res.json(newMark.rows[0])

    }
    async getMarkbyUser(req, res){
        const id = req.query.id
        const mark = await db.query('SELECT * FROM marks where user_id = $1', [id])
        res.json(marks.rows)

    }


}




module.exports = new MarkController()
