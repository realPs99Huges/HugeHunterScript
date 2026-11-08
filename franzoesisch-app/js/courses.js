/* Kurse = Themen mit Regeln (Tab „Lernen“) und Aufgaben (Tab „Üben“).
   Aufgaben-Formate (eine Zeile = eine Aufgabe, Felder mit " | " getrennt):
   gap:   {Situation} Satz mit ___ (Hinweis) | Lösung Lücke1 ; Lösung Lücke2 | Deutsch | Erklärung
          Alternativen innerhalb einer Lücke mit " / ".
   mc:    Frage | *richtig ~ falsch ~ falsch | Deutsch | Erklärung
   order: Französischer Satz | Deutsch | +Ablenkwort +Ablenkwort
   tr:    Deutscher Satz => französisch // Alternative
   tf:    Ausgangssatz => Lösung // Alternative | Deutsch
   In Regeln:  [französisch|deutsch]  wird zu einem antippbaren Beispiel. */

window.COURSES = [

/* ───────────── 1 ───────────── */
{ id:"c1", n:1, group:"check", icon:"verb", color:"blue",
  title:"Bekannte Verben konjugieren", short:"Verben", fr:"être, avoir, faire, aller …",
  rules:[
  {h:"Was heißt konjugieren?", html:`
<p>Konjugieren heißt: Das Verb bekommt die passende Endung zur Person. Im Wörterbuch steht immer der <b>Infinitiv</b> (Grundform), z. B. <i>parler</i>. Im Satz brauchst du die <b>konjugierte Form</b>.</p>
<div class="ex">[Je parle français.|Ich spreche Französisch.] [Nous parlons français.|Wir sprechen Französisch.]</div>
<p>Die Personalpronomen: <b>je</b> (ich), <b>tu</b> (du), <b>il / elle / on</b> (er / sie / man), <b>nous</b> (wir), <b>vous</b> (ihr / Sie), <b>ils / elles</b> (sie, Plural).</p>
<div class="note"><b>on</b> wird wie <i>il</i> konjugiert, bedeutet aber oft „wir“: [On va au cinéma ?|Gehen wir ins Kino?]</div>`},
  {h:"Regelmäßige Verben auf -er", html:`
<p>Die meisten Verben enden auf <b>-er</b>. Du nimmst den Stamm (Infinitiv ohne -er) und hängst die Endungen an:</p>
<table class="tbl"><tr><th>Person</th><th>Endung</th><th>parler</th></tr>
<tr><td>je</td><td>-e</td><td>parle</td></tr><tr><td>tu</td><td>-es</td><td>parles</td></tr><tr><td>il / elle / on</td><td>-e</td><td>parle</td></tr>
<tr><td>nous</td><td>-ons</td><td>parlons</td></tr><tr><td>vous</td><td>-ez</td><td>parlez</td></tr><tr><td>ils / elles</td><td>-ent</td><td>parlent</td></tr></table>
<div class="note">Die Formen <i>parle, parles, parle, parlent</i> klingen <b>gleich</b>. Das -ent spricht man nicht!</div>
<div class="warn">Vor Vokal oder stummem h wird <b>je → j'</b>: [J'aime le chocolat.|Ich mag Schokolade.] [J'habite à Lyon.|Ich wohne in Lyon.]</div>`},
  {h:"-er-Verben mit Besonderheiten", html:`
<table class="tbl"><tr><th>Verb</th><th>Besonderheit</th><th>Beispiel</th></tr>
<tr><td>manger, ranger, nager</td><td>nous mit <b>-geons</b></td><td>nous mangeons</td></tr>
<tr><td>commencer</td><td>nous mit <b>-çons</b></td><td>nous commençons</td></tr>
<tr><td>acheter</td><td><b>è</b> bei je, tu, il, ils</td><td>j'achète, nous achetons</td></tr>
<tr><td>préférer</td><td><b>è</b> bei je, tu, il, ils</td><td>je préfère, nous préférons</td></tr>
<tr><td>appeler</td><td><b>ll</b> bei je, tu, il, ils</td><td>j'appelle, nous appelons</td></tr>
<tr><td>envoyer, payer</td><td><b>i</b> statt y bei je, tu, il, ils</td><td>j'envoie, nous envoyons</td></tr></table>
<div class="note">Merke: Das e bzw. g bleibt, damit die Aussprache gleich bleibt: <i>mangeons</i> (weiches g), <i>commençons</i> (s-Laut).</div>`},
  {h:"Die wichtigsten unregelmäßigen Verben", html:`
<p>Diese Verben musst du <b>auswendig</b> können. Tipp: Lern sie laut, mit dem Pronomen davor.</p>
<div class="verbgrid" data-verbs="être avoir faire aller prendre voir pouvoir vouloir savoir devoir venir dire lire écrire"></div>
<div class="note">Gleiches Muster: <b>prendre</b> → apprendre, comprendre. <b>partir</b> → sortir, dormir. <b>vendre</b> → attendre, répondre.</div>`},
  {h:"Typische Fehler", html:`
<ul class="list">
<li><b>vous faites</b>, <b>vous dites</b>, <b>vous êtes</b> – nicht „vous faisez“!</li>
<li><b>ils font</b>, <b>ils vont</b>, <b>ils ont</b>, <b>ils sont</b> – vier Formen auf <b>-ont</b>.</li>
<li><b>je peux / je veux</b> mit <b>x</b>, aber <b>il peut / il veut</b> mit <b>t</b>.</li>
<li>Nach <b>pouvoir, vouloir, savoir, devoir</b> folgt der Infinitiv: [Je veux partir.|Ich will gehen.]</li>
<li>Nach dem konjugierten Verb steht ein zweites Verb im Infinitiv: [J'aime nager.|Ich schwimme gern.]</li></ul>`}
  ],
  lessons:[
   {id:"c1a", t:"Tabellen: être, avoir, faire, aller", k:"conj", verbs:"être avoir faire aller", tense:"pres", tip:3},
   {id:"c1b", t:"Tabellen: prendre, voir, pouvoir …", k:"conj", verbs:"prendre voir pouvoir vouloir savoir devoir", tense:"pres", n:5, tip:3},
   {id:"c1c", t:"Blitz-Formen", k:"conjq", verbs:"être avoir faire aller prendre voir pouvoir vouloir savoir devoir venir dire lire écrire", tense:"pres", n:12, tip:3},
   {id:"c1d", t:"Sätze aus dem Alltag", k:"gap", d:"Setze die richtige Verbform ein.", tip:3, items:`
{Ihr plant den Abend.} Ce soir, nous ___ (aller) au cinéma. | allons | Heute Abend gehen wir ins Kino.
{Du lernst jemanden kennen.} Tu ___ (avoir) un frère ou une sœur ? | as | Hast du einen Bruder oder eine Schwester?
Mes parents ___ (être) au travail. | sont | Meine Eltern sind auf der Arbeit.
Qu'est-ce que vous ___ (faire) le week-end ? | faites | Was macht ihr am Wochenende? | vous faites – nicht „faisez“!
{Schulweg} Je ___ (prendre) le bus pour aller au collège. | prends | Ich nehme den Bus, um zur Schule zu fahren.
Ils ___ (voir) un film au cinéma. | voient | Sie sehen einen Film im Kino.
{Im Unterricht ist es warm.} Est-ce que je ___ (pouvoir) ouvrir la fenêtre ? | peux | Darf ich das Fenster öffnen?
Mes copines ___ (vouloir) faire du shopping. | veulent | Meine Freundinnen wollen shoppen gehen.
{Ein Tourist fragt dich.} Vous ___ (savoir) où est la gare ? | savez | Wissen Sie, wo der Bahnhof ist?
Nous ___ (faire) nos devoirs ensemble. | faisons | Wir machen unsere Hausaufgaben zusammen.
Léa ___ (aller) chez sa grand-mère. | va | Léa geht zu ihrer Großmutter.
Vous ___ (être) d'où ? | êtes | Woher kommt ihr? / Woher kommen Sie?
Les élèves ___ (prendre) leurs cahiers. | prennent | Die Schüler nehmen ihre Hefte.
On ___ (pouvoir) jouer au foot dans la cour ? | peut | Dürfen wir auf dem Schulhof Fußball spielen?
{Im Café} Vous ___ (vouloir) un chocolat chaud ? | voulez | Möchten Sie eine heiße Schokolade?
Nous ne ___ (savoir) pas la réponse. | savons | Wir wissen die Antwort nicht.
Attends, je ___ (venir) avec toi ! | viens | Warte, ich komme mit dir!
Qu'est-ce que tu ___ (dire) ? Je ne comprends pas. | dis | Was sagst du? Ich verstehe nicht.
Mes amis ___ (lire) une BD. | lisent | Meine Freunde lesen einen Comic.
Vous ___ (écrire) une lettre à votre correspondant ? | écrivez | Schreibt ihr eurem Austauschpartner einen Brief?
{Mama ist sauer.} Je ___ (devoir) ranger ma chambre. | dois | Ich muss mein Zimmer aufräumen.
Ils ___ (avoir) douze ans. | ont | Sie sind zwölf Jahre alt.
Le train ___ (partir) à huit heures. | part | Der Zug fährt um acht Uhr ab.
Nous ___ (attendre) le bus. | attendons | Wir warten auf den Bus.
Elles ___ (aller) à la piscine. | vont | Sie gehen ins Schwimmbad.
Tu ___ (faire) du vélo le dimanche ? | fais | Fährst du sonntags Rad?
Ils ___ (venir) de Lyon. | viennent | Sie kommen aus Lyon.
Tu ___ (voir) la tour Eiffel ? | vois | Siehst du den Eiffelturm?
Ils ___ (devoir) partir maintenant. | doivent | Sie müssen jetzt gehen.
Vous ___ (comprendre) l'exercice ? | comprenez | Versteht ihr die Übung?
Je ___ (être) en retard, désolé ! | suis | Ich bin zu spät, sorry!
Paul ___ (dormir) encore. | dort | Paul schläft noch.`},
   {id:"c1e", t:"-er-Verben mit Besonderheiten", k:"gap", d:"Achte auf ç, ge, è, ll und i.", tip:2, items:`
Nous ___ (manger) à la cantine. | mangeons | Wir essen in der Kantine. | nous mangeons – das e bleibt!
Tu ___ (acheter) des fraises ? | achètes | Kaufst du Erdbeeren?
Nous ___ (commencer) à huit heures. | commençons | Wir fangen um acht Uhr an.
Je ___ (préférer) la mer. | préfère | Ich mag lieber das Meer.
Comment tu t'___ (appeler) ? | appelles | Wie heißt du?
Ils ___ (envoyer) un message à Léo. | envoient | Sie schicken Léo eine Nachricht.
Vous ___ (payer) en euros. | payez | Ihr bezahlt in Euro.
Elles ___ (acheter) du pain. | achètent | Sie kaufen Brot.
Nous ___ (ranger) la chambre. | rangeons | Wir räumen das Zimmer auf.
Vous ___ (préférer) le thé ou le café ? | préférez | Mögt ihr lieber Tee oder Kaffee?
Je t'___ (appeler) ce soir. | appelle | Ich rufe dich heute Abend an.
Nous ___ (nager) dans le lac. | nageons | Wir schwimmen im See.
J'___ (envoyer) une carte postale. | envoie | Ich schicke eine Postkarte.
Nous ___ (acheter) un cadeau. | achetons | Wir kaufen ein Geschenk. | nous achetons – ohne è!`},
   {id:"c1f", t:"Situationen: Was sagst du?", k:"mc", d:"Wähle die richtige Form.", items:`
Du fragst deinen Freund, ob er mitkommt: « Tu ___ avec nous ? » | *viens ~ vient ~ venez | Kommst du mit uns?
Du sagst, dass ihr Hunger habt: « Nous ___ faim. » | *avons ~ sommes ~ avez | Wir haben Hunger. | Hunger haben = avoir faim
Du fragst zwei Freunde: « Qu'est-ce que vous ___ ? » | *faites ~ faisez ~ font | Was macht ihr?
Deine Eltern fahren nach Paris: « Mes parents ___ à Paris. » | *vont ~ allent ~ vas | Meine Eltern fahren nach Paris.
Du kannst heute nicht kommen: « Désolé, je ne ___ pas. » | *peux ~ peut ~ pouvez | Sorry, ich kann nicht.
Deine Schwester will ein Eis: « Ma sœur ___ une glace. » | *veut ~ veux ~ voulent | Meine Schwester will ein Eis.
Du fragst, ob die anderen Bescheid wissen: « Ils ___ ? » | *savent ~ sait ~ savons | Wissen sie Bescheid?
Ihr nehmt die U-Bahn: « Nous ___ le métro. » | *prenons ~ prendons ~ prennent | Wir nehmen die U-Bahn.
Du sagst, wie alt du bist: « J'___ treize ans. » | *ai ~ suis ~ as | Ich bin dreizehn. | Alter immer mit avoir!
Du siehst deinen Lehrer: « Je ___ Monsieur Martin. » | *vois ~ voit ~ voyons | Ich sehe Herrn Martin.`},
   {id:"c1g", t:"Sätze bauen mit Verben", k:"order", d:"Bring die Wörter in die richtige Reihenfolge.", items:`
Nous allons au cinéma ce soir. | Wir gehen heute Abend ins Kino.
Est-ce que tu peux m'aider ? | Kannst du mir helfen?
Mes parents ne veulent pas partir. | Meine Eltern wollen nicht gehen. | +voulons
Je prends le bus à huit heures. | Ich nehme den Bus um acht Uhr.
Vous faites du sport le mercredi ? | Treibt ihr mittwochs Sport? | +faisez
Ils savent jouer de la guitare. | Sie können Gitarre spielen.
On doit ranger la chambre. | Wir müssen das Zimmer aufräumen.
Elle a un chien et deux chats. | Sie hat einen Hund und zwei Katzen. | +est`}
  ]},

/* ───────────── 2 ───────────── */
{ id:"c2", n:2, group:"check", icon:"glass", color:"teal",
  title:"boire, mettre, connaître, choisir, finir", short:"Neue Verben", fr:"boire · mettre · connaître",
  rules:[
  {h:"boire – trinken", html:`
<div class="verbgrid" data-verbs="boire"></div>
<p>Achtung: Im Plural ändert sich der Stamm: <b>nous buvons, vous buvez</b>, aber <b>ils boivent</b>.</p>
<div class="ex">[Qu'est-ce que tu bois ?|Was trinkst du?] [Nous buvons de l'eau.|Wir trinken Wasser.] [Les enfants boivent du lait.|Die Kinder trinken Milch.]</div>
<div class="note">Nach <i>boire</i> steht meist der Teilungsartikel: <b>du</b> jus, <b>de la</b> limonade, <b>de l'</b>eau.</div>`},
  {h:"mettre – legen, stellen, anziehen", html:`
<div class="verbgrid" data-verbs="mettre"></div>
<p>Im Singular nur <b>ein t</b> (mets, mets, met), im Plural <b>zwei t</b> (mettons, mettez, mettent).</p>
<table class="tbl"><tr><th>Ausdruck</th><th>Bedeutung</th></tr>
<tr><td>mettre la table</td><td>den Tisch decken</td></tr>
<tr><td>mettre un pull</td><td>einen Pulli anziehen</td></tr>
<tr><td>mettre le lait dans le frigo</td><td>die Milch in den Kühlschrank stellen</td></tr>
<tr><td>mettre du sucre dans le thé</td><td>Zucker in den Tee tun</td></tr>
<tr><td>mettre la musique</td><td>Musik anmachen</td></tr></table>`},
  {h:"connaître – kennen", html:`
<div class="verbgrid" data-verbs="connaître"></div>
<p>Das <b>î</b> (mit Dach) steht nur vor einem <b>t</b>: <i>il connaît</i>. Im Plural kommt <b>-ss-</b> dazu.</p>
<div class="ex">[Tu connais Lucas ?|Kennst du Lucas?] [Je connais bien Paris.|Ich kenne Paris gut.]</div>`},
  {h:"connaître oder savoir?", html:`
<p>Beide heißen auf Deutsch manchmal „kennen / wissen“. So unterscheidest du sie:</p>
<table class="tbl"><tr><th>connaître</th><th>savoir</th></tr>
<tr><td>+ <b>Person</b>, <b>Ort</b>, <b>Sache</b> (Nomen)</td><td>+ <b>Nebensatz</b> (où, quand, si, que …)</td></tr>
<tr><td>Je connais Marie.</td><td>Je sais où elle habite.</td></tr>
<tr><td>Tu connais ce marché ?</td><td>Tu sais quand il commence ?</td></tr>
<tr><td></td><td>+ <b>Infinitiv</b> = können (gelernt): Je sais nager.</td></tr></table>
<div class="note">Eselsbrücke: <b>Connaître</b> = jemanden/etwas <b>kennen</b>. <b>Savoir</b> = etwas <b>wissen</b> oder <b>können</b>.</div>`},
  {h:"choisir und finir – Verben auf -ir", html:`
<div class="verbgrid" data-verbs="choisir finir"></div>
<p>Diese Verben bekommen im Plural ein <b>-iss-</b>: <i>nous choisissons, vous finissez, ils finissent</i>.</p>
<div class="ex">[Je choisis les fraises.|Ich wähle die Erdbeeren.] [Le cours finit à midi.|Der Unterricht endet um zwölf.]</div>
<div class="note">Genauso: réussir (schaffen), grandir (wachsen), rougir (rot werden).</div>`}
  ],
  lessons:[
   {id:"c2a", t:"Tabellen: boire, mettre, connaître", k:"conj", verbs:"boire mettre connaître", tense:"pres", tip:0},
   {id:"c2b", t:"Tabellen: choisir, finir", k:"conj", verbs:"choisir finir", tense:"pres", tip:4},
   {id:"c2c", t:"boire & mettre im Satz", k:"gap", d:"Setze boire oder mettre richtig ein.", tip:1, items:`
{Frühstück bei der Gastfamilie} Qu'est-ce que tu ___ (boire) le matin ? – Du chocolat chaud. | bois | Was trinkst du morgens? – Heiße Schokolade.
Nous ___ (boire) de l'eau minérale. | buvons | Wir trinken Mineralwasser.
Mes parents ___ (boire) du café. | boivent | Meine Eltern trinken Kaffee.
{Gäste kommen.} Vous ___ (boire) quelque chose ? | buvez | Möchten Sie etwas trinken?
Léo ___ (boire) un jus d'orange. | boit | Léo trinkt einen Orangensaft.
Je ___ (boire) un verre de lait. | bois | Ich trinke ein Glas Milch.
{Gleich gibt's Essen.} Je ___ (mettre) la table. | mets | Ich decke den Tisch.
Il fait froid. Tu ___ (mettre) ton pull ? | mets | Es ist kalt. Ziehst du deinen Pulli an?
Elle ___ (mettre) les fruits dans le panier. | met | Sie legt das Obst in den Korb.
Nous ___ (mettre) le gâteau sur la table. | mettons | Wir stellen den Kuchen auf den Tisch.
Vous ___ (mettre) du sucre dans le thé ? | mettez | Tut ihr Zucker in den Tee?
Ils ___ (mettre) leurs baskets. | mettent | Sie ziehen ihre Turnschuhe an.`},
   {id:"c2d", t:"connaître, choisir, finir im Satz", k:"gap", d:"Setze die richtige Form ein.", tip:2, items:`
Tu ___ (connaître) Lucas ? – Oui, c'est mon voisin. | connais | Kennst du Lucas? – Ja, er ist mein Nachbar.
Je ne ___ (connaître) pas cette ville. | connais | Ich kenne diese Stadt nicht.
Ma mère ___ (connaître) un bon marché. | connaît | Meine Mutter kennt einen guten Markt. | il/elle connaît – mit î!
Nous ___ (connaître) bien Paris. | connaissons | Wir kennen Paris gut.
Vous ___ (connaître) ce restaurant ? | connaissez | Kennen Sie dieses Restaurant?
Ils ne ___ (connaître) pas mes amis. | connaissent | Sie kennen meine Freunde nicht.
{Am Obststand} Je ___ (choisir) les fraises. | choisis | Ich nehme (wähle) die Erdbeeren.
Qu'est-ce que tu ___ (choisir) ? | choisis | Was wählst du?
Elle ___ (choisir) une robe rouge. | choisit | Sie wählt ein rotes Kleid.
Nous ___ (choisir) un cadeau pour Mamie. | choisissons | Wir suchen ein Geschenk für Oma aus.
Ils ___ (choisir) un film. | choisissent | Sie wählen einen Film aus.
Je ___ (finir) mes devoirs. | finis | Ich mache meine Hausaufgaben fertig.
Le cours ___ (finir) à midi. | finit | Der Unterricht endet um zwölf.
Nous ___ (finir) le gâteau. | finissons | Wir essen den Kuchen auf.
Vous ___ (finir) à quelle heure ? | finissez | Um wie viel Uhr habt ihr Schluss?
Les vacances ___ (finir) demain. | finissent | Die Ferien enden morgen.`},
   {id:"c2e", t:"savoir oder connaître?", k:"mc", d:"Welches Verb passt?", tip:3, items:`
Tu ___ Marie ? – Oui, c'est ma copine. | *connais ~ sais | Kennst du Marie? | Person → connaître
Je ne ___ pas où est la gare. | *sais ~ connais | Ich weiß nicht, wo der Bahnhof ist. | Nebensatz mit où → savoir
Vous ___ ce marché ? | *connaissez ~ savez | Kennen Sie diesen Markt? | Ort → connaître
Elle ___ nager. | *sait ~ connaît | Sie kann schwimmen. | savoir + Infinitiv = können
Nous ___ bien la ville de Lyon. | *connaissons ~ savons | Wir kennen die Stadt Lyon gut.
Tu ___ quelle heure il est ? | *sais ~ connais | Weißt du, wie spät es ist?
Ils ___ jouer du piano. | *savent ~ connaissent | Sie können Klavier spielen.
Je ___ la réponse ! | *sais ~ connais | Ich weiß die Antwort! | la réponse wissen → savoir
Tu ___ le frère de Paul ? | *connais ~ sais | Kennst du Pauls Bruder?
On ne ___ pas si le magasin est ouvert. | *sait ~ connaît | Man weiß nicht, ob der Laden offen ist.`},
   {id:"c2f", t:"Was bedeutet mettre hier?", k:"mc", d:"Wähle die passende Übersetzung.", tip:1, items:`
Je mets la table. | *Ich decke den Tisch. ~ Ich stelle den Tisch. ~ Ich kaufe einen Tisch.
Il met son pull. | *Er zieht seinen Pulli an. ~ Er wäscht seinen Pulli. ~ Er kauft einen Pulli.
Elle met le lait dans le frigo. | *Sie stellt die Milch in den Kühlschrank. ~ Sie trinkt die Milch. ~ Sie holt die Milch aus dem Kühlschrank.
Tu mets du sucre dans ton thé ? | *Tust du Zucker in deinen Tee? ~ Magst du Zucker? ~ Kaufst du Zucker?
On met la musique ? | *Machen wir Musik an? ~ Hören wir auf? ~ Singen wir?
Nous mettons les fruits dans le panier. | *Wir legen das Obst in den Korb. ~ Wir essen das Obst. ~ Wir waschen das Obst.`},
   {id:"c2g", t:"Sätze bauen", k:"order", d:"Bilde den Satz.", items:`
Nous buvons de l'eau minérale. | Wir trinken Mineralwasser. | +boivons
Je mets la table pour le dîner. | Ich decke den Tisch fürs Abendessen.
Tu connais le frère de Léa ? | Kennst du Léas Bruder? | +sais
Ils choisissent des fraises au marché. | Sie suchen auf dem Markt Erdbeeren aus.
Le cours finit à quatre heures. | Der Unterricht endet um vier Uhr.
Vous buvez un jus de pomme ? | Trinkt ihr einen Apfelsaft?`},
   {id:"c2h", t:"Übersetzen", k:"tr", d:"Übersetze ins Französische.", items:`
Ich trinke Wasser. => Je bois de l'eau.
Wir decken den Tisch. => Nous mettons la table. // On met la table.
Kennst du Paul? => Tu connais Paul ? // Est-ce que tu connais Paul ? // Connais-tu Paul ?
Sie wählen einen Film. => Ils choisissent un film. // Elles choisissent un film.
Der Unterricht endet um zwölf. => Le cours finit à midi. // Le cours finit à douze heures.
Er zieht seine Jacke an. => Il met sa veste.
Was trinkt ihr? => Qu'est-ce que vous buvez ? // Que buvez-vous ?`}
  ]},

/* ───────────── 3 ───────────── */
{ id:"c3", n:3, group:"check", icon:"scale", color:"orange",
  title:"Mengenangaben & Teilungsartikel", short:"Mengen", fr:"du, de la, un kilo de …",
  rules:[
  {h:"Der Teilungsartikel", html:`
<p>Wenn du eine <b>unbestimmte Menge</b> von etwas meinst (im Deutschen oft ohne Artikel: „Ich esse Brot“), brauchst du im Französischen den <b>Teilungsartikel</b>:</p>
<table class="tbl"><tr><th></th><th>Teilungsartikel</th><th>Beispiel</th></tr>
<tr><td>männlich</td><td><b>du</b></td><td>du pain, du fromage</td></tr>
<tr><td>weiblich</td><td><b>de la</b></td><td>de la confiture, de la farine</td></tr>
<tr><td>vor Vokal / h</td><td><b>de l'</b></td><td>de l'eau, de l'huile</td></tr>
<tr><td>Plural</td><td><b>des</b></td><td>des fraises, des œufs</td></tr></table>
<div class="ex">[Je mange du pain avec de la confiture.|Ich esse Brot mit Marmelade.] [Tu bois de l'eau ?|Trinkst du Wasser?]</div>`},
  {h:"Mengenangaben mit de", html:`
<p>Nach einer <b>Mengenangabe</b> steht nur <b>de</b> (vor Vokal <b>d'</b>) – <b>ohne</b> Artikel!</p>
<table class="tbl"><tr><th>Mengenangabe</th><th>Beispiel</th></tr>
<tr><td>un kilo de</td><td>un kilo de tomates</td></tr>
<tr><td>une bouteille de</td><td>une bouteille d'eau</td></tr>
<tr><td>un paquet de</td><td>un paquet de pâtes</td></tr>
<tr><td>200 grammes de</td><td>200 grammes de fromage</td></tr>
<tr><td>un morceau / une tranche de</td><td>une tranche de jambon</td></tr>
<tr><td>beaucoup de / un peu de</td><td>beaucoup de fraises, un peu de sucre</td></tr>
<tr><td>assez de / trop de / peu de</td><td>assez de lait, trop de chips</td></tr>
<tr><td>combien de</td><td>Combien de pommes ?</td></tr></table>
<div class="warn">Falsch: <s>un kilo des tomates</s>, <s>beaucoup du sucre</s>. Richtig: <b>un kilo de tomates</b>, <b>beaucoup de sucre</b>.</div>`},
  {h:"Verneinung: pas de, plus de", html:`
<p>Nach der Verneinung wird aus <b>du, de la, de l', des, un, une</b> einfach <b>de / d'</b>:</p>
<div class="ex">[Je ne mange pas de viande.|Ich esse kein Fleisch.] [Il n'y a plus de pain.|Es gibt kein Brot mehr.] [Je n'ai pas d'argent.|Ich habe kein Geld.]</div>
<div class="note">Ausnahme: nach <b>c'est / ce n'est pas</b> bleibt der Artikel: [Ce n'est pas de l'eau, c'est de la limonade.|Das ist kein Wasser, das ist Limonade.]</div>`},
  {h:"Bestimmter Artikel bei Vorlieben", html:`
<p>Nach <b>aimer, adorer, préférer, détester</b> sprichst du über etwas <b>allgemein</b>. Dann steht der <b>bestimmte</b> Artikel <b>le, la, l', les</b>:</p>
<table class="tbl"><tr><th>Vorliebe (allgemein)</th><th>Menge (etwas davon)</th></tr>
<tr><td>J'aime <b>le</b> fromage.</td><td>Je mange <b>du</b> fromage.</td></tr>
<tr><td>Il adore <b>les</b> fraises.</td><td>Il achète <b>des</b> fraises.</td></tr>
<tr><td>Tu détestes <b>le</b> lait ?</td><td>Tu bois <b>du</b> lait ?</td></tr></table>`},
  {h:"de + Vokal → d'", html:`
<p>Vor einem Vokal (a, e, i, o, u) oder stummem h wird <b>de → d'</b>:</p>
<div class="ex">[une bouteille d'eau|eine Flasche Wasser] [beaucoup d'œufs|viele Eier] [un pot d'olives|ein Glas Oliven]</div>
<div class="note">Die Mengen-Formel: <b>Menge + de + Nomen ohne Artikel</b>.</div>`}
  ],
  lessons:[
   {id:"c3a", t:"du, de la, de l', des", k:"gap", d:"Setze den Teilungsartikel ein.", tip:0, choices:["du","de la","de l'","des"], items:`
{Frühstück} Je mange ___ pain avec ___ confiture. | du ; de la | Ich esse Brot mit Marmelade.
Tu bois ___ eau ? | de l' | Trinkst du Wasser?
Vous avez ___ fromage de chèvre ? | du | Haben Sie Ziegenkäse?
On achète ___ fraises au marché. | des | Wir kaufen Erdbeeren auf dem Markt.
Tu mets ___ sucre dans ton thé ? | du | Tust du Zucker in deinen Tee?
Maman achète ___ huile d'olive. | de l' | Mama kauft Olivenöl.
Pour la salade, il faut ___ tomates et ___ salade. | des ; de la | Für den Salat braucht man Tomaten und Salat.
Les enfants mangent ___ chocolat. | du | Die Kinder essen Schokolade.
On boit ___ jus de pomme ? | du | Trinken wir Apfelsaft?
Tu as ___ monnaie ? | de la | Hast du Kleingeld?
Il faut ___ farine, ___ œufs et ___ lait pour les crêpes. | de la ; des ; du | Für Crêpes braucht man Mehl, Eier und Milch.
Je prends ___ viande et ___ légumes. | de la ; des | Ich nehme Fleisch und Gemüse.
Elle met ___ crème sur le gâteau. | de la | Sie tut Sahne auf den Kuchen.
Nous buvons ___ limonade. | de la | Wir trinken Limonade.`},
   {id:"c3b", t:"Mengenangaben mit de", k:"gap", d:"de oder d'?", tip:1, choices:["de","d'","du","des"], items:`
{Am Gemüsestand} Je voudrais un kilo ___ tomates, s'il vous plaît. | de | Ich hätte gern ein Kilo Tomaten, bitte.
Elle achète une bouteille ___ eau minérale. | d' | Sie kauft eine Flasche Mineralwasser.
Nous mangeons beaucoup ___ légumes. | de | Wir essen viel Gemüse.
{An der Käsetheke} Je prends 200 grammes ___ fromage. | de | Ich nehme 200 Gramm Käse.
Mon frère boit trop ___ coca. | de | Mein Bruder trinkt zu viel Cola.
Il y a assez ___ chips pour la fête ? | de | Gibt es genug Chips für die Party?
Je voudrais un paquet ___ pâtes. | de | Ich hätte gern eine Packung Nudeln.
Elle prend un peu ___ crème. | de | Sie nimmt ein bisschen Sahne.
Combien ___ pommes est-ce que tu veux ? | de | Wie viele Äpfel willst du?
Une tranche ___ jambon, s'il vous plaît. | de | Eine Scheibe Schinken, bitte.
Je voudrais un pot ___ confiture. | de | Ich hätte gern ein Glas Marmelade.
Il y a beaucoup ___ oranges. | d' | Es gibt viele Orangen.
Un litre ___ lait, s'il vous plaît. | de | Einen Liter Milch, bitte.
Elle achète une barquette ___ fraises. | de | Sie kauft eine Schale Erdbeeren.`},
   {id:"c3c", t:"Verneinung: pas de / plus de", k:"gap", d:"Ergänze nach der Verneinung.", tip:2, choices:["de","d'","du","de la","de l'"], items:`
Il n'y a pas ___ lait dans le frigo. | de | Es ist keine Milch im Kühlschrank.
Je ne mange pas ___ viande. | de | Ich esse kein Fleisch.
Nous n'avons plus ___ œufs. | d' | Wir haben keine Eier mehr.
Tu ne bois pas ___ café ? | de | Trinkst du keinen Kaffee?
Il n'y a plus ___ eau. | d' | Es gibt kein Wasser mehr.
Elle n'achète pas ___ fromage. | de | Sie kauft keinen Käse.
Je n'ai pas ___ argent. | d' | Ich habe kein Geld.
Je ne bois jamais ___ coca. | de | Ich trinke nie Cola.
Ce n'est pas ___ eau, c'est de la limonade ! | de l' | Das ist kein Wasser, das ist Limonade! | Nach „ce n'est pas“ bleibt der Artikel.
Il ne reste pas ___ beurre. | de | Es ist keine Butter übrig.`},
   {id:"c3d", t:"le/la/les oder du/de la/des?", k:"mc", d:"Vorliebe oder Menge?", tip:3, items:`
J'adore ___ fraises. | *les ~ des | Ich liebe Erdbeeren. | Vorliebe → bestimmter Artikel
Je mange ___ fraises. | *des ~ les | Ich esse Erdbeeren. | Menge → Teilungsartikel
Tu aimes ___ lait ? | *le ~ du | Magst du Milch?
Je bois ___ lait. | *du ~ le | Ich trinke Milch.
Il déteste ___ poisson. | *le ~ du | Er hasst Fisch.
Le vendredi, il mange ___ poisson. | *du ~ le | Freitags isst er Fisch.
Nous préférons ___ eau minérale. | *l' ~ de l' | Wir mögen lieber Mineralwasser.
Tu veux ___ eau minérale ? | *de l' ~ l' | Möchtest du Mineralwasser?
Elle aime beaucoup ___ chocolat. | *le ~ du | Sie mag Schokolade sehr.
Pour le dessert, on achète ___ chocolat. | *du ~ le | Zum Nachtisch kaufen wir Schokolade.`},
   {id:"c3e", t:"Sätze bauen am Markt", k:"order", d:"Bilde den Satz.", tip:1, items:`
Je voudrais un kilo de pommes. | Ich hätte gern ein Kilo Äpfel. | +des
Nous achetons du fromage et du pain. | Wir kaufen Käse und Brot.
Il n'y a plus de lait. | Es gibt keine Milch mehr. | +du
Tu bois beaucoup d'eau ? | Trinkst du viel Wasser?
Elle prend une bouteille de jus d'orange. | Sie nimmt eine Flasche Orangensaft.
J'aime les fraises mais je n'aime pas les cerises. | Ich mag Erdbeeren, aber ich mag keine Kirschen.
Combien de tomates voulez-vous ? | Wie viele Tomaten möchten Sie?`},
   {id:"c3f", t:"Übersetzen", k:"tr", d:"Übersetze ins Französische.", tip:1, items:`
Ich hätte gern ein Kilo Tomaten. => Je voudrais un kilo de tomates.
Wir kaufen Käse. => Nous achetons du fromage. // On achète du fromage.
Ich trinke kein Wasser. => Je ne bois pas d'eau.
Er isst viele Erdbeeren. => Il mange beaucoup de fraises.
Ich mag Schokolade. => J'aime le chocolat.
Eine Flasche Milch, bitte. => Une bouteille de lait, s'il vous plaît.
Es gibt kein Brot mehr. => Il n'y a plus de pain.
Sie trinkt Orangensaft. => Elle boit du jus d'orange.`}
  ]},

/* ───────────── 4 ───────────── */
{ id:"c4", n:4, group:"check", icon:"list", color:"pink",
  title:"Der Ausdruck il faut", short:"il faut", fr:"il faut + Nomen / Infinitiv",
  rules:[
  {h:"il faut + Nomen = man braucht", html:`
<p><b>Il faut</b> ist ein unpersönlicher Ausdruck. Es gibt ihn nur mit <b>il</b> – nie „je faut“ oder „nous faut“.</p>
<div class="ex">[Pour les crêpes, il faut de la farine et des œufs.|Für Crêpes braucht man Mehl und Eier.] [Il faut un stylo.|Man braucht einen Stift.]</div>
<div class="note">Mit Nomen steht oft der Teilungsartikel (du, de la, des) oder eine Mengenangabe: [Il faut 250 grammes de farine.|Man braucht 250 Gramm Mehl.]</div>`},
  {h:"il faut + Infinitiv = man muss", html:`
<p>Nach <b>il faut</b> steht das Verb im <b>Infinitiv</b> (Grundform):</p>
<div class="ex">[Il faut acheter du pain.|Man muss Brot kaufen.] [Il faut ranger la chambre.|Man muss das Zimmer aufräumen.]</div>
<div class="warn">Falsch: <s>Il faut achète</s>. Richtig: <b>Il faut acheter</b>.</div>`},
  {h:"il ne faut pas = man darf nicht", html:`
<p>Achtung, Falle! <b>Il ne faut pas</b> heißt <b>nicht</b> „man muss nicht“, sondern <b>„man darf nicht“</b>.</p>
<div class="ex">[Il ne faut pas oublier la monnaie.|Man darf das Wechselgeld nicht vergessen.] [Il ne faut pas parler en classe.|Man darf im Unterricht nicht reden.]</div>`},
  {h:"il me faut = ich brauche", html:`
<p>Mit einem Pronomen davor sagst du, <b>wer</b> etwas braucht:</p>
<table class="tbl"><tr><td>il me faut</td><td>ich brauche</td></tr><tr><td>il te faut</td><td>du brauchst</td></tr><tr><td>il lui faut</td><td>er/sie braucht</td></tr><tr><td>il nous faut</td><td>wir brauchen</td></tr><tr><td>il vous faut</td><td>ihr braucht / Sie brauchen</td></tr><tr><td>il leur faut</td><td>sie brauchen</td></tr></table>
<div class="ex">[Il vous faut autre chose ?|Brauchen Sie noch etwas?] — typisch für den Verkäufer am Markt!</div>`}
  ],
  lessons:[
   {id:"c4a", t:"il faut + Infinitiv", k:"gap", d:"Setze das Verb in der richtigen Form ein.", tip:1, items:`
Il faut ___ (acheter) du pain. | acheter | Man muss Brot kaufen. | Nach il faut: Infinitiv!
Il faut ___ (faire) les devoirs avant le dîner. | faire | Man muss die Hausaufgaben vor dem Abendessen machen.
Pour la fête, il faut ___ (préparer) un gâteau. | préparer | Für die Party muss man einen Kuchen backen.
Il ne faut pas ___ (oublier) la monnaie. | oublier | Man darf das Wechselgeld nicht vergessen.
Il faut ___ (mettre) la table. | mettre | Man muss den Tisch decken.
Pour être en forme, il faut ___ (boire) beaucoup d'eau. | boire | Um fit zu sein, muss man viel Wasser trinken.
Il faut ___ (choisir) un cadeau pour Paul. | choisir | Man muss ein Geschenk für Paul aussuchen.
Il faut ___ (finir) l'exercice. | finir | Man muss die Übung beenden.
Pour aller à la plage, il faut ___ (prendre) le train. | prendre | Um zum Strand zu kommen, muss man den Zug nehmen.
Il ne faut pas ___ (parler) pendant le cours. | parler | Man darf im Unterricht nicht reden.
Il faut ___ (être) à l'heure. | être | Man muss pünktlich sein.
Qu'est-ce qu'il faut ___ (faire) ? | faire | Was muss man tun?`},
   {id:"c4b", t:"Was bedeutet das?", k:"mc", d:"Wähle die richtige Übersetzung.", tip:2, items:`
Il faut du lait. | *Man braucht Milch. ~ Man darf keine Milch trinken. ~ Die Milch fehlt nicht.
Il faut partir. | *Man muss gehen. ~ Man darf nicht gehen. ~ Er geht.
Il ne faut pas crier. | *Man darf nicht schreien. ~ Man muss nicht schreien. ~ Er schreit nicht.
Il me faut un stylo. | *Ich brauche einen Stift. ~ Er gibt mir einen Stift. ~ Mir fehlt kein Stift.
Il ne faut pas oublier les clés. | *Man darf die Schlüssel nicht vergessen. ~ Man muss die Schlüssel nicht mitnehmen. ~ Die Schlüssel sind weg.
Il vous faut autre chose ? | *Brauchen Sie noch etwas? ~ Wollen Sie gehen? ~ Haben Sie Hunger?
Il faut combien d'œufs ? | *Wie viele Eier braucht man? ~ Wie viel kosten die Eier? ~ Hast du Eier?
Il nous faut des ballons pour la fête. | *Wir brauchen Luftballons für die Party. ~ Wir haben Luftballons. ~ Die Luftballons gehören uns.`},
   {id:"c4c", t:"Einkaufsliste: il faut + Menge", k:"gap", d:"Ergänze Teilungsartikel oder de.", tip:0, choices:["du","de la","de l'","des","de","d'"], items:`
{Rezept: Crêpes} Pour les crêpes, il faut ___ farine. | de la | Für Crêpes braucht man Mehl.
Il faut aussi quatre œufs et un demi-litre ___ lait. | de | Man braucht auch vier Eier und einen halben Liter Milch.
{Rezept: Salade niçoise} Il faut ___ tomates et ___ thon. | des ; du | Man braucht Tomaten und Thunfisch.
Il faut un peu ___ huile. | d' | Man braucht ein bisschen Öl.
{Picknick} Il faut ___ pain et ___ fromage. | du ; du | Man braucht Brot und Käse.
Il faut beaucoup ___ eau, il fait chaud ! | d' | Man braucht viel Wasser, es ist heiß!
{Geburtstag} Pour le gâteau, il faut 200 grammes ___ chocolat. | de | Für den Kuchen braucht man 200 Gramm Schokolade.
Il faut ___ beurre et ___ sucre. | du ; du | Man braucht Butter und Zucker.`},
   {id:"c4d", t:"Sätze bauen mit il faut", k:"order", d:"Bilde den Satz.", items:`
Il faut acheter du pain. | Man muss Brot kaufen. | +achète
Il ne faut pas oublier les clés. | Man darf die Schlüssel nicht vergessen.
Pour la fête, il faut des ballons. | Für die Party braucht man Luftballons.
Qu'est-ce qu'il faut pour la salade ? | Was braucht man für den Salat?
Il nous faut trois bouteilles d'eau. | Wir brauchen drei Flaschen Wasser.
Il faut ranger la cuisine après le repas. | Man muss nach dem Essen die Küche aufräumen.`},
   {id:"c4e", t:"Übersetzen", k:"tr", d:"Übersetze mit il faut.", items:`
Man braucht Eier. => Il faut des œufs.
Man muss aufräumen. => Il faut ranger.
Man darf das nicht vergessen. => Il ne faut pas oublier ça. // Il ne faut pas l'oublier.
Man muss den Bus nehmen. => Il faut prendre le bus.
Ich brauche einen Euro. => Il me faut un euro.
Was braucht man? => Qu'est-ce qu'il faut ? // Que faut-il ?`}
  ]},

/* ───────────── 5 ───────────── */
{ id:"c5", n:5, group:"check", icon:"user", color:"violet",
  title:"Objektpronomen me, te, nous, vous", short:"me, te …", fr:"Il me regarde.",
  rules:[
  {h:"Die Pronomen", html:`
<table class="tbl"><tr><th>Pronomen</th><th>Deutsch</th><th>Beispiel</th></tr>
<tr><td><b>me / m'</b></td><td>mich / mir</td><td>Tu m'aides ?</td></tr>
<tr><td><b>te / t'</b></td><td>dich / dir</td><td>Je t'attends.</td></tr>
<tr><td><b>nous</b></td><td>uns</td><td>Il nous regarde.</td></tr>
<tr><td><b>vous</b></td><td>euch / Sie / Ihnen</td><td>Je vous écoute.</td></tr></table>
<div class="note">Praktisch: Diese vier Pronomen sind für <b>direkte</b> (mich) und <b>indirekte</b> Objekte (mir) <b>gleich</b>: [Il me regarde.|Er sieht mich an.] [Il me parle.|Er spricht mit mir.]</div>`},
  {h:"Die Stellung: vor dem Verb", html:`
<p>Das Pronomen steht <b>vor dem konjugierten Verb</b> – anders als im Deutschen!</p>
<div class="ex">[Je t'invite.|Ich lade dich ein.] [Mes parents nous attendent.|Meine Eltern warten auf uns.]</div>
<div class="warn">Vor Vokal oder stummem h: <b>me → m'</b>, <b>te → t'</b>: [Tu m'écoutes ?|Hörst du mir zu?]</div>`},
  {h:"Mit Verneinung", html:`
<p>Bei der Verneinung kommt das Pronomen <b>zwischen ne und das Verb</b>:</p>
<p class="formula">ne + <b>Pronomen</b> + Verb + pas</p>
<div class="ex">[Je ne te comprends pas.|Ich verstehe dich nicht.] [Il ne nous écoute pas.|Er hört uns nicht zu.]</div>`},
  {h:"Mit Infinitiv", html:`
<p>Wenn es zwei Verben gibt (pouvoir, vouloir, aller, devoir + Infinitiv), steht das Pronomen <b>vor dem Infinitiv</b>:</p>
<div class="ex">[Tu peux m'aider ?|Kannst du mir helfen?] [Je vais t'appeler.|Ich werde dich anrufen.] [Je ne veux pas vous déranger.|Ich will Sie nicht stören.]</div>`}
  ],
  lessons:[
   {id:"c5a", t:"Welches Pronomen fehlt?", k:"gap", d:"Setze me/m', te/t', nous oder vous ein.", tip:0, choices:["me","m'","te","t'","nous","vous"], items:`
{Du bittest deinen Bruder um Hilfe.} Tu m'aides ? – Oui, je ___ aide. | t' | Hilfst du mir? – Ja, ich helfe dir.
Maman, tu ___ entends ? – Oui, je t'entends. | m' | Mama, hörst du mich? – Ja, ich höre dich.
Le prof nous regarde ? – Oui, il ___ regarde. | vous | Sieht der Lehrer uns an? – Ja, er sieht euch an.
{Treffpunkt} Tu ___ attends devant le cinéma ? – D'accord, je t'attends. | m' | Wartest du vor dem Kino auf mich? – Okay, ich warte auf dich.
Léa, je ___ invite à ma fête ! | t' | Léa, ich lade dich zu meiner Party ein!
Nos grands-parents ___ adorent. | nous | Unsere Großeltern lieben uns.
Je vous aide ? – Oui, tu ___ aides, merci ! | nous | Soll ich euch helfen? – Ja, hilf uns, danke!
Tu ne ___ écoutes pas ! | m' | Du hörst mir nicht zu!
Tu me trouves sympa ? – Oui, je ___ trouve très sympa. | te | Findest du mich nett? – Ja, ich finde dich sehr nett.
Vous nous attendez ? – Oui, nous ___ attendons. | vous | Wartet ihr auf uns? – Ja, wir warten auf euch.
Papa ___ appelle, Léo ! Dépêche-toi ! | t' | Papa ruft dich, Léo! Beeil dich!
{Im Unterricht} Je ne ___ comprends pas, Madame. Vous pouvez répéter ? | vous | Ich verstehe Sie nicht, Frau … Können Sie das wiederholen?
Tu peux ___ aider ? Mon sac est lourd. | m' | Kannst du mir helfen? Meine Tasche ist schwer.
Nous allons ___ inviter, toi et ta sœur. | vous | Wir werden euch einladen, dich und deine Schwester.
Il ___ téléphone tous les soirs, à moi. | me | Er ruft mich jeden Abend an.`},
   {id:"c5b", t:"Wo steht das Pronomen?", k:"mc", d:"Welcher Satz ist richtig?", tip:2, items:`
Ich verstehe dich nicht. | *Je ne te comprends pas. ~ Je te ne comprends pas. ~ Je ne comprends te pas.
Willst du mir helfen? | *Tu veux m'aider ? ~ Tu me veux aider ? ~ Tu veux aider me ?
Er wartet nicht auf uns. | *Il ne nous attend pas. ~ Il nous n'attend pas. ~ Il ne attend nous pas.
Sie wird euch anrufen. | *Elle va vous appeler. ~ Elle vous va appeler. ~ Elle va appeler vous.
Hörst du mir zu? | *Tu m'écoutes ? ~ Tu écoutes me ? ~ Tu me écoutes ?
Wir laden dich ein. | *Nous t'invitons. ~ Nous invitons te. ~ Nous te invitons.
Ich kann Sie nicht hören. | *Je ne peux pas vous entendre. ~ Je ne vous peux pas entendre. ~ Je peux ne pas vous entendre.`},
   {id:"c5c", t:"Antworte mit Pronomen", k:"tf", d:"Beantworte die Frage. Benutze ein Pronomen.", tip:1, items:`
Tu m'aides ? (Oui, …) => Oui, je t'aide. | Ja, ich helfe dir.
Vous nous attendez ? (Oui, …) => Oui, nous vous attendons. // Oui, on vous attend. // Oui, je vous attends. | Ja, wir warten auf euch.
Tu me comprends ? (Non, …) => Non, je ne te comprends pas. | Nein, ich verstehe dich nicht.
Tu nous invites ? (Oui, …) => Oui, je vous invite. | Ja, ich lade euch ein.
Le prof vous écoute ? (Oui, …) => Oui, il nous écoute. | Ja, er hört uns zu.
Tu peux m'aider ? (Oui, …) => Oui, je peux t'aider. | Ja, ich kann dir helfen.
Tu m'appelles ce soir ? (Non, …) => Non, je ne t'appelle pas ce soir. // Non, je ne t'appelle pas. | Nein, ich rufe dich heute Abend nicht an.
Tes parents te cherchent ? (Oui, …) => Oui, ils me cherchent. | Ja, sie suchen mich.`},
   {id:"c5d", t:"Sätze bauen", k:"order", d:"Bilde den Satz.", tip:2, items:`
Je ne te comprends pas. | Ich verstehe dich nicht.
Tu peux m'aider ? | Kannst du mir helfen?
Il ne nous attend pas. | Er wartet nicht auf uns.
Elle va vous appeler demain. | Sie wird euch morgen anrufen.
On t'attend devant la gare. | Wir warten vor dem Bahnhof auf dich.
Mes grands-parents nous invitent ce week-end. | Meine Großeltern laden uns dieses Wochenende ein.`}
  ]},

/* ───────────── 6 ───────────── */
{ id:"c6", n:6, group:"check", icon:"arrow", color:"green",
  title:"Indirekte Objektpronomen lui, leur", short:"lui, leur", fr:"Je lui parle.",
  rules:[
  {h:"lui und leur ersetzen à + Person", html:`
<p><b>lui</b> und <b>leur</b> ersetzen eine Person mit <b>à</b> davor (indirektes Objekt, deutscher Dativ: „wem?“).</p>
<table class="tbl"><tr><th>Pronomen</th><th>ersetzt</th><th>Deutsch</th></tr>
<tr><td><b>lui</b></td><td>à + eine Person (m. oder f.)</td><td>ihm / ihr</td></tr>
<tr><td><b>leur</b></td><td>à + mehrere Personen</td><td>ihnen</td></tr></table>
<div class="ex">[Je parle à Sophie. → Je lui parle.|Ich spreche mit Sophie. → Ich spreche mit ihr.] [J'écris à mes cousins. → Je leur écris.|Ich schreibe meinen Cousins. → Ich schreibe ihnen.]</div>
<div class="note"><b>lui</b> gilt für Jungen <b>und</b> Mädchen!</div>`},
  {h:"Verben mit à + Person", html:`
<p>Diese Verben brauchen <b>à</b> + Person, also <b>lui / leur</b>:</p>
<div class="chips">parler à · téléphoner à · écrire à · répondre à · donner à · offrir à · prêter à · demander à · dire à · expliquer à · montrer à · raconter à · envoyer à · apporter à</div>
<div class="warn">Achtung, diese Verben haben <b>kein</b> à – also <b>le / la / les</b>: aider qn, inviter qn, écouter qn, appeler qn, regarder qn, attendre qn. <br>[J'aide ma mère. → Je l'aide.|Ich helfe meiner Mutter. → Ich helfe ihr.]</div>`},
  {h:"Stellung", html:`
<p>Wie bei me, te, nous, vous: <b>vor dem konjugierten Verb</b>, bei Verneinung zwischen <b>ne</b> und Verb, bei Infinitiv <b>vor dem Infinitiv</b>.</p>
<div class="ex">[Je lui téléphone.|Ich rufe ihn/sie an.] [Je ne leur parle pas.|Ich spreche nicht mit ihnen.] [Je vais lui offrir un livre.|Ich werde ihm/ihr ein Buch schenken.]</div>`},
  {h:"leur ≠ leur(s)", html:`
<p>Verwechsle nicht das Pronomen <b>leur</b> mit dem Possessivbegleiter <b>leur / leurs</b> (ihr / ihre):</p>
<div class="ex">[Je leur donne leurs cahiers.|Ich gebe ihnen ihre Hefte.]</div>
<div class="note">Das Pronomen <b>leur</b> steht vor dem <b>Verb</b> und bekommt <b>nie ein -s</b>. Der Begleiter <b>leurs</b> steht vor einem <b>Nomen</b>.</div>`}
  ],
  lessons:[
   {id:"c6a", t:"lui oder leur?", k:"gap", d:"Setze lui oder leur ein.", tip:0, choices:["lui","leur"], items:`
Tu téléphones à Marie ? – Oui, je ___ téléphone ce soir. | lui | Rufst du Marie an? – Ja, ich rufe sie heute Abend an.
Tu parles à tes parents ? – Oui, je ___ parle. | leur | Sprichst du mit deinen Eltern? – Ja, ich spreche mit ihnen.
{Vatertag} Qu'est-ce que tu offres à ton père ? – Je ___ offre un livre. | lui | Was schenkst du deinem Vater? – Ich schenke ihm ein Buch.
Paul écrit à ses grands-parents ? – Oui, il ___ écrit une carte postale. | leur | Schreibt Paul seinen Großeltern? – Ja, er schreibt ihnen eine Postkarte.
Vous répondez au prof ? – Oui, nous ___ répondons. | lui | Antwortet ihr dem Lehrer? – Ja, wir antworten ihm.
Tu donnes les clés à Léa et Hugo ? – Oui, je ___ donne les clés. | leur | Gibst du Léa und Hugo die Schlüssel? – Ja, ich gebe ihnen die Schlüssel.
Je ne ___ prête pas mon portable, à mon frère ! | lui | Ich leihe meinem Bruder mein Handy nicht!
Nous ___ montrons nos photos, à nos amis. | leur | Wir zeigen unseren Freunden unsere Fotos.
Tu ___ expliques l'exercice, à ta sœur ? | lui | Erklärst du deiner Schwester die Übung?
Le prof ___ pose une question, aux élèves. | leur | Der Lehrer stellt den Schülern eine Frage.
On ___ envoie un message, à Chloé ? | lui | Schicken wir Chloé eine Nachricht?
Tu vas ___ téléphoner, à tes cousins ? | leur | Wirst du deine Cousins anrufen?
{Du hast dich verlaufen.} Je ___ demande le chemin, au policier. | lui | Ich frage den Polizisten nach dem Weg.
Ils ne ___ racontent pas leur secret, à leurs parents. | leur | Sie erzählen ihren Eltern ihr Geheimnis nicht.`},
   {id:"c6b", t:"Direkt oder indirekt?", k:"mc", d:"le/la/l'/les oder lui/leur?", tip:1, items:`
Tu invites Marc ? – Oui, je ___ invite. | *l' ~ lui | Lädst du Marc ein? – Ja. | inviter qn → direktes Objekt
Tu aides ta mère ? – Oui, je ___ aide. | *l' ~ lui | Hilfst du deiner Mutter? – Ja. | aider qn → direktes Objekt (anders als im Deutschen!)
Tu téléphones à ta mère ? – Oui, je ___ téléphone. | *lui ~ la | Rufst du deine Mutter an? – Ja. | téléphoner à qn → lui
Tu regardes les photos ? – Oui, je ___ regarde. | *les ~ leur | Schaust du dir die Fotos an? – Ja.
Tu écris à tes amis ? – Oui, je ___ écris. | *leur ~ les | Schreibst du deinen Freunden? – Ja.
Tu connais Léa ? – Oui, je ___ connais. | *la ~ lui | Kennst du Léa? – Ja.
Tu demandes à ton père ? – Oui, je ___ demande. | *lui ~ le | Fragst du deinen Vater? – Ja. | demander à qn → lui
Tu écoutes tes profs ? – Oui, je ___ écoute. | *les ~ leur | Hörst du deinen Lehrern zu? – Ja. | écouter qn → direktes Objekt
Tu prêtes ton vélo à Hugo ? – Non, je ne ___ prête pas mon vélo. | *lui ~ le | Leihst du Hugo dein Fahrrad? – Nein.
Tu attends tes copains ? – Oui, je ___ attends. | *les ~ leur | Wartest du auf deine Freunde? – Ja.`},
   {id:"c6c", t:"Ersetze durch ein Pronomen", k:"tf", d:"Ersetze à + Person durch lui oder leur.", tip:2, items:`
Je parle à Sophie. => Je lui parle. | Ich spreche mit ihr.
Nous écrivons à nos cousins. => Nous leur écrivons. | Wir schreiben ihnen.
Tu ne téléphones pas à ton frère. => Tu ne lui téléphones pas. | Du rufst ihn nicht an.
Je vais donner le cadeau à Paul. => Je vais lui donner le cadeau. | Ich werde ihm das Geschenk geben.
Elle offre des fleurs à sa mère. => Elle lui offre des fleurs. | Sie schenkt ihr Blumen.
Ils répondent aux profs. => Ils leur répondent. | Sie antworten ihnen.
On montre la ville aux touristes. => On leur montre la ville. | Wir zeigen ihnen die Stadt.
Je ne prête pas mon livre à Max. => Je ne lui prête pas mon livre. | Ich leihe ihm mein Buch nicht.`},
   {id:"c6d", t:"Sätze bauen", k:"order", d:"Bilde den Satz.", tip:2, items:`
Je lui téléphone ce soir. | Ich rufe ihn/sie heute Abend an.
Nous ne leur parlons pas. | Wir sprechen nicht mit ihnen.
Tu vas lui offrir un cadeau ? | Wirst du ihm/ihr ein Geschenk machen?
Elle leur montre ses photos. | Sie zeigt ihnen ihre Fotos. | +leurs
Je ne lui prête pas mon vélo. | Ich leihe ihm/ihr mein Fahrrad nicht.
Le prof leur explique la règle. | Der Lehrer erklärt ihnen die Regel.`},
   {id:"c6e", t:"Welches Verb hat à?", k:"mc", d:"Welches Verb braucht à + Person (also lui/leur)?", tip:1, items:`
Welches Verb passt zu „Je lui …“? | *téléphone ~ aide ~ invite
Welches Verb passt zu „Je leur …“? | *écris ~ écoute ~ attends
Welches Verb passt zu „Il lui …“? | *répond ~ regarde ~ appelle
Welches Verb passt zu „Nous leur …“? | *parlons ~ invitons ~ aidons
Welches Verb passt zu „Elle lui …“? | *offre un livre ~ cherche ~ connaît`}
  ]},

/* ───────────── 7 ───────────── */
{ id:"c7", n:7, group:"check", icon:"question", color:"red",
  title:"Die Inversionsfrage", short:"Inversion", fr:"Viens-tu avec nous ?",
  rules:[
  {h:"Drei Arten zu fragen", html:`
<table class="tbl"><tr><th>Frageform</th><th>Beispiel</th><th>Stil</th></tr>
<tr><td>Intonation (Stimme hoch)</td><td>Tu viens ?</td><td>gesprochen, locker</td></tr>
<tr><td>mit <b>est-ce que</b></td><td>Est-ce que tu viens ?</td><td>normal</td></tr>
<tr><td><b>Inversion</b></td><td>Viens-tu ?</td><td>gehoben, schriftlich</td></tr></table>
<p>Bei der Inversion werden <b>Verb und Pronomen vertauscht</b> und mit einem <b>Bindestrich</b> verbunden.</p>`},
  {h:"So bildest du die Inversion", html:`
<p class="formula">(Fragewort) + <b>Verb-Pronomen</b> + Rest ?</p>
<div class="ex">[Tu aimes le fromage ? → Aimes-tu le fromage ?|Magst du Käse?] [Vous avez des pommes ? → Avez-vous des pommes ?|Haben Sie Äpfel?] [Où est-ce que vous habitez ? → Où habitez-vous ?|Wo wohnt ihr?]</div>
<div class="note">Bei Fragen mit Fragewort fällt <b>est-ce que</b> weg, das Fragewort bleibt vorn. Aus <b>qu'est-ce que</b> wird <b>que</b>: [Que fais-tu ?|Was machst du?]</div>`},
  {h:"Das eingeschobene -t-", html:`
<p>Wenn das Verb auf einen <b>Vokal</b> endet (meist <b>-e</b> oder <b>-a</b>) und dann <b>il, elle</b> oder <b>on</b> folgt, schiebst du ein <b>-t-</b> ein, damit man es besser sprechen kann:</p>
<div class="ex">[Il parle français ? → Parle-t-il français ?|Spricht er Französisch?] [Elle a un frère ? → A-t-elle un frère ?|Hat sie einen Bruder?] [On va au cinéma ? → Va-t-on au cinéma ?|Gehen wir ins Kino?]</div>
<div class="warn">Kein -t-, wenn das Verb schon auf <b>-t</b> oder <b>-d</b> endet: [Prend-il le bus ?|Nimmt er den Bus?] [Est-elle là ?|Ist sie da?]</div>`},
  {h:"Besondere Fälle", html:`
<ul class="list">
<li><b>il y a</b> → <b>y a-t-il</b>: [Y a-t-il des cerises ?|Gibt es Kirschen?]</li>
<li>Mit <b>je</b> macht man (fast) keine Inversion – nimm lieber <i>est-ce que</i>.</li>
<li>Bei Verneinung umschließt ne … pas die Inversion: [Ne viens-tu pas ?|Kommst du nicht?]</li>
<li>Bei zwei Verben wird nur das konjugierte Verb umgestellt: [Peux-tu m'aider ?|Kannst du mir helfen?]</li></ul>`}
  ],
  lessons:[
   {id:"c7a", t:"Inversion ohne Fragewort", k:"tf", d:"Forme in eine Inversionsfrage um.", tip:1, items:`
Tu viens avec nous ? => Viens-tu avec nous ? | Kommst du mit uns?
Vous avez des pommes ? => Avez-vous des pommes ? | Haben Sie Äpfel?
Est-ce que tu aimes le fromage ? => Aimes-tu le fromage ? | Magst du Käse?
Tu connais Lyon ? => Connais-tu Lyon ? | Kennst du Lyon?
Vous voulez un sac ? => Voulez-vous un sac ? | Möchten Sie eine Tüte?
Est-ce que nous partons demain ? => Partons-nous demain ? | Fahren wir morgen los?
Ils boivent du café ? => Boivent-ils du café ? | Trinken sie Kaffee?
Est-ce que vous pouvez m'aider ? => Pouvez-vous m'aider ? | Können Sie mir helfen?
Tu as un frère ? => As-tu un frère ? | Hast du einen Bruder?
Est-ce qu'elles vont au marché ? => Vont-elles au marché ? | Gehen sie auf den Markt?`},
   {id:"c7b", t:"Inversion mit -t-", k:"tf", d:"Forme um. Denk an das -t-!", tip:2, items:`
Il parle français ? => Parle-t-il français ? | Spricht er Französisch?
Elle a un frère ? => A-t-elle un frère ? | Hat sie einen Bruder?
On va au cinéma ? => Va-t-on au cinéma ? | Gehen wir ins Kino?
Elle aime les fraises ? => Aime-t-elle les fraises ? | Mag sie Erdbeeren?
Est-ce qu'il prend le bus ? => Prend-il le bus ? | Nimmt er den Bus?
Est-ce qu'il y a des cerises ? => Y a-t-il des cerises ? | Gibt es Kirschen?
Il achète du pain ? => Achète-t-il du pain ? | Kauft er Brot?
Elle est malade ? => Est-elle malade ? | Ist sie krank?`},
   {id:"c7c", t:"Inversion mit Fragewort", k:"tf", d:"Forme in eine Inversionsfrage um.", tip:1, items:`
Où est-ce que vous habitez ? => Où habitez-vous ? | Wo wohnt ihr?
Qu'est-ce que tu fais ? => Que fais-tu ? | Was machst du?
Quand est-ce qu'ils arrivent ? => Quand arrivent-ils ? | Wann kommen sie an?
Pourquoi est-ce que tu es triste ? => Pourquoi es-tu triste ? | Warum bist du traurig?
Comment est-ce que vous allez au collège ? => Comment allez-vous au collège ? | Wie kommt ihr zur Schule?
Qu'est-ce qu'elle achète au marché ? => Qu'achète-t-elle au marché ? | Was kauft sie auf dem Markt?
Où est-ce qu'elle va ? => Où va-t-elle ? | Wohin geht sie?
Combien de pommes est-ce que vous voulez ? => Combien de pommes voulez-vous ? | Wie viele Äpfel möchten Sie?
Qu'est-ce que vous désirez ? => Que désirez-vous ? | Was wünschen Sie?
À quelle heure est-ce que tu finis ? => À quelle heure finis-tu ? | Um wie viel Uhr hast du Schluss?`},
   {id:"c7d", t:"Richtig oder falsch gebildet?", k:"mc", d:"Welche Inversionsfrage ist korrekt?", tip:2, items:`
Spricht er Deutsch? | *Parle-t-il allemand ? ~ Parle-il allemand ? ~ Il-parle allemand ?
Hat sie Zeit? | *A-t-elle le temps ? ~ A-elle le temps ? ~ Elle-a le temps ?
Nimmt er den Zug? | *Prend-il le train ? ~ Prend-t-il le train ? ~ Prendt-il le train ?
Was machst du? | *Que fais-tu ? ~ Qu'est-ce fais-tu ? ~ Que tu fais-tu ?
Wo wohnen Sie? | *Où habitez-vous ? ~ Où vous habitez-vous ? ~ Où habitez vous-?
Gibt es Erdbeeren? | *Y a-t-il des fraises ? ~ Il y a-t-il des fraises ? ~ Y a-il des fraises ?
Geht man ins Schwimmbad? | *Va-t-on à la piscine ? ~ Va-on à la piscine ? ~ On-va à la piscine ?
Können Sie mir helfen? | *Pouvez-vous m'aider ? ~ Pouvez-vous aider-moi ? ~ Vous pouvez-m'aider ?`},
   {id:"c7e", t:"Fragen bauen", k:"order", d:"Bilde die Inversionsfrage.", tip:1, items:`
Combien de pommes voulez-vous ? | Wie viele Äpfel möchten Sie?
Où habitez-vous ? | Wo wohnen Sie?
Aimes-tu le fromage ? | Magst du Käse?
Pourquoi es-tu en retard ? | Warum bist du zu spät?
Que fais-tu ce week-end ? | Was machst du dieses Wochenende?
Avez-vous des fraises bien mûres ? | Haben Sie schön reife Erdbeeren?`}
  ]},

/* ───────────── 8 ───────────── */
{ id:"c8", n:8, group:"check", icon:"cards", color:"amber", kind:"vocab", sets:["b2u4","b2u6"],
  title:"Vokabeln Unité 4 & 6 (Band 2)", short:"Vokabeln", fr:"Au marché · Entre amis",
  rules:[
  {h:"So lernst du Vokabeln richtig", html:`
<ul class="list">
<li><b>Mit Artikel lernen:</b> nicht „pomme“, sondern <b>la pomme</b>. Das Geschlecht brauchst du für du/de la!</li>
<li><b>Laut sprechen:</b> Tippe auf den Lautsprecher und sprich nach.</li>
<li><b>Jeden Tag 10 Minuten</b> sind besser als 2 Stunden vor der Arbeit.</li>
<li><b>In beide Richtungen:</b> Französisch → Deutsch ist leichter. Übe auch Deutsch → Französisch und schreib die Wörter.</li>
<li><b>Lernkartei:</b> Wörter, die du falsch hast, kommen öfter wieder.</li></ul>`},
  {h:"Wortfamilien & Eselsbrücken", html:`
<table class="tbl"><tr><th>Wort</th><th>Eselsbrücke</th></tr>
<tr><td>la farine (Mehl)</td><td>wie „Farin“-Zucker, beides Pulver</td></tr>
<tr><td>le poivron (Paprika)</td><td>le poivre = Pfeffer, beides scharf</td></tr>
<tr><td>la monnaie (Kleingeld)</td><td>engl. money</td></tr>
<tr><td>le marchand</td><td>le marché → der Markt-Mann</td></tr>
<tr><td>prêter (leihen)</td><td>„prä-ter“: vorher geben, nachher zurück</td></tr>
<tr><td>fâché (sauer)</td><td>klingt wie „fauchen“</td></tr></table>`}
  ]},

/* ───────────── 9 ───────────── */
{ id:"c9", n:9, group:"check", icon:"book", color:"cyan", kind:"reading",
  title:"Leseverstehen", short:"Lesen", fr:"Lektionstexte",
  rules:[
  {h:"Lesestrategien", html:`
<ol class="list">
<li><b>Überschrift und Bilder</b> anschauen: Worum geht es?</li>
<li><b>Fragen zuerst lesen</b>, dann weißt du, worauf du achten musst.</li>
<li><b>Text einmal ganz lesen</b>, ohne bei jedem Wort stehenzubleiben.</li>
<li><b>Schlüsselwörter suchen</b>: Namen, Zahlen, Orte, Zeiten.</li>
<li>Unbekannte Wörter <b>aus dem Zusammenhang</b> erschließen oder an Deutsch/Englisch denken (le dessert, la recette).</li></ol>
<div class="note">In dieser App: <b>Doppeltippe</b> auf ein Wort, um es zu übersetzen. Im Fenster kannst du auch den ganzen Satz übersetzen lassen.</div>`},
  {h:"vrai / faux – typische Fallen", html:`
<ul class="list"><li>Achte auf <b>Verneinungen</b> (ne … pas, ne … plus, ne … jamais).</li>
<li>Achte auf <b>Zahlen</b> und <b>Personen</b> (mère oder grand-mère?).</li>
<li>Bei <b>faux</b> in der Arbeit: oft musst du die richtige Info aus dem Text zitieren.</li></ul>`}
  ]},

/* ───────────── 10 ───────────── */
{ id:"c10", n:10, group:"check", icon:"basket", color:"lime", kind:"market",
  title:"Schreibaufgabe: Verkaufsdialog am Markt", short:"Markt-Dialog", fr:"Vous désirez ?",
  rules:[
  {h:"Aufbau eines Verkaufsdialogs", html:`
<ol class="list">
<li><b>Begrüßung</b>: Bonjour Madame / Monsieur !</li>
<li><b>Verkäufer fragt</b>: Vous désirez ? / Qu'est-ce que vous voulez ?</li>
<li><b>Kunde bestellt</b> mit Mengenangabe: Je voudrais un kilo de tomates.</li>
<li><b>Nachfragen</b>: Et avec ça ? / Il vous faut autre chose ?</li>
<li><b>Weitere Wünsche</b>, Frage nach Produkten: Avez-vous des fraises ?</li>
<li><b>Preis</b>: Ça fait combien ? – Ça fait 8 euros 50.</li>
<li><b>Bezahlen</b>: Voilà dix euros. – Et voilà votre monnaie.</li>
<li><b>Verabschiedung</b>: Merci, au revoir ! Bonne journée !</li></ol>`},
  {h:"Redemittel Verkäufer", html:`
<div class="ex">[Bonjour, vous désirez ?|Guten Tag, Sie wünschen?] [Et avec ça ?|Sonst noch etwas?] [Il vous faut autre chose ?|Brauchen Sie noch etwas?] [Combien en voulez-vous ?|Wie viel/viele möchten Sie davon?] [Elles sont très bonnes aujourd'hui.|Sie sind heute sehr gut.] [Ça fait 7 euros, s'il vous plaît.|Das macht 7 Euro, bitte.] [Voilà votre monnaie.|Hier ist Ihr Wechselgeld.] [Désolé, je n'ai plus de cerises.|Tut mir leid, ich habe keine Kirschen mehr.]</div>`},
  {h:"Redemittel Kunde", html:`
<div class="ex">[Je voudrais un kilo de pommes, s'il vous plaît.|Ich hätte gern ein Kilo Äpfel, bitte.] [Avez-vous des fraises ?|Haben Sie Erdbeeren?] [C'est combien, le fromage ?|Was kostet der Käse?] [Il me faut aussi du lait.|Ich brauche auch Milch.] [Je peux goûter ?|Kann ich probieren?] [Non merci, c'est tout.|Nein danke, das ist alles.] [Ça fait combien ?|Wie viel macht das?] [Voilà, merci. Au revoir !|Bitte schön, danke. Auf Wiedersehen!]</div>`},
  {h:"Checkliste für deinen Text", html:`
<ul class="list">
<li>Mindestens <b>8–10 Repliken</b> (Sprecherwechsel).</li>
<li>Alle <b>vorgegebenen Produkte</b> kommen vor.</li>
<li><b>Mengenangaben mit de</b> (un kilo de, une bouteille de …).</li>
<li><b>Teilungsartikel</b> (du, de la, des) und <b>pas de</b> in der Verneinung.</li>
<li>Mindestens eine <b>Inversionsfrage</b> (Avez-vous … ?).</li>
<li><b>il faut</b> oder <b>il me faut</b>.</li>
<li>Ein neues Verb: <b>choisir, mettre, boire</b> („Je mets les fraises dans le sac ?“).</li>
<li><b>Preise</b> mit Zahlen, Begrüßung und Verabschiedung.</li></ul>`}
  ]},

/* ═════════════ Grammatik extra ═════════════ */
{ id:"g1", group:"extra", icon:"blocks", color:"indigo",
  title:"Sätze bauen", short:"Satzbau", fr:"Sujet – verbe – complément",
  rules:[
  {h:"Der französische Grundsatz", html:`
<p class="formula">Subjekt + Verb + Ergänzung (+ Ort / Zeit)</p>
<div class="ex">[Léa mange une pomme.|Léa isst einen Apfel.] [Nous allons au marché samedi.|Wir gehen am Samstag auf den Markt.]</div>
<div class="note">Anders als im Deutschen bleibt das Subjekt <b>vor</b> dem Verb, auch wenn der Satz mit einer Zeitangabe beginnt: [Samedi, nous allons au marché.|Am Samstag gehen wir auf den Markt.] – nicht „Samedi allons-nous“.</div>`},
  {h:"Wo steht was?", html:`
<table class="tbl"><tr><th>Element</th><th>Position</th><th>Beispiel</th></tr>
<tr><td>Verneinung</td><td>ne + Verb + pas</td><td>Je ne mange pas.</td></tr>
<tr><td>Objektpronomen</td><td>vor dem Verb</td><td>Je te vois.</td></tr>
<tr><td>Adjektiv</td><td>meist <b>nach</b> dem Nomen</td><td>une robe rouge</td></tr>
<tr><td>kurze Adjektive</td><td>vor dem Nomen</td><td>un petit chat</td></tr>
<tr><td>Zeitangabe</td><td>Anfang oder Ende</td><td>Demain, je pars. / Je pars demain.</td></tr></table>`},
  {h:"Sätze verbinden", html:`
<div class="ex">[et|und] [mais|aber] [ou|oder] [parce que|weil] [alors|also, deshalb] [quand|wenn, als] [d'abord … ensuite … enfin|zuerst … dann … schließlich]</div>
<div class="note">Nach <b>parce que</b> bleibt die normale Wortstellung (kein Verb ans Ende wie im Deutschen!): [Je reste à la maison parce que je suis malade.|Ich bleibe zu Hause, weil ich krank bin.]</div>`}
  ],
  lessons:[
   {id:"g1a", t:"Einfache Sätze", k:"order", d:"Bring die Wörter in die richtige Reihenfolge.", tip:0, items:`
Léa mange une pomme. | Léa isst einen Apfel.
Nous habitons à Lyon. | Wir wohnen in Lyon.
Mon frère a un chien noir. | Mein Bruder hat einen schwarzen Hund.
Samedi, nous allons au marché. | Am Samstag gehen wir auf den Markt.
Les élèves sont dans la cour. | Die Schüler sind auf dem Schulhof.
Ma mère achète du pain à la boulangerie. | Meine Mutter kauft Brot in der Bäckerei.
Il y a un chat sous la table. | Unter dem Tisch ist eine Katze.
Le marché commence à huit heures. | Der Markt beginnt um acht Uhr.`},
   {id:"g1b", t:"Verneinte Sätze", k:"order", d:"Bilde den verneinten Satz.", tip:1, items:`
Je ne mange pas de viande. | Ich esse kein Fleisch.
Il ne va jamais à la piscine. | Er geht nie ins Schwimmbad.
Nous n'avons plus de lait. | Wir haben keine Milch mehr.
Tu ne comprends rien ? | Verstehst du nichts?
Elle ne connaît personne ici. | Sie kennt hier niemanden.
Ils ne veulent pas partir. | Sie wollen nicht gehen.`},
   {id:"g1c", t:"Fragen", k:"order", d:"Bilde die Frage.", items:`
Est-ce que tu viens avec nous ? | Kommst du mit uns?
Qu'est-ce que vous faites ce soir ? | Was macht ihr heute Abend?
Où est-ce que tu habites ? | Wo wohnst du?
Pourquoi est-ce qu'il est triste ? | Warum ist er traurig?
Combien coûtent les fraises ? | Wie viel kosten die Erdbeeren?
Quand est-ce que le cours commence ? | Wann beginnt der Unterricht?`},
   {id:"g1d", t:"Lange Sätze", k:"order", d:"Bilde den langen Satz.", tip:2, items:`
Je reste à la maison parce que je suis malade. | Ich bleibe zu Hause, weil ich krank bin.
D'abord, nous allons au marché, ensuite nous mangeons. | Zuerst gehen wir auf den Markt, dann essen wir.
J'aime les fraises mais je déteste les cerises. | Ich mag Erdbeeren, aber ich hasse Kirschen.
Il fait beau, alors on fait un pique-nique. | Das Wetter ist schön, also machen wir ein Picknick.
Quand il pleut, je lis une BD. | Wenn es regnet, lese ich einen Comic.
Elle achète des tomates et du fromage pour la salade. | Sie kauft Tomaten und Käse für den Salat.`},
   {id:"g1e", t:"Mit Pronomen & zwei Verben", k:"order", d:"Achte auf die Stellung der Pronomen.", items:`
Je vais lui téléphoner ce soir. | Ich werde ihn/sie heute Abend anrufen.
Tu peux m'expliquer l'exercice ? | Kannst du mir die Übung erklären?
Nous voulons leur montrer la ville. | Wir wollen ihnen die Stadt zeigen.
Elle ne veut pas nous attendre. | Sie will nicht auf uns warten.
On doit acheter du pain pour le dîner. | Wir müssen Brot fürs Abendessen kaufen.
Il faut lui dire la vérité. | Man muss ihm/ihr die Wahrheit sagen.`}
  ]},

{ id:"g2", group:"extra", icon:"article", color:"blue",
  title:"Artikel, Plural & au / du", short:"Artikel", fr:"le, la, les · au, du",
  rules:[
  {h:"Bestimmter und unbestimmter Artikel", html:`
<table class="tbl"><tr><th></th><th>bestimmt</th><th>unbestimmt</th></tr>
<tr><td>männlich</td><td>le / l'</td><td>un</td></tr><tr><td>weiblich</td><td>la / l'</td><td>une</td></tr><tr><td>Plural</td><td>les</td><td>des</td></tr></table>
<div class="note">Das Geschlecht ist oft anders als im Deutschen: <b>la</b> voiture (das Auto), <b>le</b> lait (die Milch), <b>la</b> mer (das Meer).</div>`},
  {h:"à und de verschmelzen", html:`
<table class="tbl"><tr><th>à + …</th><th></th><th>de + …</th><th></th></tr>
<tr><td>à + le</td><td><b>au</b> marché</td><td>de + le</td><td><b>du</b> collège</td></tr>
<tr><td>à + la</td><td>à la gare</td><td>de + la</td><td>de la gare</td></tr>
<tr><td>à + l'</td><td>à l'école</td><td>de + l'</td><td>de l'école</td></tr>
<tr><td>à + les</td><td><b>aux</b> toilettes</td><td>de + les</td><td><b>des</b> élèves</td></tr></table>
<div class="ex">[Je vais au cinéma.|Ich gehe ins Kino.] [Je rentre du collège.|Ich komme aus der Schule.] [Je joue au foot.|Ich spiele Fußball.] [Je joue de la guitare.|Ich spiele Gitarre.]</div>`},
  {h:"Der Plural", html:`
<table class="tbl"><tr><th>Regel</th><th>Beispiel</th></tr>
<tr><td>meist <b>+ s</b> (nicht gesprochen)</td><td>la pomme → les pommes</td></tr>
<tr><td>-eau / -eu → <b>+ x</b></td><td>le gâteau → les gâteaux, le jeu → les jeux</td></tr>
<tr><td>-al → <b>-aux</b></td><td>l'animal → les animaux</td></tr>
<tr><td>-s, -x, -z bleiben</td><td>le bras → les bras, le prix → les prix</td></tr>
<tr><td>Sonderfall</td><td>l'œil → les yeux</td></tr></table>`}
  ],
  lessons:[
   {id:"g2a", t:"au, à la, à l', aux", k:"gap", d:"Ergänze à + Artikel.", tip:1, choices:["au","à la","à l'","aux"], items:`
Je vais ___ marché. | au | Ich gehe auf den Markt.
Nous allons ___ piscine. | à la | Wir gehen ins Schwimmbad.
Ils jouent ___ foot. | au | Sie spielen Fußball.
Tu vas ___ école à pied ? | à l' | Gehst du zu Fuß zur Schule?
Le prof parle ___ élèves. | aux | Der Lehrer spricht mit den Schülern.
On se retrouve ___ gare ? | à la | Treffen wir uns am Bahnhof?
Elle va ___ hôpital. | à l' | Sie geht ins Krankenhaus.
Je pense ___ vacances. | aux | Ich denke an die Ferien.
Vous allez ___ cinéma ce soir ? | au | Geht ihr heute Abend ins Kino?`},
   {id:"g2b", t:"du, de la, de l', des (von/aus)", k:"gap", d:"Ergänze de + Artikel.", tip:1, choices:["du","de la","de l'","des"], items:`
Je rentre ___ collège à cinq heures. | du | Ich komme um fünf aus der Schule.
C'est le vélo ___ voisin. | du | Das ist das Fahrrad des Nachbarn.
Elle joue ___ guitare. | de la | Sie spielt Gitarre.
La maison est près ___ gare. | de la | Das Haus ist in der Nähe des Bahnhofs.
Tu joues ___ piano ? | du | Spielst du Klavier?
Le chien ___ enfants est noir. | des | Der Hund der Kinder ist schwarz.
J'habite en face ___ école. | de l' | Ich wohne gegenüber der Schule.
Il parle ___ vacances. | des | Er spricht über die Ferien.`},
   {id:"g2c", t:"Plural bilden", k:"tf", d:"Setze in den Plural.", tip:2, items:`
le gâteau => les gâteaux | die Kuchen
l'animal => les animaux | die Tiere
le jeu => les jeux | die Spiele
la pomme => les pommes | die Äpfel
le prix => les prix | die Preise
l'œil => les yeux | die Augen
le cadeau => les cadeaux | die Geschenke
le bras => les bras | die Arme
le journal => les journaux | die Zeitungen
le chapeau => les chapeaux | die Hüte`}
  ]},

{ id:"g3", group:"extra", icon:"paint", color:"pink",
  title:"Adjektive", short:"Adjektive", fr:"petit, petite, petits",
  rules:[
  {h:"Angleichung", html:`
<p>Adjektive richten sich nach dem Nomen: <b>weiblich + e</b>, <b>Plural + s</b>.</p>
<table class="tbl"><tr><th></th><th>Singular</th><th>Plural</th></tr>
<tr><td>männlich</td><td>un pull vert</td><td>des pulls verts</td></tr>
<tr><td>weiblich</td><td>une robe verte</td><td>des robes vertes</td></tr></table>
<div class="note">Endet das Adjektiv schon auf <b>-e</b>, kommt kein zweites e dazu: <i>un garçon timide, une fille timide</i>.</div>`},
  {h:"Besondere Formen", html:`
<table class="tbl"><tr><th>männlich</th><th>weiblich</th><th>Muster</th></tr>
<tr><td>sportif</td><td>sportive</td><td>-if → -ive</td></tr>
<tr><td>heureux</td><td>heureuse</td><td>-eux → -euse</td></tr>
<tr><td>gentil</td><td>gentille</td><td>l → lle</td></tr>
<tr><td>bon</td><td>bonne</td><td>n → nne</td></tr>
<tr><td>blanc</td><td>blanche</td><td></td></tr>
<tr><td>long</td><td>longue</td><td></td></tr>
<tr><td>frais</td><td>fraîche</td><td></td></tr>
<tr><td>beau / bel</td><td>belle</td><td>bel vor Vokal: un bel arbre</td></tr>
<tr><td>nouveau / nouvel</td><td>nouvelle</td><td>un nouvel élève</td></tr>
<tr><td>vieux / vieil</td><td>vieille</td><td>un vieil homme</td></tr></table>`},
  {h:"Stellung", html:`
<p>Die meisten Adjektive (Farben, Formen, Nationalitäten …) stehen <b>nach</b> dem Nomen: [une pomme rouge|ein roter Apfel].</p>
<p>Diese kurzen, häufigen Adjektive stehen <b>davor</b>: <b>petit, grand, beau, joli, bon, mauvais, jeune, vieux, nouveau</b>.</p>
<div class="ex">[un petit chien noir|ein kleiner schwarzer Hund] [une jolie robe bleue|ein hübsches blaues Kleid]</div>`}
  ],
  lessons:[
   {id:"g3a", t:"Die richtige Form", k:"gap", d:"Gleiche das Adjektiv an.", tip:1, items:`
Ma sœur est très ___ (sportif). | sportive | Meine Schwester ist sehr sportlich.
Les fraises sont ___ (délicieux). | délicieuses | Die Erdbeeren sind lecker.
C'est une fille ___ (gentil). | gentille | Das ist ein nettes Mädchen.
J'ai une robe ___ (blanc). | blanche | Ich habe ein weißes Kleid.
Les tomates sont bien ___ (mûr). | mûres | Die Tomaten sind schön reif.
Voilà une baguette ___ (frais). | fraîche | Hier ist ein frisches Baguette.
C'est une ___ (bon) idée ! | bonne | Das ist eine gute Idee!
Mes cousines sont ___ (heureux). | heureuses | Meine Cousinen sind glücklich.
Il y a un ___ (nouveau) élève. | nouvel | Es gibt einen neuen Schüler. | Vor Vokal: nouvel
Quel ___ (beau) arbre ! | bel | Was für ein schöner Baum!
Les pulls sont trop ___ (grand). | grands | Die Pullis sind zu groß.
Elle porte une jupe ___ (long). | longue | Sie trägt einen langen Rock.`},
   {id:"g3b", t:"Vor oder nach dem Nomen?", k:"mc", d:"Welche Stellung ist richtig?", tip:2, items:`
ein kleiner Hund | *un petit chien ~ un chien petit
ein roter Apfel | *une pomme rouge ~ une rouge pomme
ein schönes Haus | *une belle maison ~ une maison belle
eine französische Stadt | *une ville française ~ une française ville
ein neuer Freund | *un nouveau copain ~ un copain nouveau
ein interessanter Film | *un film intéressant ~ un intéressant film
eine hübsche Jacke | *une jolie veste ~ une veste jolie
ein schwieriges Wort | *un mot difficile ~ un difficile mot`}
  ]},

{ id:"g4", group:"extra", icon:"key", color:"teal",
  title:"Possessivbegleiter", short:"mon, ma, mes", fr:"mon, ma, mes …",
  rules:[
  {h:"Die Formen", html:`
<table class="tbl"><tr><th>Besitzer</th><th>m.</th><th>f.</th><th>Plural</th></tr>
<tr><td>ich</td><td>mon</td><td>ma</td><td>mes</td></tr><tr><td>du</td><td>ton</td><td>ta</td><td>tes</td></tr><tr><td>er / sie</td><td>son</td><td>sa</td><td>ses</td></tr>
<tr><td>wir</td><td colspan="2">notre</td><td>nos</td></tr><tr><td>ihr / Sie</td><td colspan="2">votre</td><td>vos</td></tr><tr><td>sie (Pl.)</td><td colspan="2">leur</td><td>leurs</td></tr></table>
<div class="warn">Der Begleiter richtet sich nach dem <b>Nomen</b>, nicht nach dem Besitzer! <i>son vélo</i> = sein <b>oder</b> ihr Fahrrad.</div>`},
  {h:"mon vor Vokal", html:`<p>Vor einem weiblichen Nomen mit Vokal oder stummem h steht <b>mon, ton, son</b> statt ma, ta, sa:</p>
<div class="ex">[mon amie|meine Freundin] [ton école|deine Schule] [son histoire|seine/ihre Geschichte]</div>`}
  ],
  lessons:[
   {id:"g4a", t:"Possessivbegleiter einsetzen", k:"gap", d:"Setze den passenden Begleiter ein.", tip:0, items:`
C'est ___ (mein) frère. | mon | Das ist mein Bruder.
Voilà ___ (meine) sœur. | ma | Hier ist meine Schwester.
Où sont ___ (deine) clés ? | tes | Wo sind deine Schlüssel?
Lucas range ___ (sein) chambre. | sa | Lucas räumt sein Zimmer auf. | la chambre → sa
Léa cherche ___ (ihr) portable. | son | Léa sucht ihr Handy. | le portable → son
C'est ___ (meine) amie Julie. | mon | Das ist meine Freundin Julie. | Vor Vokal: mon
Nous aimons ___ (unser) quartier. | notre | Wir mögen unser Viertel.
Vous avez ___ (eure) cahiers ? | vos | Habt ihr eure Hefte?
Les enfants jouent avec ___ (ihr, Pl.) chien. | leur | Die Kinder spielen mit ihrem Hund.
Ils invitent ___ (ihre, Pl.) amis. | leurs | Sie laden ihre Freunde ein.
Tu connais ___ (seine) école ? | son | Kennst du seine Schule? | Vor Vokal: son`}
  ]},

{ id:"g5", group:"extra", icon:"no", color:"red",
  title:"Verneinung", short:"Verneinung", fr:"ne … pas, ne … plus …",
  rules:[
  {h:"Die Verneinungsklammer", html:`
<p>Die Verneinung umschließt das konjugierte Verb wie eine <b>Klammer</b>:</p>
<table class="tbl"><tr><th>Verneinung</th><th>Deutsch</th><th>Beispiel</th></tr>
<tr><td>ne … pas</td><td>nicht</td><td>Je ne viens pas.</td></tr><tr><td>ne … plus</td><td>nicht mehr</td><td>Il ne pleut plus.</td></tr>
<tr><td>ne … jamais</td><td>nie</td><td>Elle ne mange jamais de viande.</td></tr><tr><td>ne … rien</td><td>nichts</td><td>Je ne comprends rien.</td></tr>
<tr><td>ne … personne</td><td>niemanden</td><td>Je ne connais personne.</td></tr></table>
<div class="note">Vor Vokal: <b>ne → n'</b>: [Je n'aime pas le poisson.|Ich mag keinen Fisch.]</div>`},
  {h:"Verneinung mit zwei Verben", html:`
<p>Bei Verb + Infinitiv wird das <b>konjugierte</b> Verb verneint:</p>
<div class="ex">[Je ne veux pas partir.|Ich will nicht gehen.] [Il ne va pas venir.|Er wird nicht kommen.]</div>
<p>Und denk dran: nach der Verneinung <b>pas de</b> statt un/une/du/de la/des.</p>`}
  ],
  lessons:[
   {id:"g5a", t:"Verneine den Satz", k:"tf", d:"Verneine mit dem angegebenen Ausdruck.", tip:0, items:`
Je viens. (ne … pas) => Je ne viens pas. | Ich komme nicht.
Il pleut. (ne … plus) => Il ne pleut plus. | Es regnet nicht mehr.
Elle mange de la viande. (ne … jamais) => Elle ne mange jamais de viande. | Sie isst nie Fleisch.
Je comprends tout. (ne … rien) => Je ne comprends rien. | Ich verstehe nichts.
J'aime le poisson. (ne … pas) => Je n'aime pas le poisson. | Ich mag keinen Fisch.
Nous avons du pain. (ne … plus) => Nous n'avons plus de pain. | Wir haben kein Brot mehr.
Tu veux partir. (ne … pas) => Tu ne veux pas partir. | Du willst nicht gehen.
Il connaît quelqu'un. (ne … personne) => Il ne connaît personne. | Er kennt niemanden.
On va à la piscine. (ne … jamais) => On ne va jamais à la piscine. | Wir gehen nie ins Schwimmbad.
Ils achètent des fraises. (ne … pas) => Ils n'achètent pas de fraises. | Sie kaufen keine Erdbeeren.`},
   {id:"g5b", t:"Welche Verneinung passt?", k:"mc", d:"Wähle aus.", tip:0, items:`
Ich habe nichts gesagt. → Je n'ai ___ dit. | *rien ~ personne ~ jamais
Er ist nicht mehr da. → Il n'est ___ là. | *plus ~ pas ~ rien
Wir gehen nie ins Kino. → Nous n'allons ___ au cinéma. | *jamais ~ plus ~ personne
Ich sehe niemanden. → Je ne vois ___. | *personne ~ rien ~ jamais
Sie mag keine Erdbeeren. → Elle n'aime ___ les fraises. | *pas ~ rien ~ personne`}
  ]},

{ id:"g6", group:"extra", icon:"question", color:"violet",
  title:"Fragen & Fragewörter", short:"Fragewörter", fr:"où, quand, pourquoi …",
  rules:[
  {h:"Die Fragewörter", html:`
<table class="tbl"><tr><td>qui ?</td><td>wer?</td></tr><tr><td>qu'est-ce que ? / que ?</td><td>was?</td></tr><tr><td>où ?</td><td>wo? wohin?</td></tr><tr><td>d'où ?</td><td>woher?</td></tr><tr><td>quand ?</td><td>wann?</td></tr>
<tr><td>comment ?</td><td>wie?</td></tr><tr><td>pourquoi ?</td><td>warum? – Antwort: parce que</td></tr><tr><td>combien ? / combien de ?</td><td>wie viel? wie viele?</td></tr><tr><td>à quelle heure ?</td><td>um wie viel Uhr?</td></tr><tr><td>quel / quelle / quels / quelles ?</td><td>welche(r/s)?</td></tr></table>`},
  {h:"Fragen mit est-ce que", html:`<p class="formula">(Fragewort) + <b>est-ce que</b> + Subjekt + Verb ?</p>
<div class="ex">[Est-ce que tu as faim ?|Hast du Hunger?] [Où est-ce que tu habites ?|Wo wohnst du?] [Qu'est-ce que tu manges ?|Was isst du?]</div>
<div class="note">Vor Vokal: <b>est-ce qu'</b>: [Est-ce qu'il vient ?|Kommt er?]</div>`}
  ],
  lessons:[
   {id:"g6a", t:"Welches Fragewort?", k:"mc", d:"Wähle das passende Fragewort.", tip:0, items:`
___ tu habites ? – À Lyon. | *Où ~ Quand ~ Comment
___ est-ce que le film commence ? – À 20 heures. | *À quelle heure ~ Où ~ Qui
___ tu t'appelles ? – Léo. | *Comment ~ Pourquoi ~ Combien
___ est-ce que tu es triste ? – Parce que mon chat est malade. | *Pourquoi ~ Quand ~ Qui
___ coûtent les cerises ? – 4 euros le kilo. | *Combien ~ Comment ~ Où
___ est-ce ? – C'est ma prof de français. | *Qui ~ Que ~ Où
___ est-ce que tu fais ce week-end ? – Je vais à la mer. | *Qu' ~ Qui ~ Où
___ est-ce que tu viens ? – D'Allemagne. | *D'où ~ Où ~ Quand
___ fromage voulez-vous ? – Le camembert, s'il vous plaît. | *Quel ~ Quelle ~ Qui`},
   {id:"g6b", t:"Frage mit est-ce que", k:"tf", d:"Forme die Frage mit est-ce que um.", tip:1, items:`
Tu as faim ? => Est-ce que tu as faim ? | Hast du Hunger?
Où tu habites ? => Où est-ce que tu habites ? | Wo wohnst du?
Il vient ce soir ? => Est-ce qu'il vient ce soir ? | Kommt er heute Abend?
Quand vous partez ? => Quand est-ce que vous partez ? | Wann fahrt ihr los?
Elle aime le chocolat ? => Est-ce qu'elle aime le chocolat ? | Mag sie Schokolade?
Pourquoi tu ris ? => Pourquoi est-ce que tu ris ? | Warum lachst du?`}
  ]},

{ id:"g7", group:"extra", icon:"future", color:"cyan",
  title:"Futur composé", short:"Futur", fr:"Je vais partir.",
  rules:[
  {h:"aller + Infinitiv", html:`<p>Mit dem <b>futur composé</b> sagst du, was <b>gleich</b> oder <b>bald</b> passiert:</p>
<p class="formula">aller (konjugiert) + Infinitiv</p>
<div class="ex">[Je vais manger.|Ich werde essen.] [Nous allons partir en vacances.|Wir werden in Urlaub fahren.] [Il va pleuvoir.|Es wird regnen.]</div>
<div class="note">Verneinung um <b>aller</b>: [Je ne vais pas venir.|Ich werde nicht kommen.] Pronomen vor dem Infinitiv: [Je vais lui téléphoner.|Ich werde ihn anrufen.]</div>`}
  ],
  lessons:[
   {id:"g7a", t:"Tabellen im Futur composé", k:"conj", verbs:"faire acheter boire", tense:"fut", tip:0},
   {id:"g7b", t:"Was wird passieren?", k:"gap", d:"Bilde das futur composé.", tip:0, items:`
Demain, je ___ (faire) les courses. | vais faire | Morgen werde ich einkaufen.
Nous ___ (partir) en vacances. | allons partir | Wir werden in Urlaub fahren.
Il ___ (pleuvoir) ce soir. | va pleuvoir | Heute Abend wird es regnen.
Tu ___ (venir) à ma fête ? | vas venir | Wirst du zu meiner Party kommen?
Vous ___ (acheter) des fraises ? | allez acheter | Werdet ihr Erdbeeren kaufen?
Elles ___ (préparer) un gâteau. | vont préparer | Sie werden einen Kuchen backen.
Je ne ___ pas ___ (boire) de coca. | vais ; boire | Ich werde keine Cola trinken.
On ___ (choisir) un film. | va choisir | Wir werden einen Film aussuchen.`}
  ]},

{ id:"g8", group:"extra", icon:"past", color:"amber",
  title:"Passé composé", short:"Passé composé", fr:"J'ai mangé. Je suis allé.",
  rules:[
  {h:"Bildung mit avoir", html:`<p class="formula">avoir (Präsens) + Partizip Perfekt</p>
<p>Partizip: -er → <b>-é</b> (mangé), -ir → <b>-i</b> (fini), -re → <b>-u</b> (vendu).</p>
<div class="ex">[J'ai mangé une pomme.|Ich habe einen Apfel gegessen.] [Nous avons fini.|Wir sind fertig geworden.]</div>
<table class="tbl"><tr><th>Infinitiv</th><th>Partizip</th><th>Infinitiv</th><th>Partizip</th></tr>
<tr><td>être</td><td>été</td><td>avoir</td><td>eu</td></tr><tr><td>faire</td><td>fait</td><td>prendre</td><td>pris</td></tr><tr><td>voir</td><td>vu</td><td>boire</td><td>bu</td></tr>
<tr><td>mettre</td><td>mis</td><td>connaître</td><td>connu</td></tr><tr><td>lire</td><td>lu</td><td>écrire</td><td>écrit</td></tr><tr><td>pouvoir</td><td>pu</td><td>vouloir</td><td>voulu</td></tr></table>`},
  {h:"Bildung mit être", html:`<p>Verben der <b>Bewegung</b> und des <b>Zustandswechsels</b> bilden das passé composé mit <b>être</b>: aller, venir, arriver, partir, entrer, sortir, rester, rentrer, tomber, monter, descendre, naître, mourir.</p>
<p>Dann wird das Partizip <b>angeglichen</b> wie ein Adjektiv:</p>
<div class="ex">[Il est allé au marché.|Er ist auf den Markt gegangen.] [Elle est allée au marché.|Sie ist auf den Markt gegangen.] [Ils sont partis.|Sie sind abgefahren.]</div>`},
  {h:"Verneinung", html:`<p>Die Verneinung umschließt das <b>Hilfsverb</b>:</p><div class="ex">[Je n'ai pas mangé.|Ich habe nicht gegessen.] [Elle n'est pas venue.|Sie ist nicht gekommen.]</div>`}
  ],
  lessons:[
   {id:"g8a", t:"Tabellen im Passé composé", k:"conj", verbs:"manger faire boire aller", tense:"pc", tip:0},
   {id:"g8b", t:"Passé composé mit avoir", k:"gap", d:"Setze das passé composé ein.", tip:0, items:`
Hier, j'___ (manger) une crêpe. | ai mangé | Gestern habe ich einen Crêpe gegessen.
Nous ___ (faire) les courses. | avons fait | Wir haben eingekauft.
Tu ___ (boire) ton chocolat ? | as bu | Hast du deine Schokolade getrunken?
Elle ___ (mettre) la table. | a mis | Sie hat den Tisch gedeckt.
Ils ___ (voir) un film. | ont vu | Sie haben einen Film gesehen.
Vous ___ (choisir) un cadeau ? | avez choisi | Habt ihr ein Geschenk ausgesucht?
J'___ (prendre) le bus. | ai pris | Ich habe den Bus genommen.
On ___ (finir) les devoirs. | a fini | Wir haben die Hausaufgaben fertig gemacht.`},
   {id:"g8c", t:"avoir oder être?", k:"mc", d:"Welches Hilfsverb?", tip:1, items:`
Elle ___ allée au marché. | *est ~ a | Sie ist auf den Markt gegangen.
Nous ___ acheté des pommes. | *avons ~ sommes | Wir haben Äpfel gekauft.
Ils ___ partis à 8 heures. | *sont ~ ont | Sie sind um 8 Uhr losgefahren.
J'___ bu un jus d'orange. | *ai ~ suis | Ich habe einen Orangensaft getrunken.
Tu ___ venu en bus ? | *es ~ as | Bist du mit dem Bus gekommen?
Léa ___ restée à la maison. | *est ~ a | Léa ist zu Hause geblieben.
Vous ___ fait vos devoirs ? | *avez ~ êtes | Habt ihr eure Hausaufgaben gemacht?
Mon frère ___ tombé du vélo. | *est ~ a | Mein Bruder ist vom Fahrrad gefallen.`}
  ]},

{ id:"g9", group:"extra", icon:"megaphone", color:"orange",
  title:"Imperativ", short:"Imperativ", fr:"Viens ! Allons-y !",
  rules:[
  {h:"Befehle & Aufforderungen", html:`<p>Der Imperativ hat drei Formen – ohne Pronomen:</p>
<table class="tbl"><tr><th></th><th>regarder</th><th>prendre</th><th>aller</th></tr>
<tr><td>tu</td><td>Regarde !</td><td>Prends !</td><td>Va !</td></tr><tr><td>nous</td><td>Regardons !</td><td>Prenons !</td><td>Allons !</td></tr><tr><td>vous</td><td>Regardez !</td><td>Prenez !</td><td>Allez !</td></tr></table>
<div class="warn">Bei <b>-er-Verben</b> (und aller) fällt bei <b>tu</b> das <b>-s</b> weg: <i>tu manges → Mange !</i></div>
<div class="note">Unregelmäßig: être → <b>sois, soyons, soyez</b>; avoir → <b>aie, ayons, ayez</b>. Verneinung: [Ne crie pas !|Schrei nicht!]</div>`}
  ],
  lessons:[
   {id:"g9a", t:"Imperativ bilden", k:"tf", d:"Bilde den Imperativ.", tip:0, items:`
tu regardes => Regarde ! | Schau!
vous écoutez => Écoutez ! | Hört zu! / Hören Sie zu!
nous partons => Partons ! | Lasst uns gehen!
tu prends => Prends ! | Nimm!
tu manges => Mange ! | Iss!
vous mettez la table => Mettez la table ! | Deckt den Tisch!
tu vas => Va ! | Geh!
tu bois => Bois ! | Trink!
tu ne parles pas => Ne parle pas ! | Sprich nicht!
vous choisissez => Choisissez ! | Wählt aus!`}
  ]},

{ id:"g10", group:"extra", icon:"hash", color:"lime",
  title:"Zahlen & Uhrzeit", short:"Zahlen", fr:"soixante-dix, quatre-vingts",
  rules:[
  {h:"Zahlen ab 70", html:`<table class="tbl"><tr><td>70</td><td>soixante-dix (60 + 10)</td></tr><tr><td>71</td><td>soixante et onze</td></tr><tr><td>75</td><td>soixante-quinze</td></tr><tr><td>80</td><td>quatre-vingts (4 × 20)</td></tr><tr><td>81</td><td>quatre-vingt-un (ohne s!)</td></tr><tr><td>90</td><td>quatre-vingt-dix</td></tr><tr><td>99</td><td>quatre-vingt-dix-neuf</td></tr><tr><td>100</td><td>cent</td></tr></table>
<div class="note">Preise am Markt: [3,50 € = trois euros cinquante|drei Euro fünfzig]</div>`},
  {h:"Die Uhrzeit", html:`<div class="ex">[Il est huit heures.|Es ist acht Uhr.] [Il est huit heures et quart.|Es ist Viertel nach acht.] [Il est huit heures et demie.|Es ist halb neun.] [Il est neuf heures moins le quart.|Es ist Viertel vor neun.] [Il est midi.|Es ist zwölf Uhr mittags.]</div>
<div class="warn">Achtung: „halb neun“ = <b>huit</b> heures et demie (nicht neuf)!</div>`}
  ],
  lessons:[
   {id:"g10a", t:"Zahlen erkennen", k:"mc", d:"Welche Zahl ist das?", tip:0, items:`
soixante-dix | *70 ~ 60 ~ 17
quatre-vingts | *80 ~ 24 ~ 90
quatre-vingt-dix-sept | *97 ~ 87 ~ 77
soixante-quinze | *75 ~ 65 ~ 15
quarante-huit | *48 ~ 84 ~ 38
cinquante-trois | *53 ~ 35 ~ 63
soixante et onze | *71 ~ 61 ~ 81
quatre-vingt-un | *81 ~ 91 ~ 21`},
   {id:"g10b", t:"Wie spät ist es?", k:"mc", d:"Wähle die richtige Uhrzeit.", tip:1, items:`
8:15 | *Il est huit heures et quart. ~ Il est huit heures moins le quart. ~ Il est quinze heures huit.
8:30 | *Il est huit heures et demie. ~ Il est neuf heures et demie. ~ Il est huit heures moins demie.
8:45 | *Il est neuf heures moins le quart. ~ Il est huit heures et quart. ~ Il est huit heures moins le quart.
12:00 (mittags) | *Il est midi. ~ Il est minuit. ~ Il est douze.
17:20 | *Il est dix-sept heures vingt. ~ Il est sept heures vingt. ~ Il est dix-sept heures et vingt.
0:00 | *Il est minuit. ~ Il est midi. ~ Il est zéro.`}
  ]},

{ id:"g11", group:"extra", icon:"pointer", color:"indigo",
  title:"ce, cet, cette, ces & quel", short:"ce / quel", fr:"ce marché, cette pomme",
  rules:[
  {h:"Demonstrativbegleiter", html:`<table class="tbl"><tr><th></th><th>Form</th><th>Beispiel</th></tr><tr><td>männlich</td><td><b>ce</b></td><td>ce fromage</td></tr><tr><td>m. vor Vokal/h</td><td><b>cet</b></td><td>cet abricot, cet hôtel</td></tr><tr><td>weiblich</td><td><b>cette</b></td><td>cette pomme</td></tr><tr><td>Plural</td><td><b>ces</b></td><td>ces fraises</td></tr></table>`},
  {h:"quel – welcher?", html:`<table class="tbl"><tr><td>quel</td><td>m. Sg.</td><td>Quel fromage ?</td></tr><tr><td>quelle</td><td>f. Sg.</td><td>Quelle heure ?</td></tr><tr><td>quels</td><td>m. Pl.</td><td>Quels fruits ?</td></tr><tr><td>quelles</td><td>f. Pl.</td><td>Quelles fraises ?</td></tr></table><div class="note">Alle vier Formen klingen gleich!</div>`}
  ],
  lessons:[
   {id:"g11a", t:"ce, cet, cette, ces", k:"gap", d:"Setze den Demonstrativbegleiter ein.", tip:0, choices:["ce","cet","cette","ces"], items:`
Je voudrais ___ fromage. | ce | Ich hätte gern diesen Käse.
Combien coûte ___ melon ? | ce | Wie viel kostet diese Melone?
___ fraises sont délicieuses. | Ces | Diese Erdbeeren sind lecker.
Tu aimes ___ robe ? | cette | Magst du dieses Kleid?
___ abricot est bien mûr. | Cet | Diese Aprikose ist schön reif.
Je ne connais pas ___ hôtel. | cet | Ich kenne dieses Hotel nicht.
___ semaine, il fait beau. | Cette | Diese Woche ist das Wetter schön.
Qui sont ___ garçons ? | ces | Wer sind diese Jungen?`},
   {id:"g11b", t:"quel, quelle, quels, quelles", k:"gap", d:"Setze die richtige Form von quel ein.", tip:1, choices:["quel","quelle","quels","quelles"], items:`
___ heure est-il ? | Quelle | Wie spät ist es?
Tu as ___ âge ? | quel | Wie alt bist du?
___ fruits voulez-vous ? | Quels | Welches Obst möchten Sie?
___ pommes est-ce que tu préfères ? | Quelles | Welche Äpfel magst du lieber?
___ fromage vous prenez ? | Quel | Welchen Käse nehmen Sie?
Tu habites dans ___ rue ? | quelle | In welcher Straße wohnst du?`}
  ]}
];
