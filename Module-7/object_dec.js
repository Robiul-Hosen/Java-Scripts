//object declare 
const Students = {
    // Name is key. and "Sojib is values"
    Name: "Sojib",
    Age: 27, 
    Department: "Computer Science And Engineering.",
    Mobile: '01313333333',
    'E-mail': 'sojib@gmail.com',
    Address: "Noakhali,Senbag,Kankirhat",
    Hobby : ['Cricket', 'Football', 'Traveling']


}

//console.log means print the output with console 
// if i want to see one key of value than use variable['key_name']
console.log(Students['E-mail']);    
// Note: if key name are single word so we can type : variable.key_name
console.log(Students.Address);

// if i want to change or update key value than type : 
// variable ['key'] = 'new_values'; 
Students ['Address'] = 'Chittagong';
console.log(Students['Address'])