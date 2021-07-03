(async ()=>{
     await require('./USERS').USERS.sync({alter:true});
})();
// (async ()=>{
//     await require('./USERS').USERS.drop();
// })();