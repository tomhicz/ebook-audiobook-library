import { getApp } from "./app";
import DatabaseConnection from "./database";

DatabaseConnection.connect().then(() => {
  console.log("connected to database");
  const app = getApp();
  //app.start();
  app.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
