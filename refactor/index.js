class findFirstStrinng {
    constructor() {
        this.data
    }

    findBricket(character) {
        return this.data.indexOf(character);

    }
    main(str) {
        this.data = str
        const open = this.findBricket("(")
        const close = this.findBricket(")")
        if ((open >= 0 && close > 0) && close > open) {
            return this.data.substring(open + 1, close)
        } else {
            return "not found"
        }

    }
}

const find = new findFirstStrinng()
console.log(find.main('nama : (Nur fitriyah)'))

