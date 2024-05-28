import Elysia from "elysia";
import { swagger } from "@elysiajs/swagger";
import { apiConfig } from "./config/docConfig";
import { users } from "./router/user";
import { etc } from "./router/etc";
import { getGreet } from "./event/etc/getGreet";
import { pay } from "./router/payment";

export const app = new Elysia()
  .use(
    swagger({
      ...apiConfig.swagger,
    }),
  )
  .use(users)
  .use(etc)
  .use(pay)
  .get("/", () => `${getGreet()}, Anon!`, {
    detail: {
      tags: ["Etc"],
    },
  })
  .onError(({ code }) => {
    if (code === "NOT_FOUND") return "sorry :( i can't find anything";
  })
  .listen(8080);
