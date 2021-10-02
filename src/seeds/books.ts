import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Book } from "../entities/Book";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Book)
      .values([
        {
          title: "Lord of the Rings",
          authors: [{ first_name: "JRR", last_name: "Tolkien" }],
          imageurl: "qwerty.com/img.png",
          isbn: "1233-456-7890",
          services: [
            {
              name: "Audible",
              mainurl: "audible.co.uk",
              baseurl: "audible.co.uk/library/",
            },
          ],
          booktype: { name: "audiobook" },
          read: true,
        },
      ])
      .execute();
  }
}
