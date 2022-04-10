const gioVao = new Date('2022-04-06 10:00:00')
const gioRa = new Date('2022-04-07 13:00:00')
a= gioVao.getHours()
b= gioRa.getHours()

function tinhtienphong(gioVao,gioRa){
   a = gioVao.getHours()
   b= gioRa.getHours()
   if(a= 10:00:00 && b=13:00:00){
       return (tien phong 200)
   }else if(b-a<12){
       return (tien phong 200k)
   }else if(b-a>12){
       return((b-a)*30 + 200)
   }