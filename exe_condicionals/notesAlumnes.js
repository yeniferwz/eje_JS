var max_notes = parseInt(prompt("Quants estudiants son? "));
    const MAX_NOTES = max_notes;
    var notes_estudiants = [];
    let nota_mitjana = 0;
    for (var i = 0; i < MAX_NOTES; i++){
        var nota_estudiant = parseInt(prompt("Introdueix la nota de l'estudiant: "));
        notes_estudiants.push(nota_estudiant);
        nota_mijana = parseInt(nota_mitjana);
        nota_mitjana += notes_estudiants[i];
    }
    document.write(nota_mitjana/MAX_NOTES);
        
    let nota_final = parseInt(nota_mitjana/MAX_NOTES);
    classificar_notes(nota_final);
        
    function classificar_notes(nota_final){
        if(nota_final < 6){
            document.write(" F");
        }else if(nota_final < 7){
            document.write(" D");
        }else if(nota_final < 8){
            docuemtn.write(" C");
        }else if(nota_final < 9){
            document.write(" B");
        }else{
            document.write(" A");
        }
    }