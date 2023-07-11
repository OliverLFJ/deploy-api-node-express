import { getConnection } from "./../database/database"

const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM language");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const getLanguage = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM language WHERE ID = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM language WHERE ID = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const addLanguage = async (req, res) => {
    try {
        const { name, programmers } = req.body;
        if (name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Bad request, please fill all fields" })
        } else {
            const objectLanguage = { name, programmers }
            const connection = await getConnection();
            await connection.query("INSERT INTO language SET ?", objectLanguage);
            res.json({ message: "Languaged Added" });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}


const updateLanguage = async (req, res) => {
    try {
        const { id } = req.params
        const { name, programmers } = req.body;
        if (id === undefined, name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Bad request, please fill all fields" })
        } else {
            const objectLanguage = { id, name, programmers }
            const connection = await getConnection();
            await connection.query("UPDATE language SET ? WHERE id = ?", [objectLanguage, id]);
            res.json({ message: "Languaged Updated" });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const methods = {
    getLanguages,
    addLanguage,
    getLanguage,
    deleteLanguage,
    updateLanguage
}