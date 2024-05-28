import Elysia from "elysia";
import { swagger } from "@elysiajs/swagger";
import { apiConfig } from "./config/docConfig";
import { users } from "./router/user";
import { etc } from "./router/etc";
import { getGreet } from "./event/etc/getGreet";

export const app = new Elysia()
  .use(
    swagger({
      ...apiConfig.swagger,
    }),
  )
  .use(users)
  .use(etc)
  .get("/", () => `${getGreet()}, Anon!`, {
    detail: {
      tags: ["Etc"],
    },
  })
  .onError(({ code }) => {
    if (code === "NOT_FOUND") return "sorry :( i can't find anything";
  })
  .listen(8080);
