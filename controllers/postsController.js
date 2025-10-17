function index(req, res) {
  // copiamo la logica dell'index
  res.send("Elenco di tutti i post");
}
function show(req, res) {
  // copiamo la logica della show
  res.send("Dettagli del post " + req.params.id);
}
function store(req, res) {
  // copiamo la logica della store
  res.send("Creazione di un nuovo post");
}
function update(req, res) {
  // copiamo la logica dell'update
  res.send("Aggiornamento del post " + req.params.id);
}
function modify(req, res) {
  // copiamo la logica della modify
  res.send("Modifica parziale del post " + req.params.id);
}
function destroy(req, res) {
  // copiamo la logica della destroy
  res.send("Cancellazione del post " + req.params.id);
}
module.exports = { index, show, store, update, modify, destroy };
