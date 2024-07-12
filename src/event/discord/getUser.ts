import { client } from "../..";
import { NotFoundError } from "elysia";

type User = {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
};

// get data from id
export const getData = async (id: string) => {

  try {
    const user = await client.users.fetch(id);
    let users: User[] = [
      {
        id: id,
        username: user.username,
        discriminator: user.discriminator,
        avatar: user.displayAvatarURL({ extension: "png" }),
      },
    ];
    return users
  } catch (error) {
    return new NotFoundError();
  }
};