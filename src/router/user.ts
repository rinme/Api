import Elysia from "elysia";
import { getData, getAvatar } from "../event/discord/getUser";

export const users = new Elysia().group("/user", (app) =>
  app
    .get("/:id", ({ params: { id } }) => getData(id), {
      detail: {
        tags: ["User"],
      },
    })
    .get(
      "/avatar/:id",
      async ({ params: { id }, redirect }) =>
        redirect(await getAvatar(id)),
      {
        detail: {
          tags: ["User"],
        },
      },
    ),
);
