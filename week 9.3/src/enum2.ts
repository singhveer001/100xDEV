import express from "express";
const app = express();

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/", (req, res) => {
    if (!req.query.userId) {
        return res.status(ResponseStatus.Error).json({});
    }
    res.status(ResponseStatus.Success).json({});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
