let ques1 = prompt("Введите количество слогов для клички собаки");
let en = ["ни", "буль", "коль", "то", "ро", "паль", "ми", "ма"];
for (let i = 0; i < ques1; i++) {
    var rand1 = Math.floor(Math.random() * en.length);
    document.write("<span id='block2'>" + en[rand1] + "</span>");
}

let when = ["Вчера", "Сегодня", "Сегодня утром", "Этой ночью", "Неделю назад", "3 дня назад", "Около 3 часов вечера"];
let rand2 = Math.floor(Math.random() * when.length);
let where = [" в Харькове", " в Украине", " в Будапеште", " в Осло", " в Манчестере", " в Дортмунде", " в Барселоне"];
let rand3 = Math.floor(Math.random() * where.length);
let which = [" красивый", " новый", " очаровательный", " старый", " зелёный", " украинский", " вкусный"];
let rand4 = Math.floor(Math.random() * which.length);
let who = [" пёс", " человек", " инопланетянин", " кот", " крокодил", " носорог", " осёл"];
let rand5 = Math.floor(Math.random() * who.length);
let what_did = [" убежал из дома.", " объявил строительство дома.", " сбежал из тюрьмы.", " подружился с попугаем.", " нашёл чужие деньги.", " залез в чужую лоджию.", " попал в плен."];
let rand6 = Math.floor(Math.random() * what_did.length);
let what_came_of_it = [" Из-за этого было много скандалов.", " В связи с этим, люди объявили ему байкот.", " Из этого вышло небольшое приключение.", " Потом за ним гналась полиция.",
    " Затем все возненавидели его.", " Как результат, его обвинили.", " В итоге он больше никому не попадался на глаза."];
let rand7 = Math.floor(Math.random() * what_came_of_it.length);
let what_did_the_people_say = [" Люди сказали: «Это было самое большое происшествие за последние 2 года.»", " Люди сказали: «Это было фантастично.»",
    " Люди сказали: «Больше мы такое не допустим.»", " Люди сказали: «Это было очень любопытно!»", " Люди сказали: «Это произошло внезапно!»", " Люди сказали: «Это было ужасно!»",
    " Люди сказали: «Мы не хотели бы, чтобы эта ситуация повторилась.»"];
let rand8 = Math.floor(Math.random() * what_did_the_people_say.length);
let phrase = when[rand2] + where[rand3] + which[rand4] + who[rand5] + what_did[rand6] + what_came_of_it[rand7] + what_did_the_people_say[rand8];
document.write(phrase);