import { client } from "../..";
import { NotFoundError } from "elysia";

// get data from id
export const getData = async (id: string) => {
  try {
    const user = await client.users.fetch(id);
    return `User's ID is: ${id}, Username: ${user.username}, Discriminator: ${user.discriminator}, Avatar: ${user.displayAvatarURL({ extension: "png" })}`;
  } catch (error) {
    return new NotFoundError();
  }
};

// get avatar from id
export const getAvatar = async (id: string) => {
  try {
    const user = await client.users.fetch(id);
    return user.displayAvatarURL({ extension: "png" });
  } catch (error) {
    return "Couldn't find avatar nor user";
  }
};
