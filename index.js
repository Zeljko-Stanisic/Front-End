let studenti = [
    student_br_1 = {    
        id: 1,
        index: 32,
        ime: 'Filip',
        prezime: 'Filipovic',
        godine: '19',
        fakultet: 'Medicinski fakultet',
        smjer: 'Opsta medicina',
        godinaStudija: 1
    },
    student_br_2 = {
        id: 5,
        index: 45,
        ime: 'Petar',
        prezime: 'Petrovic',
        godine: '21',
        fakultet: 'ETF',
        smjer: 'Primijenjeno racunarstvo',
        godinaStudija: 2
    },
    student_br_3 = {
        id: 7,
        index: 25,
        ime: 'Marko',
        prezime: 'Markovic',
        godine: '22',
        fakultet: 'PMF',
        smjer: 'C',
        godinaStudija: 2,
    },
    student_br_4 = {
        id: 10,
        index: 38,
        ime: 'Jovan',
        prezime: 'Jovanovic',
        godine: '20',
        fakultet: 'UDG',
        smjer: 'Informacione tehnologije',
        godinaStudija: 1,
    },
    student_br_5 = {
        id: 12,
        index: 26,
        ime: 'Milan',
        prezime: 'Milanovic',
        godine: '23',
        fakultet: 'Masinski fakultet',
        smjer: 'Masinstvo',
        godinaStudija: 3,
    }
]; 
//SORTIRANJE//
const sortedByIndex = studenti.sort(function (a, b,){
    return a.index - b.index;

});
console.log(sortedByIndex);


//------------FILTRIRANJE--------------------//

const filter = () => {
    const result=[];

    for(let a of studenti){
        if(a.godinaStudija > 0){
        result.push(a)
    }
}
return result;
}
console.log(filter());

//------------------------------BRISANJE NAJSTARIJEG STUDENTA----------------------///


const deleteOldestStudent = () => {
    let result = [];
    let student = 0, 
    index_studenta = -1;

    for(let i = 0; i < studenti.length; i++)
        if(studenti[i].godine > student){
            sudent = studenti[i].godine;
            index_studenta = i;
        }

    for(let i = 0; i < studenti.length; i++)
        if(i !== index_studenta)
            result.push(studenti[i]);
            
    return result;
};
console.log(deleteOldestStudent());

//----------------DODAVANJE NOVOG STUDENTA-----------------//

const addStudent = Object.create(studenti, {
        id: { value: 8},
        index:{ value: 57},
        ime:{ value: 'Petar'},
        prezime:{ value: 'Petrovic'},
        godine:{ value: 50},
        fakultet:{ value: 'ETF'},
        smjer:{ value: 'Energetika'},
        godinaStudija:{ value: 4},
    });

console.log(addStudent);