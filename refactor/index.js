class findFirstStrinng {
    constructor() {
        this.data
    }

    findBricked(character) {
        return this.data.indexOf(character);

    }

    main(str) {
        this.data = str
        const open = this.findBricked("(")
        const close = this.findBricked(")")
        return (open >= 0 && close > 0) && close > open ? this.data.substring(open + 1, close) : "not found"

    }
}

const find = new findFirstStrinng()
console.log(find.main('nama : (Nur fitriyah)'))

