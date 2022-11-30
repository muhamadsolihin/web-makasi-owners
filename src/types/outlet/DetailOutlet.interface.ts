import { Service } from "../service/Service.interface";
import { Delivery } from "../service/Delivery.interface";

export interface DetailOutlet {
  id: string;
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
  category: number;
  type: number;
  created_at: string;
  updated_at: string;
  latitude: string;
  longitude: string;
  services_online_order: Service[];
  delivery_setting_response: Delivery[];
}
