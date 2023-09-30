class ListaMegjelenit {
  constructor(terveim, szülElem) {
    this.terveim = terveim;
    this.szülElem = szülElem;
    let lista = this.htmlOssze(terveim);
    szülElem.html(lista);
  }

  htmlOssze(terveim) {
    let lista = "<ul>";
    for (let i = 0; i < terveim.length; i++) {
      lista += "<li>" + terveim[i] + "</li>";
    }
    lista += "</ul>";

    console.log(lista);
    return lista;
  }
}
export default ListaMegjelenit;

//szerkezet használatával családtagok neve táblázatba