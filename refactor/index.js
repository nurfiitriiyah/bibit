function findFirstStringInBracket(str) {
    if (str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        if (indexFirstBracketFound >= 0) {
            let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
            if (wordsAfterFirstBracket) {
                wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
                let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
                if (indexClosingBracketFound >= 0) {
                    console.log("tst",wordsAfterFirstBracket.substring(0,
                        indexClosingBracketFound))
                    return wordsAfterFirstBracket.substring(0,
                        indexClosingBracketFound);
                } else {
                    return '';
                }
            } else {
                return '';
            }
        } else {
            return '';
        }
    } else {
        return '';
    }
}

console.log(findFirstStringInBracket("(pite yah) mueheheh"))
