class Cotizador {
    constructor(gramo, factorAfiliacion, factorUbicacion, costoGramo) {
        this.gramo = parseInt(gramo) || 1
        this.factorAf = parseFloat(factorAfiliacion) || 1
        this.factorUb = parseFloat(factorUbicacion) || 1
        this.costoGramo = parseFloat(costoGramo) || 1
    }
    cotizar() {
        return (this.gramo * this.factorAf * this.factorUb * this.costoGramo).toFixed(2)
    }
}