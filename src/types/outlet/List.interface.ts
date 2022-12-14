export interface ListOutlet {
  id: number;
  name: string;
  status: boolean;
  data?: List[];
}

export interface List {
  id: number;
  uuid: string;
  user_id: number;
  email: string;
  owner_name: string;
  name: string;
  phone: string;
  address: string;
  description: string;
  village_name: string;
  village_id: number;
  is_center: string;
  category: number;
  type: number;
  created_at: string;
  updated_at: string;
}
