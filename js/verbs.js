/* Verben: Präsens, Partizip, Hilfsverb. "g" = Gruppe für die Anzeige. */
window.PRONOUNS = ["je","tu","il / elle / on","nous","vous","ils / elles"];
window.VERBS = [
 {inf:"être", de:"sein", g:"unregelmäßig", p:"suis es est sommes êtes sont", pp:"été", aux:"avoir", core:1},
 {inf:"avoir", de:"haben", g:"unregelmäßig", p:"ai as a avons avez ont", pp:"eu", aux:"avoir", core:1},
 {inf:"faire", de:"machen; tun", g:"unregelmäßig", p:"fais fais fait faisons faites font", pp:"fait", aux:"avoir", core:1},
 {inf:"aller", de:"gehen; fahren", g:"unregelmäßig", p:"vais vas va allons allez vont", pp:"allé", aux:"être", core:1},
 {inf:"prendre", de:"nehmen", g:"unregelmäßig", p:"prends prends prend prenons prenez prennent", pp:"pris", aux:"avoir", core:1},
 {inf:"apprendre", de:"lernen", g:"wie prendre", p:"apprends apprends apprend apprenons apprenez apprennent", pp:"appris", aux:"avoir"},
 {inf:"comprendre", de:"verstehen", g:"wie prendre", p:"comprends comprends comprend comprenons comprenez comprennent", pp:"compris", aux:"avoir"},
 {inf:"voir", de:"sehen", g:"unregelmäßig", p:"vois vois voit voyons voyez voient", pp:"vu", aux:"avoir", core:1},
 {inf:"pouvoir", de:"können; dürfen", g:"unregelmäßig", p:"peux peux peut pouvons pouvez peuvent", pp:"pu", aux:"avoir", core:1},
 {inf:"vouloir", de:"wollen", g:"unregelmäßig", p:"veux veux veut voulons voulez veulent", pp:"voulu", aux:"avoir", core:1},
 {inf:"savoir", de:"wissen; können", g:"unregelmäßig", p:"sais sais sait savons savez savent", pp:"su", aux:"avoir", core:1},
 {inf:"devoir", de:"müssen", g:"unregelmäßig", p:"dois dois doit devons devez doivent", pp:"dû", aux:"avoir", core:1},
 {inf:"venir", de:"kommen", g:"unregelmäßig", p:"viens viens vient venons venez viennent", pp:"venu", aux:"être", core:1},
 {inf:"dire", de:"sagen", g:"unregelmäßig", p:"dis dis dit disons dites disent", pp:"dit", aux:"avoir"},
 {inf:"lire", de:"lesen", g:"unregelmäßig", p:"lis lis lit lisons lisez lisent", pp:"lu", aux:"avoir"},
 {inf:"écrire", de:"schreiben", g:"unregelmäßig", p:"écris écris écrit écrivons écrivez écrivent", pp:"écrit", aux:"avoir"},
 {inf:"partir", de:"weggehen; abfahren", g:"wie partir", p:"pars pars part partons partez partent", pp:"parti", aux:"être"},
 {inf:"sortir", de:"ausgehen; hinausgehen", g:"wie partir", p:"sors sors sort sortons sortez sortent", pp:"sorti", aux:"être"},
 {inf:"dormir", de:"schlafen", g:"wie partir", p:"dors dors dort dormons dormez dorment", pp:"dormi", aux:"avoir"},
 {inf:"attendre", de:"warten (auf)", g:"-re", p:"attends attends attend attendons attendez attendent", pp:"attendu", aux:"avoir"},
 {inf:"vendre", de:"verkaufen", g:"-re", p:"vends vends vend vendons vendez vendent", pp:"vendu", aux:"avoir"},
 {inf:"répondre", de:"antworten", g:"-re", p:"réponds réponds répond répondons répondez répondent", pp:"répondu", aux:"avoir"},
 {inf:"boire", de:"trinken", g:"neu: Unité 4", p:"bois bois boit buvons buvez boivent", pp:"bu", aux:"avoir", nouveau:1},
 {inf:"mettre", de:"legen; stellen; anziehen", g:"neu: Unité 4", p:"mets mets met mettons mettez mettent", pp:"mis", aux:"avoir", nouveau:1},
 {inf:"connaître", de:"kennen", g:"neu: Unité 4", p:"connais connais connaît connaissons connaissez connaissent", pp:"connu", aux:"avoir", nouveau:1},
 {inf:"choisir", de:"(aus)wählen", g:"-ir mit -iss-", p:"choisis choisis choisit choisissons choisissez choisissent", pp:"choisi", aux:"avoir", nouveau:1},
 {inf:"finir", de:"beenden; aufhören", g:"-ir mit -iss-", p:"finis finis finit finissons finissez finissent", pp:"fini", aux:"avoir", nouveau:1},
 {inf:"offrir", de:"schenken", g:"wie -er", p:"offre offres offre offrons offrez offrent", pp:"offert", aux:"avoir"},
 {inf:"acheter", de:"kaufen", g:"-er mit è", p:"achète achètes achète achetons achetez achètent", pp:"acheté", aux:"avoir"},
 {inf:"préférer", de:"lieber mögen", g:"-er mit è", p:"préfère préfères préfère préférons préférez préfèrent", pp:"préféré", aux:"avoir"},
 {inf:"appeler", de:"rufen; anrufen", g:"-er mit ll", p:"appelle appelles appelle appelons appelez appellent", pp:"appelé", aux:"avoir"},
 {inf:"manger", de:"essen", g:"-er mit ge", p:"mange manges mange mangeons mangez mangent", pp:"mangé", aux:"avoir"},
 {inf:"ranger", de:"aufräumen", g:"-er mit ge", p:"range ranges range rangeons rangez rangent", pp:"rangé", aux:"avoir"},
 {inf:"nager", de:"schwimmen", g:"-er mit ge", p:"nage nages nage nageons nagez nagent", pp:"nagé", aux:"avoir"},
 {inf:"commencer", de:"anfangen", g:"-er mit ç", p:"commence commences commence commençons commencez commencent", pp:"commencé", aux:"avoir"},
 {inf:"envoyer", de:"schicken", g:"-er mit i", p:"envoie envoies envoie envoyons envoyez envoient", pp:"envoyé", aux:"avoir"},
 {inf:"payer", de:"bezahlen", g:"-er mit i", p:"paie paies paie payons payez paient", pp:"payé", aux:"avoir"},
 {inf:"parler", de:"sprechen", g:"-er", reg:1},
 {inf:"aimer", de:"mögen; lieben", g:"-er", reg:1},
 {inf:"habiter", de:"wohnen", g:"-er", reg:1},
 {inf:"jouer", de:"spielen", g:"-er", reg:1},
 {inf:"regarder", de:"ansehen", g:"-er", reg:1},
 {inf:"écouter", de:"(zu)hören", g:"-er", reg:1},
 {inf:"travailler", de:"arbeiten", g:"-er", reg:1},
 {inf:"chercher", de:"suchen", g:"-er", reg:1},
 {inf:"trouver", de:"finden", g:"-er", reg:1},
 {inf:"demander", de:"fragen", g:"-er", reg:1},
 {inf:"donner", de:"geben", g:"-er", reg:1},
 {inf:"téléphoner", de:"telefonieren", g:"-er", reg:1},
 {inf:"préparer", de:"vorbereiten", g:"-er", reg:1},
 {inf:"inviter", de:"einladen", g:"-er", reg:1},
 {inf:"aider", de:"helfen", g:"-er", reg:1},
 {inf:"coûter", de:"kosten", g:"-er", reg:1},
 {inf:"rester", de:"bleiben", g:"-er", reg:1, aux:"être"},
 {inf:"arriver", de:"ankommen", g:"-er", reg:1, aux:"être"},
 {inf:"rentrer", de:"nach Hause kommen", g:"-er", reg:1, aux:"être"},
 {inf:"entrer", de:"hereinkommen", g:"-er", reg:1, aux:"être"},
 {inf:"tomber", de:"fallen", g:"-er", reg:1, aux:"être"},
 {inf:"montrer", de:"zeigen", g:"-er", reg:1},
 {inf:"raconter", de:"erzählen", g:"-er", reg:1},
 {inf:"prêter", de:"leihen", g:"-er", reg:1},
 {inf:"expliquer", de:"erklären", g:"-er", reg:1},
 {inf:"goûter", de:"probieren", g:"-er", reg:1},
 {inf:"oublier", de:"vergessen", g:"-er", reg:1},
 {inf:"danser", de:"tanzen", g:"-er", reg:1},
 {inf:"chanter", de:"singen", g:"-er", reg:1},
 {inf:"visiter", de:"besichtigen", g:"-er", reg:1},
 {inf:"apporter", de:"mitbringen", g:"-er", reg:1}
];
(function(){
  for (const v of VERBS){
    if (v.reg){
      const st = v.inf.slice(0,-2);
      v.p = [st+"e",st+"es",st+"e",st+"ons",st+"ez",st+"ent"].join(" ");
      v.pp = st+"é"; v.aux = v.aux || "avoir";
    }
    v.pres = v.p.split(" ");
  }
})();
window.AUX = { avoir:"ai as a avons avez ont".split(" "), etre:"suis es est sommes êtes sont".split(" "), aller:"vais vas va allons allez vont".split(" ") };
window.JE = ["je","tu","il","nous","vous","ils"];
/* Gibt die Formen eines Verbs in einer Zeit zurück (Array mit 6 Einträgen; Einträge sind Arrays mit akzeptierten Lösungen). */
window.conjugate = function(v, tense){
  if (tense === "pres") return v.pres.map(f => [f]);
  if (tense === "fut") return AUX.aller.map(a => [a+" "+v.inf]);
  if (tense === "pc"){
    if (v.aux === "être"){
      return AUX.etre.map((a,i) => {
        const pl = i >= 3, b = v.pp;
        const forms = pl ? [b+"s", b+"es", b+"(e)s"] : [b, b+"e", b+"(e)"];
        return forms.map(f => a+" "+f);
      });
    }
    return AUX.avoir.map(a => [a+" "+v.pp]);
  }
};
window.withPronoun = function(i, form){
  if (i === 0 && /^[aeiouéèêhâî]/i.test(form)) return "j'"+form;
  return ["je ","tu ","il ","nous ","vous ","ils "][i]+form;
};
