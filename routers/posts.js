// importo express
const express = require("express");
// setto il router
const router = express.Router();

// ROTTE DI CRUD PER I POST //

// rotta per leggere tutti i post
router.get("/", (req, res) => {
  res.send("Elenco di tutti i post");
});

// show
router.get("/:id", (req, res) => {
  res.send("Dettagli del post " + req.params.id);
});
// store
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});
// update
router.put("/:id", (req, res) => {
  res.send("Aggiornamento del post " + req.params.id);
});
// modifica parziale
router.patch("/:id", (req, res) => {
  res.send("Modifica parziale del post " + req.params.id);
});
// delete
router.delete("/:id", (req, res) => {
  res.send("Cancellazione del post " + req.params.id);
});

// esportiamo il router
module.exports = router;
