/* Lesetexte, Markt-Material und kleines Zusatz-Wörterbuch */
window.TEXTS = [
{ id:"t1", title:"Samedi au marché", de:"Am Samstag auf dem Markt", level:"Unité 4", focus:"Mengen · Teilungsartikel · il faut",
  body:`
Samedi matin, Lucie va au marché de la Croix-Rousse avec sa grand-mère. | Am Samstagmorgen geht Lucie mit ihrer Großmutter auf den Markt von Croix-Rousse.
Ce soir, toute la famille mange chez Mamie, alors il faut faire les courses. | Heute Abend isst die ganze Familie bei Oma, deshalb muss man einkaufen.
D'abord, elles vont au stand de Monsieur Morel. | Zuerst gehen sie zum Stand von Herrn Morel.
« Bonjour, Madame ! Vous désirez ? » demande le marchand. | „Guten Tag! Sie wünschen?“, fragt der Händler.
« Je voudrais un kilo de tomates et une salade, s'il vous plaît. » | „Ich hätte gern ein Kilo Tomaten und einen Salat, bitte.“
« Et avec ça ? » – « Avez-vous des fraises ? » | „Sonst noch etwas?“ – „Haben Sie Erdbeeren?“
« Bien sûr ! Elles sont très bonnes aujourd'hui. » | „Natürlich! Sie sind heute sehr gut.“
Lucie choisit deux barquettes de fraises pour le dessert. | Lucie sucht zwei Schalen Erdbeeren für den Nachtisch aus.
Ensuite, elles achètent du fromage et un morceau de jambon. | Danach kaufen sie Käse und ein Stück Schinken.
Mamie connaît bien la fromagère, elle lui dit toujours bonjour. | Oma kennt die Käsehändlerin gut, sie sagt ihr immer Guten Tag.
À la fin, Lucie a soif. | Am Ende hat Lucie Durst.
Elle boit un jus de pomme au café du marché. | Sie trinkt einen Apfelsaft im Café am Markt.
Mais zut ! Elles n'ont plus de pain. | Aber Mist! Sie haben kein Brot mehr.
Alors, elles passent encore à la boulangerie et achètent deux baguettes. | Also gehen sie noch bei der Bäckerei vorbei und kaufen zwei Baguettes.`,
  q:`
tf: Lucie va au marché avec sa mère. | faux | Elle va au marché avec sa grand-mère.
tf: Elles achètent un kilo de tomates. | vrai
mc: Pourquoi est-ce qu'il faut faire les courses ? | *La famille mange chez Mamie ce soir. ~ C'est l'anniversaire de Lucie. ~ Le frigo est vide.
mc: Qu'est-ce que Lucie choisit pour le dessert ? | *des fraises ~ des cerises ~ un gâteau
tf: Mamie ne connaît pas la fromagère. | faux | Mamie connaît bien la fromagère.
mc: Qu'est-ce que Lucie boit ? | *un jus de pomme ~ un coca ~ de l'eau
mc: Qu'est-ce qu'elles n'ont plus ? | *du pain ~ du fromage ~ du lait
mc: Dans « elle lui dit bonjour », « lui » remplace … | *la fromagère ~ Lucie ~ le marchand`},

{ id:"t2", title:"Une soirée crêpes", de:"Ein Crêpe-Abend", level:"Unité 4", focus:"il faut · boire · mettre · choisir",
  body:`
Vendredi soir, Hugo invite ses copains Malik et Emma chez lui. | Am Freitagabend lädt Hugo seine Freunde Malik und Emma zu sich ein.
Ils veulent faire des crêpes. | Sie wollen Crêpes machen.
« Qu'est-ce qu'il faut pour la pâte ? » demande Emma. | „Was braucht man für den Teig?“, fragt Emma.
Hugo lit la recette : « Il faut 250 grammes de farine, quatre œufs, un demi-litre de lait, du sucre et un peu de beurre. » | Hugo liest das Rezept: „Man braucht 250 Gramm Mehl, vier Eier, einen halben Liter Milch, Zucker und etwas Butter.“
Malik met la farine dans un grand bol. | Malik gibt das Mehl in eine große Schüssel.
Emma ajoute les œufs et le lait. | Emma fügt die Eier und die Milch hinzu.
« Il ne faut pas oublier le sel ! » dit Hugo. | „Man darf das Salz nicht vergessen!“, sagt Hugo.
Pendant que la pâte repose, les trois amis mettent la table. | Während der Teig ruht, decken die drei Freunde den Tisch.
Ils boivent du jus d'orange et écoutent de la musique. | Sie trinken Orangensaft und hören Musik.
Hugo fait la première crêpe, mais elle tombe par terre ! | Hugo macht den ersten Crêpe, aber er fällt auf den Boden!
Tout le monde rit. | Alle lachen.
Après, chacun choisit sa garniture : Malik prend du chocolat, Emma de la confiture de fraises. | Danach wählt jeder seinen Belag: Malik nimmt Schokolade, Emma Erdbeermarmelade.
À dix heures, ils finissent les crêpes. Il n'en reste plus une seule ! | Um zehn Uhr essen sie die Crêpes auf. Es ist kein einziger mehr übrig!`,
  q:`
tf: Hugo invite trois copains. | faux | Il invite deux copains : Malik et Emma.
mc: Combien d'œufs faut-il pour la pâte ? | *quatre ~ deux ~ six
mc: Qui met la farine dans le bol ? | *Malik ~ Emma ~ Hugo
tf: Pour la recette, il ne faut pas de sel. | faux | « Il ne faut pas oublier le sel ! »
mc: Qu'est-ce qui arrive à la première crêpe ? | *Elle tombe par terre. ~ Elle brûle. ~ Hugo la mange.
mc: Qu'est-ce qu'Emma choisit ? | *de la confiture de fraises ~ du chocolat ~ du sucre
tf: Les amis boivent du jus d'orange. | vrai`},

{ id:"t3", title:"Le message de Chloé", de:"Chloés Nachricht", level:"Unité 6", focus:"lui · leur · me · te",
  body:`
Salut Jonas ! | Hallo Jonas!
Merci pour ton message, il me fait très plaisir. | Danke für deine Nachricht, sie freut mich sehr.
Tu me demandes comment je vais : je vais très bien ! | Du fragst mich, wie es mir geht: Mir geht es sehr gut!
La semaine prochaine, c'est l'anniversaire de mon petit frère Théo. | Nächste Woche hat mein kleiner Bruder Théo Geburtstag.
Je lui offre un jeu vidéo, il adore ça. | Ich schenke ihm ein Videospiel, er liebt das.
Mes parents lui préparent une grande fête. | Meine Eltern bereiten ihm ein großes Fest vor.
Nos grands-parents viennent aussi ; je leur téléphone ce soir pour l'heure. | Unsere Großeltern kommen auch; ich rufe sie heute Abend wegen der Uhrzeit an.
Et toi, viens-tu en France cet été ? | Und du, kommst du diesen Sommer nach Frankreich?
Mes parents t'invitent en juillet ! | Meine Eltern laden dich im Juli ein!
Nous t'attendons à la gare de Lyon, c'est promis. | Wir holen dich am Bahnhof in Lyon ab, versprochen.
Tu peux me répondre vite ? | Kannst du mir schnell antworten?
Dis bonjour à tes parents, je les connais grâce à tes photos ! | Grüß deine Eltern, ich kenne sie dank deiner Fotos!
Bisous, Chloé | Küsschen, Chloé`,
  q:`
mc: Qu'est-ce que Chloé offre à Théo ? | *un jeu vidéo ~ un livre ~ un vélo
tf: Théo est le grand frère de Chloé. | faux | C'est son petit frère.
mc: Qui prépare la fête ? | *les parents ~ Chloé ~ les grands-parents
tf: Chloé téléphone à ses grands-parents ce soir. | vrai
mc: Quand est-ce que Jonas peut venir en France ? | *en juillet ~ en juin ~ en août
mc: Dans « Je lui offre un jeu vidéo », « lui » remplace … | *Théo ~ Jonas ~ les parents
mc: « Viens-tu en France ? » est … | *une question par inversion ~ une question avec est-ce que ~ une phrase négative`},

{ id:"t4", title:"Un nouveau au collège", de:"Ein Neuer in der Schule", level:"Unité 6", focus:"Inversion · connaître · savoir",
  body:`
Aujourd'hui, il y a un nouvel élève dans la classe de Manon. | Heute gibt es einen neuen Schüler in Manons Klasse.
Il s'appelle Yanis et il vient de Marseille. | Er heißt Yanis und kommt aus Marseille.
Pendant la récré, Manon lui parle. | In der Pause spricht Manon mit ihm.
« Connais-tu déjà quelqu'un ici ? » | „Kennst du hier schon jemanden?“
« Non, je ne connais personne. » | „Nein, ich kenne niemanden.“
« Aimes-tu le sport ? Nous avons un club de basket le mercredi. » | „Magst du Sport? Wir haben mittwochs eine Basketball-AG.“
« Oui, j'adore le basket ! Où est la salle de sport ? » | „Ja, ich liebe Basketball! Wo ist die Sporthalle?“
Manon lui montre le collège : la cantine, le CDI et la cour. | Manon zeigt ihm die Schule: die Kantine, die Bibliothek und den Hof.
À midi, ils mangent ensemble à la cantine. | Mittags essen sie zusammen in der Kantine.
Yanis ne sait pas encore où est sa salle pour le cours de maths. | Yanis weiß noch nicht, wo sein Raum für Mathe ist.
« Ne t'inquiète pas, je t'accompagne ! » dit Manon. | „Keine Sorge, ich begleite dich!“, sagt Manon.
Le soir, Yanis écrit à ses amis de Marseille : « J'ai déjà une copine ici ! » | Abends schreibt Yanis seinen Freunden in Marseille: „Ich habe hier schon eine Freundin!“`,
  q:`
mc: D'où vient Yanis ? | *de Marseille ~ de Paris ~ de Lyon
tf: Yanis connaît déjà beaucoup d'élèves. | faux | « Je ne connais personne. »
mc: Quand est le club de basket ? | *le mercredi ~ le lundi ~ le samedi
tf: Manon et Yanis mangent ensemble à midi. | vrai
mc: Qu'est-ce que Yanis ne sait pas ? | *où est sa salle de maths ~ où est la cantine ~ l'heure
mc: « Aimes-tu le sport ? » est … | *une question par inversion ~ une question avec est-ce que ~ un ordre
mc: À qui est-ce que Yanis écrit le soir ? | *à ses amis de Marseille ~ à ses parents ~ à Manon`},

{ id:"t5", title:"Pique-nique au parc", de:"Picknick im Park", level:"Unité 4", focus:"Mengen · mettre · boire",
  body:`
Dimanche, il fait beau à Lyon. | Am Sonntag ist schönes Wetter in Lyon.
La famille Martin va faire un pique-nique au parc de la Tête d'Or. | Familie Martin macht ein Picknick im Park de la Tête d'Or.
Madame Martin fait une liste : « Il nous faut du pain, du fromage, des tomates et des fruits. » | Frau Martin schreibt eine Liste: „Wir brauchen Brot, Käse, Tomaten und Obst.“
Paul, le fils, veut des chips, mais sa mère dit : « Pas trop de chips ! » | Paul, der Sohn, will Chips, aber seine Mutter sagt: „Nicht zu viele Chips!“
Ils mettent tout dans un grand panier. | Sie legen alles in einen großen Korb.
Au parc, Monsieur Martin met une couverture sous un arbre. | Im Park legt Herr Martin eine Decke unter einen Baum.
Les enfants boivent de la limonade et les parents boivent de l'eau. | Die Kinder trinken Limonade und die Eltern Wasser.
Soudain, Paul crie : « Où sont les fraises ? » | Plötzlich ruft Paul: „Wo sind die Erdbeeren?“
Personne ne sait. | Niemand weiß es.
Elles sont à la maison, dans le frigo ! | Sie sind zu Hause, im Kühlschrank!
Pas grave : ils achètent des glaces au kiosque. | Nicht schlimm: Sie kaufen Eis am Kiosk.
C'est un dimanche parfait. | Es ist ein perfekter Sonntag.`,
  q:`
tf: Il pleut dimanche. | faux | Il fait beau.
mc: Où est le pique-nique ? | *au parc ~ à la plage ~ dans le jardin
tf: Paul peut manger beaucoup de chips. | faux | « Pas trop de chips ! »
mc: Qui met la couverture sous l'arbre ? | *Monsieur Martin ~ Paul ~ Madame Martin
mc: Où sont les fraises ? | *dans le frigo ~ dans le panier ~ au kiosque
mc: Qu'est-ce qu'ils achètent au kiosque ? | *des glaces ~ des fraises ~ de l'eau
tf: Les parents boivent de la limonade. | faux | Les parents boivent de l'eau.`},

{ id:"t6", title:"La dispute", de:"Der Streit", level:"Unité 6", focus:"Gefühle · lui/leur · Pronomen",
  body:`
Inès et Clara sont meilleures amies depuis le CP. | Inès und Clara sind seit der ersten Klasse beste Freundinnen.
Mais aujourd'hui, Clara est fâchée. | Aber heute ist Clara sauer.
Inès a raconté son secret à toute la classe ! | Inès hat ihr Geheimnis der ganzen Klasse erzählt!
Clara ne lui parle plus et ne répond pas à ses messages. | Clara spricht nicht mehr mit ihr und antwortet nicht auf ihre Nachrichten.
Le soir, Inès est triste. Elle demande un conseil à son frère. | Am Abend ist Inès traurig. Sie fragt ihren Bruder um Rat.
« Écris-lui une lettre et dis-lui pardon », dit son frère. | „Schreib ihr einen Brief und entschuldige dich bei ihr“, sagt ihr Bruder.
Le lendemain, Inès donne la lettre à Clara. | Am nächsten Tag gibt Inès Clara den Brief.
Clara la lit pendant la récré. | Clara liest ihn in der Pause.
Puis elle regarde Inès et sourit : « D'accord, je te pardonne. Mais ne recommence pas ! » | Dann sieht sie Inès an und lächelt: „Okay, ich verzeihe dir. Aber mach das nicht noch mal!“
Les deux filles se réconcilient et partagent un pain au chocolat. | Die beiden Mädchen versöhnen sich und teilen ein Schokobrötchen.`,
  q:`
mc: Pourquoi est-ce que Clara est fâchée ? | *Inès a raconté son secret. ~ Inès a perdu son livre. ~ Inès est en retard.
tf: Clara répond aux messages d'Inès. | faux | Elle ne répond pas à ses messages.
mc: À qui est-ce qu'Inès demande un conseil ? | *à son frère ~ à sa mère ~ à son prof
mc: Qu'est-ce qu'Inès donne à Clara ? | *une lettre ~ un cadeau ~ un pain au chocolat
tf: À la fin, les filles se réconcilient. | vrai
mc: Dans « Clara ne lui parle plus », « lui » remplace … | *Inès ~ le frère ~ la classe`}
];

/* Produkte für Dialog-Trainer und Schreibaufgabe */
window.PRODUCTS = [
 {de:"1 kg Tomaten", q:"un kilo de tomates", bad:"un kilo des tomates", part:"des tomates", noun:"tomates", pl:1, f:1, price:3, key:"tomate"},
 {de:"500 g Erdbeeren", q:"une livre de fraises", bad:"une livre des fraises", part:"des fraises", noun:"fraises", pl:1, f:1, price:4, key:"fraise"},
 {de:"1 Flasche Mineralwasser", q:"une bouteille d'eau minérale", bad:"une bouteille de l'eau minérale", part:"de l'eau minérale", noun:"eau minérale", f:1, price:1, key:"eau"},
 {de:"6 Eier", q:"six œufs", bad:"six des œufs", part:"des œufs", noun:"œufs", pl:1, price:2, key:"œuf|oeuf"},
 {de:"200 g Käse", q:"deux cents grammes de fromage", bad:"deux cents grammes du fromage", part:"du fromage", noun:"fromage", price:5, key:"fromage"},
 {de:"4 Scheiben Schinken", q:"quatre tranches de jambon", bad:"quatre tranches du jambon", part:"du jambon", noun:"jambon", price:4, key:"jambon"},
 {de:"1 Liter Milch", q:"un litre de lait", bad:"un litre du lait", part:"du lait", noun:"lait", price:1, key:"lait"},
 {de:"1 Glas Honig", q:"un pot de miel", bad:"un pot du miel", part:"du miel", noun:"miel", price:6, key:"miel"},
 {de:"2 kg Kartoffeln", q:"deux kilos de pommes de terre", bad:"deux kilos des pommes de terre", part:"des pommes de terre", noun:"pommes de terre", pl:1, f:1, price:3, key:"pomme(s)? de terre"},
 {de:"1 Salat", q:"une salade", bad:"un salade", part:"de la salade", noun:"salade", f:1, price:1, key:"salade"},
 {de:"1 Kilo Äpfel", q:"un kilo de pommes", bad:"un kilo des pommes", part:"des pommes", noun:"pommes", pl:1, f:1, price:3, key:"pommes?(?! de terre)"},
 {de:"1 Melone", q:"un melon", bad:"une melon", part:"du melon", noun:"melon", price:3, key:"melon"},
 {de:"1 Schale Kirschen", q:"une barquette de cerises", bad:"une barquette des cerises", part:"des cerises", noun:"cerises", pl:1, f:1, price:5, key:"cerise"},
 {de:"1 Packung Nudeln", q:"un paquet de pâtes", bad:"un paquet des pâtes", part:"des pâtes", noun:"pâtes", pl:1, f:1, price:2, key:"p[âa]tes"},
 {de:"1 Stück Butter", q:"un morceau de beurre", bad:"un morceau du beurre", part:"du beurre", noun:"beurre", price:2, key:"beurre"},
 {de:"500 g Karotten", q:"une livre de carottes", bad:"une livre des carottes", part:"des carottes", noun:"carottes", pl:1, f:1, price:2, key:"carotte"},
 {de:"2 Baguettes", q:"deux baguettes", bad:"deux des baguettes", part:"du pain", noun:"baguettes", pl:1, f:1, price:2, key:"baguette|pain"},
 {de:"1 Glas Marmelade", q:"un pot de confiture", bad:"un pot de la confiture", part:"de la confiture", noun:"confiture", f:1, price:4, key:"confiture"}
];

window.MARKET_PHRASES = [
 {g:"Begrüßung", v:["Bonjour Madame / Monsieur !|Guten Tag!","Bonjour, vous désirez ?|Guten Tag, Sie wünschen?"], c:["Bonjour Monsieur !|Guten Tag!"]},
 {g:"Wünsche äußern", v:["Qu'est-ce que vous voulez ?|Was möchten Sie?"], c:["Je voudrais un kilo de tomates, s'il vous plaît.|Ich hätte gern ein Kilo Tomaten, bitte.","Il me faut aussi du lait.|Ich brauche auch Milch.","Je prends des fraises.|Ich nehme Erdbeeren."]},
 {g:"Nachfragen", v:["Et avec ça ?|Sonst noch etwas?","Il vous faut autre chose ?|Brauchen Sie noch etwas?","Combien en voulez-vous ?|Wie viel möchten Sie davon?"], c:["Avez-vous des cerises ?|Haben Sie Kirschen?","Elles sont mûres, les pêches ?|Sind die Pfirsiche reif?","Je peux goûter ?|Darf ich probieren?"]},
 {g:"Antworten", v:["Désolé, je n'ai plus de cerises.|Tut mir leid, ich habe keine Kirschen mehr.","Elles sont très bonnes aujourd'hui !|Sie sind heute sehr gut!","Je mets les fraises dans un sac ?|Soll ich die Erdbeeren in eine Tüte tun?"], c:["Non merci, c'est tout.|Nein danke, das ist alles.","Ce n'est pas grave.|Das ist nicht schlimm."]},
 {g:"Preis & Bezahlen", v:["Ça fait 8 euros 50.|Das macht 8,50 €.","Voilà votre monnaie.|Hier ist Ihr Wechselgeld."], c:["Ça fait combien ?|Wie viel macht das?","C'est combien, le fromage ?|Was kostet der Käse?","C'est un peu cher !|Das ist etwas teuer!","Voilà dix euros.|Hier sind zehn Euro."]},
 {g:"Verabschiedung", v:["Merci, bonne journée !|Danke, schönen Tag noch!","Au revoir et à samedi !|Auf Wiedersehen und bis Samstag!"], c:["Merci, au revoir !|Danke, auf Wiedersehen!","Bonne journée à vous aussi !|Ihnen auch einen schönen Tag!"]}
];

/* Zusatzwörter für das Doppeltipp-Wörterbuch (Funktionswörter und Wörter aus den Texten) */
window.EXTRA_GLOSS = `
le|der/die/das (m.); ihn, es
la|die/der/das (f.); sie, es
les|die (Plural); sie
l'|der/die/das (vor Vokal); ihn/sie
un|ein
une|eine
des|(einige); Teilungsartikel Plural; von den
du|Teilungsartikel (m.); von dem
de|von; aus; (Mengenwort)
d'|von; aus (vor Vokal)
au|zum; in den (à + le)
aux|zu den (à + les)
à|in; nach; um; zu
en|in; nach; davon
je|ich
j'|ich
tu|du
il|er; es
elle|sie (Sg.)
on|man; wir
nous|wir; uns
vous|ihr; Sie; euch; Ihnen
ils|sie (m. Pl.)
elles|sie (f. Pl.)
me|mich; mir
m'|mich; mir
te|dich; dir
t'|dich; dir
se|sich
s'|sich
lui|ihm; ihr
leur|ihnen; ihr/ihre (Possessiv)
leurs|ihre (Plural)
moi|ich; mich; mir (betont)
toi|du; dich; dir (betont)
ce|dieser/diese/dieses; das
cet|dieser (vor Vokal)
cette|diese
ces|diese (Plural)
c'|das (c'est = das ist)
ça|das
qui|wer; der/die/das
que|was; dass
qu'|was; dass
quoi|was
ne|(Verneinung)
n'|(Verneinung)
pas|nicht
plus|mehr; nicht mehr
jamais|nie
rien|nichts
personne|niemand; Person
très|sehr
tout|alles; ganz
toute|ganze
tous|alle
y|dort; dorthin
mais|aber
car|denn
son|sein/ihr (m.)
sa|sein/ihre (f.)
ses|seine/ihre (Pl.)
mon|mein
ma|meine
mes|meine (Pl.)
ton|dein
ta|deine
tes|deine (Pl.)
notre|unser
nos|unsere
votre|euer; Ihr
vos|eure; Ihre
est|ist
sont|sind
a|hat
ont|haben
chez|bei
soir|Abend
matin|Morgen
toujours|immer
encore|noch; wieder
ensuite|danach
alors|also; dann
fin|Ende
zut|Mist!
passent|(sie) gehen vorbei
soif|Durst
faim|Hunger
dessert|der Nachtisch
fromagère|die Käsehändlerin
pâte|der Teig
bol|die Schüssel
ajoute|fügt hinzu
oublier|vergessen
repose|ruht
première|erste
premier|erster
tombe|fällt
terre|Erde; Boden
rit|lacht
chacun|jeder
garniture|der Belag
reste|bleibt; ist übrig
seule|einzige; allein
seul|einziger; allein
plaisir|Freude; Vergnügen
prochaine|nächste
prochain|nächster
grande|groß
promis|versprochen
grâce|dank
bisous|Küsschen
nouvel|neu (vor Vokal)
nouveau|neu
nouvelle|neue
quelqu'un|jemand
inquiète|beunruhige
accompagne|begleite
salle|Saal; Raum
couverture|die Decke
arbre|der Baum
soudain|plötzlich
crie|schreit; ruft
glaces|Eis (Pl.)
glace|das Eis
kiosque|der Kiosk
parfait|perfekt
limonade|die Limonade
liste|die Liste
dispute|der Streit
meilleures|beste (f. Pl.)
lendemain|der nächste Tag
sourit|lächelt
pardonne|verzeihe
recommence|fange wieder an
réconcilient|versöhnen sich
pain au chocolat|das Schokocroissant
CP|1. Klasse (Grundschule)
bonnes|gute
bonne|gute
bon|gut
désirez|wünschen
demande|fragt
dit|sagt
thon|der Thunfisch
chaud|warm; heiß
chaude|warm; heiß
quelque|irgendein
chose|die Sache; das Ding
idée|die Idee
vélo|das Fahrrad
argent|das Geld
fleurs|die Blumen
lettre|der Brief
vérité|die Wahrheit
lourd|schwer
heures|Uhr; Stunden
heure|Uhr; Stunde
ans|Jahre
olive|die Olive
olives|die Oliven
chèvre|die Ziege
petits|kleine
petites|kleine
vacances|Ferien
`;

window.MARKET_LESSONS = [
 {id:"c10a", t:"Wer sagt das?", k:"mc", d:"Sagt das der Verkäufer oder der Kunde?", tip:1, items:`
« Bonjour, vous désirez ? » | *le vendeur ~ le client | Guten Tag, Sie wünschen?
« Je voudrais un kilo de pommes. » | *le client ~ le vendeur | Ich hätte gern ein Kilo Äpfel.
« Et avec ça ? » | *le vendeur ~ le client | Sonst noch etwas?
« Avez-vous des cerises ? » | *le client ~ le vendeur | Haben Sie Kirschen?
« Ça fait combien ? » | *le client ~ le vendeur | Wie viel macht das?
« Voilà votre monnaie. » | *le vendeur ~ le client | Hier ist Ihr Wechselgeld.
« Il vous faut autre chose ? » | *le vendeur ~ le client | Brauchen Sie noch etwas?
« Non merci, c'est tout. » | *le client ~ le vendeur | Nein danke, das ist alles.
« Désolé, je n'ai plus de fraises. » | *le vendeur ~ le client | Tut mir leid, ich habe keine Erdbeeren mehr.
« Je peux goûter ? » | *le client ~ le vendeur | Darf ich probieren?`},
 {id:"c10b", t:"Lückendialog", k:"gap", d:"Ergänze den Dialog am Markt.", tip:0, items:`
{Verkäufer} Bonjour Madame ! Vous ___ ? | désirez | Guten Tag! Sie wünschen?
{Kundin} Bonjour ! Je ___ un kilo de tomates, s'il vous plaît. | voudrais | Guten Tag! Ich hätte gern ein Kilo Tomaten, bitte.
{Verkäufer} Voilà. Et ___ ça ? | avec | Bitte. Sonst noch etwas?
{Kundin} ___-vous des fraises ? | Avez | Haben Sie Erdbeeren?
{Verkäufer} Oui. Combien ___ voulez-vous ? | en | Ja. Wie viele möchten Sie davon?
{Kundin} Deux barquettes ___ fraises, s'il vous plaît. | de | Zwei Schalen Erdbeeren, bitte.
{Kundin} Il me ___ aussi du fromage. | faut | Ich brauche auch Käse.
{Verkäufer} Désolé, je n'ai plus ___ fromage. | de | Tut mir leid, ich habe keinen Käse mehr.
{Kundin} Ce n'est pas grave. Ça ___ combien ? | fait | Nicht schlimm. Wie viel macht das?
{Verkäufer} Ça fait onze ___, s'il vous plaît. | euros | Das macht elf Euro, bitte.
{Kundin} Voilà. Merci, au ___ ! | revoir | Bitte schön. Danke, auf Wiedersehen!
{Verkäufer} Merci à vous, bonne ___ ! | journée | Danke Ihnen, schönen Tag noch!`},
 {id:"c10c", t:"Dialog-Trainer", k:"dialog", d:"Du bist Kunde. Wähle immer die beste Antwort.", tip:0},
 {id:"c10d", t:"Sätze bauen am Markt", k:"order", d:"Bilde den Satz.", tip:2, items:`
Je voudrais un kilo de tomates, s'il vous plaît. | Ich hätte gern ein Kilo Tomaten, bitte. | +des
Avez-vous des fraises bien mûres ? | Haben Sie schön reife Erdbeeren?
Il me faut aussi une bouteille d'eau. | Ich brauche auch eine Flasche Wasser.
Désolé, je n'ai plus de cerises. | Tut mir leid, ich habe keine Kirschen mehr.
Ça fait douze euros cinquante. | Das macht zwölf Euro fünfzig.
Je mets les pommes dans votre panier ? | Soll ich die Äpfel in Ihren Korb legen?
Combien coûte le kilo de pêches ? | Wie viel kostet das Kilo Pfirsiche?
Merci beaucoup et bonne journée ! | Vielen Dank und einen schönen Tag!`},
 {id:"c10e", t:"Übersetzen am Markt", k:"tr", d:"Was sagst du auf Französisch?", tip:2, items:`
Guten Tag, Sie wünschen? => Bonjour, vous désirez ?
Ich hätte gern ein Kilo Äpfel. => Je voudrais un kilo de pommes.
Haben Sie Kirschen? => Avez-vous des cerises ? // Vous avez des cerises ? // Est-ce que vous avez des cerises ?
Sonst noch etwas? => Et avec ça ? // Il vous faut autre chose ?
Wie viel macht das? => Ça fait combien ? // Ça coûte combien ?
Nein danke, das ist alles. => Non merci, c'est tout.
Ich brauche auch Milch. => Il me faut aussi du lait. // J'ai aussi besoin de lait.
Hier ist Ihr Wechselgeld. => Voilà votre monnaie.`},
 {id:"c10f", t:"Schreibwerkstatt", k:"write", d:"Schreibe einen Verkaufsdialog mit den vorgegebenen Produkten.", tip:3}
];
