const NUMBERS_NAME = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
}


module.exports = function toReadable (number) {
    let str = number.toString();
    let result = '';

    if (str.length == 1) {
        return NUMBERS_NAME[number.toString()]
    }

    if (str.length >= 2) {
        if (str.length == 3) result = `${NUMBERS_NAME[str[0]]} hundred `;
        if (str.length == 3 && str[str.length - 2] == 0) result = `${NUMBERS_NAME[str[0]]} hundred`;
        switch (str[str.length - 2] + str[str.length - 1]) {
            case '10':
                return `${result}${NUMBERS_NAME[str[str.length - 2] + str[str.length - 1]]}`;
            case '11':
                return `${result}${NUMBERS_NAME[str[str.length - 2] + str[str.length - 1]]}`;
            case '12':
                return `${result}${NUMBERS_NAME[str[str.length - 2] + str[str.length - 1]]}`;
            case '13':
                return `${result}${NUMBERS_NAME[str[str.length - 2] + str[str.length - 1]]}`;
            case '14':
                return `${result}${NUMBERS_NAME[str[str.length - 2] + str[str.length - 1]]}`;
            case '15':
                return `${result}${NUMBERS_NAME[str[str.length - 2] + str[str.length - 1]]}`;
            case '16':
                return `${result}${NUMBERS_NAME[str[str.length - 2] + str[str.length - 1]]}`;
            case '17':
                return `${result}${NUMBERS_NAME[str[str.length - 2] + str[str.length - 1]]}`;
            case '18':
                return `${result}${NUMBERS_NAME[str[str.length - 2] + str[str.length - 1]]}`;
            case '19':
                return `${result}${NUMBERS_NAME[str[str.length - 2] + str[str.length - 1]]}`;
        }
        if (str[str.length - 2] != 0) result = `${result}${NUMBERS_NAME[str[str.length - 2]+'0']}`;
        if (str[str.length - 1] != 0) return `${result} ${NUMBERS_NAME[str[str.length - 1]]}` 
        return result;
    }
}
