/**
 * TypeORM config file
 */

const dbURL =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URL
    : `postgres://${process.env.DB_USER || "ea_library"}:${
        process.env.DB_PASSWORD || "ea_library"
      }@${process.env.DB_HOST || "localhost"}:${process.env.DB_PORT || 5432}/${
        process.env.DB_NAME || "ea_library"
      }`;

export = {
  type: "postgres",
  url: dbURL,
  // host: process.env.DB_HOST || "localhost",
  // port: process.env.DB_PORT || 5432,
  // username: process.env.DB_USER || "ea_library",
  // password: process.env.DB_PASSWORD || "ea_library",
  // database: process.env.DB_NAME || "ea_library",
  entities: ["src/entities/**/*.ts", "./dist/entities/*.js"],
  migrations: ["src/migrations/**/*.ts"],
  seeds: ["src/seeds/**/*.ts"],
  logging: false,
  migrationsRun: false /* Disable auto-run migration */,
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
  },
  ssl: {
    rejectUnauthorized: false,
  },
  //options: { trustServerCertificate: true },
  //options: { strictSSL: false },
};
