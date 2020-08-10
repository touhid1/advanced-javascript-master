const student = [
    {id:  21, name: 'Sunny '},
    {id:  31, name: 'Miaya '},
    {id:  41, name: 'Moyo '},
    {id:  61, name: 'Hunny '}
];

const names = student.map( s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id>40);
const biggerOne = student.find(s => s.id>40);
console.log(biggerOne);