import Elysia, { NotFoundError } from "elysia";
import { getTime, getDate } from "../event/etc/getTime";

export const etc = new Elysia()
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
