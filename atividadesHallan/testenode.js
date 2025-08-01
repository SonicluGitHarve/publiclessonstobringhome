class cnpj {
    constructor(id, cnpj, nome, cidade, area) {
        this.id = id;
        this.cnpj = cnpj;
        this.nome = nome;
        this.cidade = cidade;
        this.area = area;
    }

    toObject() {
        return {
            id: this.id,
            cnpj: this.cnpj,
            nome: this.nome,
            cidade: this.cidade,
            area: this.area
        }
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }
}

const newCNPJ = new cnpj(7, 13085, 'Sonic', 'GreenHill', 'RingCollection')

console.log(newCNPJ)

console.log(newCNPJ.toObject())

console.log(newCNPJ.toJSON())