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
      const { title, author, imageurl, isbn, read } = args;
      try {
        const book = Book.create({
          title,
          author,
          imageurl,
          isbn,
          read,
        });

        await book.save();

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateBook: async (_: any, args: any) => {
      const { id, ...update } = args;
      try {
        await Book.createQueryBuilder()
          .update(Book)
          .set(update)
          .where("id = :id", { id: id })
          .execute();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteBook: async (_: any, args: any) => {
      try {
        const result = await Book.delete(args.id);
        if (result.affected === 0) {
          return false;
        }
        //return Promise.resolve(await Book.delete(args.id));
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
