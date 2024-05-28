import Elysia from "elysia";
import { getData, getAvatar } from "../event/discord/getUser";

export const users = new Elysia().group("/user", (app) =>
  app
    .get("/:id", ({ params: { id }, error }) => getData(id), {
      detail: {
        tags: ["User"],
      },
    })
    .get(
      "/avatar/:id",
      async ({ params: { id }, redirect, error }) =>
        redirect(await getAvatar(id)),
      {
        detail: {
          tags: ["User"],
        },
      },
    ),
);
