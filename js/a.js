var liste=[[1,"MULOT Cyrille",3],[2,"AMIOT Antoine",2],[3,"BRUNET Xavier",36],[4,"FONTENAY Karine",1],[5,"PRIVAT Nicolas",61],[6,"KAMINSKI Stephan",98],[7,"GARDENT Thierry",51],[8,"HENNENFENT Roland",17],[9,"BENOIT Philippe",39],[10,"LANGEVIN Samuel",58],[11,"REVILLER Thierry",86],[12,"SAVART Jerome",65],[13,"MOULIN Franck",68],[14,"ALENDOURO Victor",66],[15,"PECOT Stève",95],[16,"VASTESAEGER Sven",75],[17,"GARNIER Dominique",23],[18,"FLOURET Michel",46],[19,"MINARD Anne laure",76],[20,"PASQUET Frederic",79],[21,"DEVILLERT Christophe",28],[22,"LAPIERRE Michael",85],[23,"ROUX Thierry",82],[24,"ROULET David",59],[25,"DORDAIN Tony",93],[26,"MENDER Miloud",96],[27,"FONTAINE Julien",29],[28,"FOUQUET Arnaud",48],[29,"GICQUEL Fabrice",97],[30,"ARAR Didier",84],[31,"BRAJON Bertrand",57],[32,"SCIACCA Aurélia",50],[33,"LOPES LELO Maria",5],[34,"FORESTIER David",33],[35,"HUET Jérôme",53],[36,"MARSURA Philippe",42],[37,"LINVAL Philippe",69],[38,"HERNOT Laurent",89],[39,"LAKAS Patrice",67],[40,"MARCHAND Eric",40],[41,"BOURNAT Thierry",38],[42,"CAMBONI Mario",25],[43,"BARICHARD Jérôme",47],[44,"SANSELME Philippe",87],[45,"ANDRE Serge",71],[46,"CARTON Noël",24],[47,"PETITJEAN Rémy",64],[48,"TEISSEDRE Christian",37],[49,"AMY Jérôme",99],[50,"MOYNAULT Christophe",35],[51,"VéNIANT Romu",92],[52,"LEBIGUE Tristan",88],[53,"JUGE Fabrice",26],[54,"VINCENT Jérémy",90],[55,"IVART Yann",30],[56,"DESJOUR Patrick",70],[57,"GALLON Fabrice",77],[58,"GUYOT Jean-joseph",27],[59,"CHATARD Benoit",80],[60,"ROUX Claude",9],[61,"KOWALSKI Dany",63],[62,"PERRETTE Christophe",34],[63,"DUBOURDIEU Stephane",81],[64,"LAMBERT Guillaume",54],[65,"FAMBRINI Cyril",52],[66,"MOUNIER Christian",72],[67,"BROSSARD Remy",13],[68,"FOUQUET Arnaud",94],[69,"ARNAUD Christian",44]];

var liste2 = [[70,"MOSNIER Bernard",55],[71,"BERGERET Lise",8],[72,"BERGERET Christophe",7],[73,"LEFEBVRE Michel",91],[74,"FLEURY Stephanie",15],[75,"AUBARD Nicolas",74],[76,"VALLEE Nelly",45],[77,"BERNABEU Julien",73],[78,"DUPRé Alain",78],[79,"SALIGNAT Jean-claude",4],[80,"VOLAT Marc",21],[81,"BENIGAUD Sylviane",18],[82,"LEPAIN Laurent",22]];

var wholeliste = liste.concat(liste2);///merges liste and liste2
var tabcolun="classement";
var tabcoldeux="NOM Prénom";
var tabcoltrois="identifiant";
var wholelistetocompare=wholeliste.sort();
var petitdossard=wholeliste[0][2];
var move;



function Bywinner(){///affiche tableau sans modif dans le html
var wholeliste = liste.concat(liste2);///merges liste and liste2
var tabcolun="classement";
var tabcoldeux="NOM Prénom";
var tabcoltrois="identifiant";
var move;
document.getElementById('listcoltrois').innerHTML="";
document.getElementById('listcolun').innerHTML="";
document.getElementById('listcoldeux').innerHTML="";
for (var i=0; i<wholeliste.length; i++) {////col1
tabcolun+= "<li>"+wholeliste[i][0]+ "</li><br/>";
document.getElementById('listcolun').innerHTML=tabcolun;

}
for (var k = 0; k < wholeliste.length; k++) {//:col2
tabcoldeux+="<li>"+wholeliste[k][1]+ "</li><br/>"
document.getElementById('listcoldeux').innerHTML=tabcoldeux;
}
for (var x = 0; x < wholeliste.length; x++) {///col3
tabcoltrois+="<li>"+wholeliste[x][2]+ "</li><br/>"
document.getElementById('listcoltrois').innerHTML=tabcoltrois;
}
}

///sans bidouillage affiche le plus petit en premier puis le plus grand et par ordre décroissant jusqu'à la fin. à chercher corriger proprement.
function tri() {
var wholeliste = liste.concat(liste2);///merges liste and liste2
var tabcolun="classement";
var tabcoldeux="NOM Prénom";
var tabcoltrois="identifiant";
//init func
splice=0;//intialisation de notre détecteur de mouvement à 1
while(splice<=wholeliste.length){// il faudra au maximum un nombre de tour égal à la taille du tableau pour remettre tous les dossards dans l'ordre
	for (i=0; i<wholeliste.length; i++){//int for 1
     	for (var y = 1; y<wholeliste.length-1; y++) {//int for 2
			splice+=1;//à chaque entrée dans un tour splice augmente de 1
			if (wholeliste[y][2]>wholeliste[i][2]){//int if 1
				var stock=wholeliste[y];//stock de tab[y] dans stock
				wholeliste.splice(y,1,wholeliste[i]);//remplacer tab[y] par tab[x]
				wholeliste.splice(i,1,stock);//remplacer tab[x] par tab[y]
				//ajoute un à splice (détecteur de movement)
			}//exit if 1
		}//exit for 2
	}//exit for1
}//end while
wholeliste.splice(wholeliste.length,0,wholeliste[0]);///bidouillage 
wholeliste.splice(0,1);//bidouillage
/*a=wholeliste[0];//bi
wholeliste.splice(0,1,wholeliste[wholeliste.length-1]);//dou
wholeliste.splice(wholeliste.length-1,1,a);*///lla
for (x=0; x<wholeliste.length; x++){//ge
tabcolun+="<li>"+wholeliste[x][0]+"</li><br/>";
tabcoldeux+="<li>"+wholeliste[x][1]+"</li><br>";
tabcoltrois+="<li>"+wholeliste[x][2]+"</li><br>";
document.getElementById('listcolun').innerHTML=tabcolun;
document.getElementById('listcoldeux').innerHTML=tabcoldeux;
document.getElementById('listcoltrois').innerHTML=tabcoltrois;
}
}//end funct



function aphasort(a,b) {                             //Fonction de classement qui sera utilisé par sort
	if (a[1] < b[1]) {
       return -1;
   } 
   else if (a[1] > b[1]) {
     return 1;
   }
   else {
    return 0;
   }
}

function alpha(){
var wholeliste = liste.concat(liste2);///merges liste and liste2
var tabcolun="classement";
var tabcoldeux="NOM Prénom";
var tabcoltrois="identifiant";
wholeliste.sort(aphasort);
for (var x = 0; x < wholeliste.length; x++) {
tabcolun+="<li>"+wholeliste[x][0]+"</li><br/>";
tabcoldeux+="<li>"+wholeliste[x][1]+"</li><br>";
tabcoltrois+="<li>"+wholeliste[x][2]+"</li><br>";
document.getElementById('listcolun').innerHTML=tabcolun;
document.getElementById('listcoldeux').innerHTML=tabcoldeux;
document.getElementById('listcoltrois').innerHTML=tabcoltrois;
}
}

