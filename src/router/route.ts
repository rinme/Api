import { Elysia, NotFoundError } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { getGreet } from "../require/etc/getGreet";
import { getData, getAvatar } from "../require/discord/getUser";
import { getDate, getTime } from "../require/etc/getTime";
import { apiConfig } from "../config/docConfig";

const users = new Elysia().group("/user", (app) =>
  app
    .get("/:id", ({ params: { id } }) => getData(id), {
      detail: {
        tags: ["User"],
      },
    })
    .get(
      "/avatar/:id",
      async ({ params: { id }, redirect }) => redirect(await getAvatar(id)),
      {
        detail: {
          tags: ["User"],
        },
      },
    ),
);

const etc = new Elysia()
  .get("/", () => `${getGreet()}, Anon!`, {
    detail: {
      tags: ["Etc"],
    },
  })
  .get("/time", () => `${getTime()}, ${getDate()}`, {
    detail: {
      tags: ["Etc"],
    },
  })
  .get("/404", () => new NotFoundError(), {
    detail: {
      tags: ["Etc"],
    },
  });

export const app = new Elysia()
  .use(
    swagger({
      ...apiConfig.swagger,
    }),
  )
  .use(users)
  .use(etc)

  .onError(({ code }) => {
    if (code === "NOT_FOUND") return "sorry :( i can't find anything";
  })
  .listen(8080);
