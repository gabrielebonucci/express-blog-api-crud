// importo express
const express = require("express");
// creiamo un instanza di express
const app = express();
// definiamo una porta
const port = 3000;
// importo modulo router posts
const postsRouter = require("./routers/posts");

app.use("/posts", postsRouter);

//usiamo il middleware static per rendere disponibile i file statici
app.use(express.static("public"));

// definiamo rotta per index
app.get("/", (req, res) => {
  // codice funzione
  res.send("<h1>Server del mio blog</h1>");
});

// rotta bacheca
app.get("/bacheca", (req, res) => {
  // creiamo un array di oggetti per il blog
  const Post = [
    {
      titolo: "Pane Fritto Dolce: la merenda antispreco",
      contenuto:
        "Non buttare il pane raffermo! Trasformalo in una merenda golosa e velocissima che piace a grandi e piccini, passandolo nell'uovo e nello zucchero.",
      immagine: "/images/pane_fritto_dolce.jpeg",
      tags: ["dolci", "ricette antispreco", "merenda"],
    },
    {
      titolo: "Il Ciambellone Soffice per la Colazione",
      contenuto:
        "La colazione perfetta esiste: un ciambellone alto, soffice e leggero. Il segreto? Un vasetto di yogurt nell'impasto per una morbidezza incredibile.",
      immagine: "/images/ciambellone.jpeg",
      tags: ["colazione", "torte", "ricette facili"],
    },
    {
      titolo: "Cracker Croccanti alla Barbabietola",
      contenuto:
        "Un'idea originale per l'aperitivo: cracker fatti in casa con farina integrale e barbabietola, colorati, saporiti e perfetti da servire con una crema di formaggio.",
      immagine: "/images/cracker_barbabietola.jpeg",
      tags: ["antipasti", "aperitivo", "vegano"],
    },
    {
      titolo: "Pasta con Pesto di Barbabietola e Pistacchi",
      contenuto:
        "Un primo piatto che stupisce per il colore e il sapore. Il pesto di barbabietola è una variante sana e deliziosa, arricchita da pistacchi croccanti.",
      immagine: "/images/pasta_barbabietola.jpeg",
      tags: ["primi piatti", "vegetariano", "ricette creative"],
    },
    {
      titolo: "Torta Paesana: il dolce della tradizione",
      contenuto:
        "La ricetta tradizionale della Brianza per recuperare il pane secco. Un dolce rustico e ricco di sapore, con cacao, amaretti, uvetta e pinoli.",
      immagine: "/images/torta_paesana.jpeg",
      tags: ["dolci", "cucina lombarda", "cioccolato"],
    },
  ];
  // invia la risposta in formato json
  res.json(Post);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
