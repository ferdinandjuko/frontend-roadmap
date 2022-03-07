/* 
** definition **
 Un « module » en programmation correspond à un bloc cohérent de code, c’est-à-dire à un bloc de code qui contient ses propres fonctionnalités fonctionnant ensemble et qui est séparé du reste du code. Généralement, un module possède son propre fichier. L’avantage principal des modules est une meilleure séparation qui résulte dans une meilleure maintenabilité et lisibilité du code.
 Concrètement, un module JS est un fichier JavaScript qui va exporter certains de ses éléments : fonctions, objets, variables, etc.

** methode **
 Pour utiliser les modules correctement, nous allons devoir respecter quelques règles de syntaxe et utiliser notamment les déclarations 'export' et 'import' 

** controle d'acces **
 Ainsi, les modules vont nous donner un contrôle maximal sur ce qui peut être partagé et manipulé et sur ce qui ne doit pas l’être tout en nous fournissant un excellent moyen pour séparer notre code et pour pouvoir le réutiliser dans différents fichiers.

** evaluation **
 Le code des modules n’est évalué qu’une seule fois. Ainsi, si le code d’un module est importé plusieurs fois dans d’autres modules, le code ne va être exécuté qu’une seule fois (par le premier module qui va en avoir besoin) puis le résultat de cette exécution sera ensuite exporté à tous les autres modules ayant importé de même code.
 
** async **
 Notez qu’on peut également utiliser un attribut async avec les modules afin que ceux-ci s’exécutent de manière asynchrone. Dans ce cas-là, les scripts s’exécuteront dès qu’ils seront prêts.
 
 Cela peut être utile dans le cas où l’on souhaite importer des modules qui sont indépendants du reste de la page (modules de statistique, de publicité, etc.).
*/

//exportation d'une variable
export let stack = 'Javascript';

//exportation d'une fonction
export const presentation = name => {
	return "Bonjour, je m'appelle " + name + " et je suis developpeur";
};

//exportation d'un objet
export let users = [
	{
		pseudo: 'Rasoa',
		age: 20,
		email: 'rasoa@protonmail.com',
		stacks: ['Bash', 'AWS', 'Docker'],
		admin: false,
	},
	{
		pseudo: 'Rabe',
		age: 30,
		email: 'rabe@yahoo.fr',
		stacks: ['PHP', 'Symfony', 'MySQL'],
		admin: false,
	},
	{
		pseudo: 'Randria',
		age: 27,
		email: 'randria@gmail.com',
		stacks: ['Flutter', 'Dart', 'Java'],
		admin: false,
	},
];