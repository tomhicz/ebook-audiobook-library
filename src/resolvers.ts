import { Book } from "./entities/Book";
import { Author } from "./entities/Author";
import { Service } from "./entities/Service";
import { BookType } from "./entities/BookType";
import { Not } from "typeorm";

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    //Books
    getBook: async (_: any, args: any) => {
      const { id } = args;

      return await Book.findOne({
        where: { id: id },
        relations: ["authors", "services", "booktype"],
      });
    },
    books: async (_: any, args: any) => {
      return await Book.createQueryBuilder("thisBook")
        .leftJoinAndSelect("thisBook.authors", "authors")
        .leftJoinAndSelect("thisBook.services", "services")
        .leftJoinAndSelect("thisBook.booktype", "booktype")
        .getMany();
    },
    booksByRead: async (_: any, args: any) => {
      return await Book.createQueryBuilder("thisBook")
        .leftJoinAndSelect("thisBook.authors", "authors")
        .leftJoinAndSelect("thisBook.services", "services")
        .leftJoinAndSelect("thisBook.booktype", "booktype")
        .where("thisBook.read = :read", { read: args.read })
        .getMany();
    },
    //Authors
    getAuthor: async (_: any, args: any) => {
      const { id } = args;

      return await Author.findOne({ where: { id: id } });
    },
    authors: async (_: any, args: any) => {
      return await Author.createQueryBuilder("thisAuthor").getMany();
    },
    //Services
    getService: async (_: any, args: any) => {
      const { id } = args;

      return await Service.findOne({ where: { id: id } });
    },
    services: async (_: any, args: any) => {
      return await Service.createQueryBuilder("thisService").getMany();
    },
  },
  Mutation: {
    //Books
    addBook: async (_: any, args: any) => {
      const { title, authors, imageurl, isbn, services, booktype, read } = args;
      try {
        const book = Book.create({
          title,
          authors,
          imageurl,
          isbn,
          services,
          booktype,
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
    readBookToggle: async (_: any, args: any) => {
      try {
        await Book.createQueryBuilder("thisBook")
          .update(Book)
          .set({ read: () => "NOT read" })
          .where("id = :id", { id: args.id })
          .execute();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    //Authors
    addAuthor: async (_: any, args: any) => {
      const { first_name, last_name } = args;
      try {
        const author = Author.create({
          first_name,
          last_name,
        });

        await author.save();

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateAuthor: async (_: any, args: any) => {
      const { id, ...update } = args;
      try {
        await Author.createQueryBuilder()
          .update(Author)
          .set(update)
          .where("id = :id", { id: id })
          .execute();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteAuthor: async (_: any, args: any) => {
      try {
        const result = await Author.delete(args.id);
        if (result.affected === 0) {
          return false;
        }
        //return Promise.resolve(await Author.delete(args.id));
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    //Services
    addService: async (_: any, args: any) => {
      const { name, mainurl, baseurl } = args;
      try {
        const service = Service.create({
          name,
          mainurl,
          baseurl,
        });

        await service.save();

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateService: async (_: any, args: any) => {
      const { id, ...update } = args;
      try {
        await Service.createQueryBuilder()
          .update(Service)
          .set(update)
          .where("id = :id", { id: id })
          .execute();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteService: async (_: any, args: any) => {
      try {
        const result = await Service.delete(args.id);
        if (result.affected === 0) {
          return false;
        }
        //return Promise.resolve(await Service.delete(args.id));
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
