import express from "express";

const router = express.Router();

/* basic search page for all products */

router.route(`/`).get(async (req, res) => {

});

export { router as categories };