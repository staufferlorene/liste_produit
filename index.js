// tableau de produit
const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
];

// déclarer un tableau grâce à l'élément id de la div
const tableauProduit = document.getElementById("produit");

// fonction affichage du produit
const affichage = () => {

    // fonction map pour afficher les produits
    const produitHTML = produits.map(produit =>
        `<div>
                <p>${produit.nom}</p>
                <p>Prix: ${produit.prix}€</p>
                <button>Supprimer</button>
            </div>`
    )
    // attribution de la variable produit à la variable tableau produit
    tableauProduit.innerHTML = produitHTML;
};

affichage();

