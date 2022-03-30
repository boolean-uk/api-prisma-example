const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function seed() {

  await prisma.publisher.create({
    data: { 
      name: 'Penguin',
      books: {
        create: [
          {
            title: "test book", 
            type: "fiction", 
            author: "Mike", 
            topic: "Computing", 
            publicationDate: new Date(Date.parse("2022-10-01")), 
            pages: 100,
          },
          {
            title: "test book 2", 
            type: "non-fiction", 
            author: "Barry", 
            topic: "Boxing", 
            publicationDate: new Date(Date.parse("2022-11-01")),
            pages: 100,
          }
        ]
      }
    }
  })

  await prisma.publisher.create({
    data: { 
      name: 'Tor',
      books: {
        create: [
          {
            title: "cinema stories", 
            type: "nonfiction", 
            author: "Anojan", 
            topic: "bogihraphy", 
            publicationDate: new Date(), 
            pages: 100,
            hardback: true
          }
        ]
      }
    }
  })

  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
