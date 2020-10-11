const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const arrCode = {'00': '', '10':'.', '11':'-'};
  let decodedMsg = '';
  let txtCode;
  let arr = expr.match(/.{1,10}/g);
  let arrStr;

  arr.forEach (element => {
    if (element === '**********') {
      decodedMsg += ' ';
    } else {
      txtCode = '';
      arrStr = element.match(/.{1,2}/g);

      arrStr.forEach (elm => { txtCode += arrCode[elm]; })

      decodedMsg += MORSE_TABLE[txtCode];
    }
  })

  return decodedMsg;
}

module.exports = {
    decode
}