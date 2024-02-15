products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]
console.log('-------------------------------------------------------------')


products.map(p=>p.pName).forEach(p=> console.log(p))


products.filter(p=>p.display='lcd').forEach(p=>console.log(p))

products.filter(p=>p.band=='5g').forEach(item=>console.log(item.pName))

products.sort((p1,p2)=>p2.price-p1.price).forEach(p=>console.log(p.pName))

coslty=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
console.log(coslty.pName);

cheap=products.reduce((p1,p2)=>p1.price<p2.price?p1:p2)
console.log(cheap.pName);