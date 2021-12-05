let produtos = [
    ['cerveja','Bohemia',6],
    ['tequila','Jose Cuervo',70],
    ['vodka','Absolut',12]
]
for(i = 0; i < 3; i++){
    for(j = 0;j < 3; j++){
        document.write(produtos[i][j]+ " ")
    }
    document.write("<hr>")
}