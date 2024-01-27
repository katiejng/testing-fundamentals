import { fetchUser } from "./networkCall";
export type UserFullname = {
  fullname: string;
};
export const getUserFullname = async (id: string): Promise<UserFullname> => {
  const user = await fetchUser(id);

  return {
    fullname: `${user.firstName} ${user.lastName}`,
  };
};
