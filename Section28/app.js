const data = `{"ticker":{"base":"BTC","target":"USD","price":"0.2210"}}`;

//JSON에서 문자열로
const parsedData = JSON.parse(data);
console.log(parsedData);
console.log(parsedData.ticker.target);

//문자열을 JSON 형식으로
const dog = { breed: 'leb', color: 'green', isAlive: true, owner: undefined };
const stdog = JSON.stringify(dog);
console.log(stdog);
