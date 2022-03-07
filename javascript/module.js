/* 
Un « module » en programmation correspond à un bloc cohérent de code, c’est-à-dire à un bloc de code qui contient ses propres fonctionnalités fonctionnant ensemble et qui est séparé du reste du code. Généralement, un module possède son propre fichier. L’avantage principal des modules est une meilleure séparation qui résulte dans une meilleure maintenabilité et lisibilité du code.

Concrètement, un module JS est un fichier JavaScript qui va exporter certains de ses éléments : fonctions, objets, variables, etc.

Pour utiliser les modules correctement, nous allons devoir respecter quelques règles de syntaxe et utiliser notamment les déclarations 'export' et 'import' 

Ainsi, les modules vont nous donner un contrôle maximal sur ce qui peut être partagé et manipulé et sur ce qui ne doit pas l’être tout en nous fournissant un excellent moyen pour séparer notre code et pour pouvoir le réutiliser dans différents fichiers.
*/

//Les éléments d’un module qui peuvent être exportés doivent être précédés de la déclaration export.
export let stack = 'Javascript';

export const presentation = name => {
	return "Bonjour, je m'appelle " + name + " et je suis developpeur";
};
