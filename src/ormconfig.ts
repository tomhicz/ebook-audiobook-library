/**
 * TypeORM config file
 */

export = {
  type: "postgres",
  url: process.env.DATABASE_URL,
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
