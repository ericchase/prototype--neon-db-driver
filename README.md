## About

This goal of this project is to use the online Neon database service on the client's frontend, rather than backend. There are specific use cases for doing something like this. I imagine that usually, these kinds of apps are setup and run by a single user; as naturally, the user would want to keep their credentials safe.

## Dev

quick start with local database

```
bun i
bun run build
bun run db-up          # make sure docker desktop is running
bun run serve
```

druing development, open a separate terminal and run

```
bun run dev
```

note: to test the app with a live Neon database, you'll need an account and a valid connection string
