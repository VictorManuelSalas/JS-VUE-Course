//Para exportar una funcion es lo mismo que exportar un arrreglo o objecto

//Solo se le pone export al inicio, como es  una funcion que se ocupan parametros obtenidos de donde se importara
//Solo hay que agregarlos para que corra correctamente
export const getHeroById = (id, heroes) => {
    return  heroes.find((item) => {
        return item.id == id
    })
}
