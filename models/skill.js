const skills = [
    {id: 125223, skill: 'HTML', done: true},
    {id: 127904, skill: 'JS', done: false},
    {id: 139608, skill: 'CSS', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne, 
    create, 
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1); 
  }

//   const skills = [ 
//     {skill: 'HTML', done: true},
//     {skill: 'CSS', done: true},
//     {skill: 'JS', done: false},
//     {skill: 'jQuery', done: false},
//     {skill: 'node.js', done: false},
//     {skill: 'markdown', done: true},
//     {skill: 'express', done: false}
// ]; 

// module.exports = {
//     getAll: function() {
//         return skills; 
//     }
// };