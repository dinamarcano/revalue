import type { Response, NextFunction } from "express";
import type { AuthRequest } from "../../middlewares/auth.middleware";
import * as machinesService from "./machines.service";

export async function getMachinesController(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const machines = await machinesService.getMachines(
      req.user!.userId
    );
    res.json(machines);
  } catch (err) {
    next(err);
  }
}

export async function createMachineController(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const machine = await machinesService.createMachine(
      req.user!.userId,
      req.body
    );
    res.status(201).json(machine);
  } catch (err) {
    next(err);
  }
}

export async function updateMachineController(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const machine = await machinesService.updateMachine(
      req.params.id,
      req.user!.userId,
      req.body
    );
    res.json(machine);
  } catch (err) {
    next(err);
  }
}

export async function deleteMachineController(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await machinesService.deleteMachine(
      req.params.id,
      req.user!.userId
    );
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
