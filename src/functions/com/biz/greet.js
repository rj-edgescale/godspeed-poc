// import { PrismaClient } from './src/datasources/generated-clients/postgres'
// const prisma = new PrismaClient()
// async function create() {
//   const user = await prisma.profile.create({
//     data: {
//       bio: 'alice@prisma.io',
//     },
//   })
//   console.log(user)
// }



module.exports = function greet (req_body) { 
  // create()
  // .then(async () => {

  //   await prisma.$disconnect()

  // })

  // .catch(async (e) => {

  //   console.error(e)

  //   await prisma.$disconnect()

  // })
  
  return "hello "+req_body.name; 
}