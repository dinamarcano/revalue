export interface Machine {
  id: string;
  userId: string;
  bottles: number;
  address: string;
  activity: string;
  createdAt: Date;
}

export interface CreateMachineBody {
  bottles: number;
  address: string;
  activity: string;
}

export interface UpdateMachineBody {
  bottles?: number;
  address?: string;
  activity?: string;
}
