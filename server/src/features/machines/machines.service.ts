import { randomUUID } from "crypto";
import type {
  Machine,
  CreateMachineBody,
  UpdateMachineBody,
} from "./machines.types";

// In-memory store — replace with pg queries against a machines table.
const machines: Machine[] = [];

export async function getMachines(userId: string): Promise<Machine[]> {
  return machines.filter((m) => m.userId === userId);
}

export async function createMachine(
  userId: string,
  body: CreateMachineBody
): Promise<Machine> {
  const machine: Machine = {
    id: randomUUID(),
    userId,
    ...body,
    createdAt: new Date(),
  };

  machines.push(machine);

  return machine;
}

export async function updateMachine(
  id: string,
  userId: string,
  body: UpdateMachineBody
): Promise<Machine> {
  const machine = machines.find(
    (m) => m.id === id && m.userId === userId
  );

  if (!machine) throw new Error("Machine not found");

  Object.assign(machine, body);

  return machine;
}

export async function deleteMachine(
  id: string,
  userId: string
): Promise<void> {
  const index = machines.findIndex(
    (m) => m.id === id && m.userId === userId
  );

  if (index === -1) throw new Error("Machine not found");

  machines.splice(index, 1);
}
