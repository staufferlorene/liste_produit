// tableau de produit
const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
];

const tableauProduit = document.getElementById("produit");

// fonction affichage du produit
const affichage = () => {

    // fonction map pour afficher les produits
    const produitHTML = produits.map(produit =>
        `<tr>
                <td>${produit.nom}</td>
                <td>${produit.prix}€</td>
                <td><button>Supprimer</button></td>
        </tr>`
    )
    // attribution de la variable produit à la variable tableau produit
    tableauProduit.innerHTML = produitHTML;
};

affichage();


// calculer le montant total

const montantTotal = document.getElementById("total");

const initialValue = 0;
let totalProduit = produits.reduce(
    (accumulator, currentValue) => accumulator + currentValue.prix,
    initialValue,
);

//Afficher le montant sur le HTML
montantTotal.innerHTML = `<p>Total : ${totalProduit} €</p>`;



/*
En cours d'écriture mais ça ne fonctionne pas du tout !
*/


// Filtrer le résultat de la recherche

const filtre = document.getElementById("recherche");

// Fonction de recherche
const rechercheProduit = (termeRecherche) => {

    //créer un tableau vide
    const tableauVide = [''];

    // On filtre le tableau des produits en fonction du nom
    const produitsFiltres = produits.filter(produit =>
        produit.nom().includes(filtre)
    );
};

rechercheProduit()

// Affichage des produits trouvés
console.log(rechercheProduit);


















