import { Book } from "./entities/Book";

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    getBook: async (_: any, args: any) => {
      const { id } = args;

      return await Book.findOne({ where: { id: id } });
    },
    books: async (_: any, args: any) => {
      return await Book.createQueryBuilder("thisBook").getMany();
    },
  },
  Mutation: {
    addBook: async (_: any, args: any) => {
      const { title, author } = args;
      try {
        const book = Book.create({
          title,
          author,
        });

        await book.save();

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
