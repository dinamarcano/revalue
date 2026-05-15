import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import { config } from "../../config";
import type {
  RegisterBody,
  LoginBody,
  AuthTokenPayload,
  UserRecord,
} from "./auth.types";

// In-memory store — replace with pg queries against a users table.
const users: UserRecord[] = [];

export async function register(body: RegisterBody) {
  const existing = users.find((u) => u.email === body.email);
  if (existing) throw new Error("Email already in use");

  const passwordHash = await bcrypt.hash(body.password, 10);

  const user: UserRecord = {
    id: randomUUID(),
    email: body.email,
    passwordHash,
    company: body.company,
    ubication: body.ubication,
  };

  users.push(user);

  return {
    id: user.id,
    email: user.email,
    company: user.company,
  };
}

export async function login(body: LoginBody) {
  const user = users.find((u) => u.email === body.email);

  if (!user) throw new Error("Invalid credentials");

  const valid = await bcrypt.compare(body.password, user.passwordHash);
  if (!valid) throw new Error("Invalid credentials");

  const payload: AuthTokenPayload = {
    userId: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "7d" });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      company: user.company,
    },
  };
}
