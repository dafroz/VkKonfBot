'use strict';

(o) => {


  o['bot'].getMessageSender(o['body'], (user) => {
  	  let nouns = ["заёбок", "урод", "пидорас", "выблядок", "шакал", "долбоящер", "мудак", "мудило", "хуило", "пидорок", "лошара", "хуесос", "хуегрыз", "хуевинбин", "пиздолиз", "шлюхоеб", "аутист", "пиздопидор", "тварь", "паскуда", "козел", "придурок", "ублюдок", "пиздобол", "биомусор", "пИтух", "говнокодер", "имбицил", "дельфиноеб", "жиробас", "онанист", "подкаблучник", "баран", "микропидор", "уебок" , "гипераутист", "макролошара", "опущенец", "трайхардер", "ньюфаг", "унтерменш", "клювожор", "рукоблуд", "очкоблядун", "гомосексуалист"];
	  let adjectives = ["блядский", " вонючий", " ссаный", " ебаный", " ебучий", " нахуй", " блять", " хуеблядский", " обиженный", " обдроченный", " зашкваренный", " опущенный", " всратый", " ебанутый", " IBM-PC-несовместимый", " проприетарный", " ретарднутый", " диванный", " быдланутый", " прыщавый", " криворукий", " биомусорообразный"];	  
  	if(user['id'] == '271741813') return false;
  o['bot'].send(` ${user['first_name']} ${user['last_name']} ${nouns[parseInt(Math.random() * nouns.length - 1)]} ${adjectives[parseInt(Math.random() * adjectives.length - 1)]}`, o['body'], {});
  });
}