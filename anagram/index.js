class anagram {
    constructor() {
        this.array = []
        this.temp = []
        this.result = []
        this.data
    }

    sort(string) {
        return string.split("").sort().join("")
    }


    findUnique(data) {
        let status = false
        for (let k = 0; k < this.array.length; k++) {
            data === this.array[k] ? status = true : ''
        }
        if (!(status)) {
            this.array.push(data)
        }
        return status
    }

    group() {
        for (let i = 0; i < this.data.length; i++) {
            this.findUnique(this.sort(this.data[i]))
        }
        return this

    }

    compare(data) {
        for (let i = 0; i < this.data.length; i++) {
            data === this.sort(this.data[i]) ? this.temp.push(this.data[i]) : ''
        }
        return this
    }

    find() {
        for (let i = 0; i < this.array.length; i++) {
            this.compare(this.array[i]).clear()
        }
    }

    clear() {
        this.result.push(this.temp)
        this.temp = []
    }

    main(data) {
        this.data = data
        this.group().find()
        return this.result

    }

}

const test = new anagram()
console.log(test.main(['kita', 'atik', 'tika', 'aku', 'kia', 'kua', 'makan', 'uak']))
