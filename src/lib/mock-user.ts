import type { Role } from "@/types/common.types";

export type MockUser = {
  name: string;
  id: string;
  role: Role;
  email: string;
};

export const mockUser: MockUser = {
  name: "Alex Rivera",
  id: "240912-ST",
  role: "student",
  email: "alex@example.com",
};
