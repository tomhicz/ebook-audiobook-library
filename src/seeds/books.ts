import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Book } from "../entities/Book";

export default class CreateLibrary implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Book)
      .values([
        {
          title: "Lord of the Rings",
          authors: [{ id: 1, first_name: "JRR", last_name: "Tolkien" }],
          imageurl: "qwerty.com/img.png",
          isbn: "1233-456-7890",
          services: [
            {
              id: 2,
              name: "audible",
              mainurl: "audible.co.uk",
              baseurl: "audible.co.uk/library/",
            },
          ],
          booktype: { name: "audiobook" },
          read: true,
        },
        {
          title: "The Hobbit",
          authors: [{ id: 1, first_name: "JRR", last_name: "Tolkien" }],
          imageurl: "qwerty.com/img.png",
          isbn: "5555-456-7890",
          services: [
            {
              id: 1,
              name: "kindle",
              mainurl: "kindle.co.uk",
              baseurl: "kindle.co.uk/library/",
            },
          ],
          booktype: { name: "ebook" },
          read: true,
        },
        {
          title: "A Long Way to a Small Angry Planet",
          authors: [{ id: 2, first_name: "Becky", last_name: "Chambers" }],
          imageurl: "qwerty.com/img.png",
          isbn: "6666-456-7890",
          services: [
            {
              id: 1,
              name: "kindle",
              mainurl: "kindle.co.uk",
              baseurl: "kibdle.co.uk/library/",
            },
          ],
          booktype: { name: "ebook" },
          read: true,
        },
        {
          title: "Gideon the Ninth",
          authors: [{ id: 3, first_name: "Tamsyn", last_name: "Muir" }],
          imageurl: "qwerty.com/img.png",
          isbn: "3333-456-7890",
          services: [
            {
              id: 2,
              name: "audible",
              mainurl: "audible.co.uk",
              baseurl: "audible.co.uk/library/",
            },
          ],
          booktype: { name: "audiobook" },
          read: true,
        },
        {
          title: "Harrow the Ninth",
          authors: [{ id: 3, first_name: "Tamsyn", last_name: "Muir" }],
          imageurl: "qwerty.com/img.png",
          isbn: "4444-456-7890",
          services: [
            {
              id: 2,
              name: "audible",
              mainurl: "audible.co.uk",
              baseurl: "audible.co.uk/library/",
            },
          ],
          booktype: { name: "audiobook" },
          read: false,
        },
        {
          title: "Catch 22",
          authors: [{ id: 4, first_name: "Joseph", last_name: "Heller" }],
          imageurl: "qwerty.com/img.png",
          isbn: "5444-456-7890",
          services: [
            {
              id: 1,
              name: "kindle",
              mainurl: "kindle.co.uk",
              baseurl: "kindle.co.uk/library/",
            },
          ],
          booktype: { name: "ebook" },
          read: false,
        },
      ])
      .execute();
  }
}
