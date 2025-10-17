// importo i post
const postsExported = require("../data/postsExported");

function index(req, res) {
  //restituisce la lista dei post in formato json + bonus: filtra per tag se è presente nella query string

  const tagsRichiesto = req.query.tags;
  if (!tagsRichiesto) {
    return res.json(postsExported);
  }
  const postsFiltrati = postsExported.filter((post) =>
    post.tags.includes(tagsRichiesto)
  );

  return res.json(postsFiltrati);
}

function show(req, res) {
  // restituisce un singolo post in formato json + bonus errore 404 se non trovato
  const Id = parseInt(req.params.id);

  const post = postsExported.find((post) => post.id === Id);

  if (!post) {
    res.status(404);
    return res.json({
      error: "Post not found",
      message: "Post non trovato",
    });
  }

  res.json(post);
}

function store(req, res) {
  res.send("Creazione di un nuovo post");
}

function update(req, res) {
  res.send("Aggiornamento del post " + req.params.id);
}

function modify(req, res) {
  res.send("Modifica parziale del post " + req.params.id);
}

function destroy(req, res) {
  // elimina un singolo post dalla lista, stampa nel terminale la lista aggiornata e risponde con uno stato 204 e nessun contenuto
  const id = parseInt(req.params.id);

  const post = postsExported.findIndex((post) => post.id === id);

  if (post === -1) {
    res.status(404);
    return res.json({
      status: 404,
      error: "Post not found",
      message: "Post non trovato",
    });
  }

  postsExported.splice(post, 1);
  console.log("Lista aggiornata dei post:", postsExported);

  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
