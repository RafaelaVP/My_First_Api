exports.calculate  = (birthdate) => {
    const teste = new Date (birthdate)
    const ano = teste.getFullYear()
    const anoagora = new Date().getFullYear()
    const age = anoagora - ano
    return age
}
