import Elysia from "elysia";
import generatePayload from "promptpay-qr";

export const pay = new Elysia().group("/pay", (app) =>
  app.get(
    "/:id",
    ({
      params,
      query,
    }: {
      params: { id: string };
      query: { amount?: string };
    }) => {
      const amount = query?.amount ? Number(query.amount) : undefined;
      return generatePayload(params.id, amount ? { amount } : undefined);
    },
    {
      detail: {
        tags: ["Payment"],
      },
    },
  ),
);
