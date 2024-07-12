import Elysia from "elysia";
import { getData } from "../event/discord/getUser";

export const users = new Elysia().group("/user", (app) =>
  app.get("/:id", ({ params: { id } }) => getData(id), {
    detail: {
      tags: ["User"],
    },
  }),
);
