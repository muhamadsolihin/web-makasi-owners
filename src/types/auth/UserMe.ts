/* eslint-disable */ 
export interface UserMe {
  uuid: string,
  signature_id: string | null,
  user_name: string | null,
  outlet_name: string | null,
  outlet_description: string | null,
  image: string | null,
  user_type: number,
  user_type_name: string | null,
  user_village_name: string | null,
  user_village_id: number | null,
  address: string | null,
  phone: string | number | null,
  account_phone: string | number | null,
  account_email: string | null,
  email: string | null,
  outlet_category: number | null,
  outlet_category_name: string | null,
  outlet_type: number | null,
  outlet_type_name: string | null,
  outlet_village_id: number | null,
  outlet_village_name: string | null,
  outlet_uuid: string | null,
  outlet_id: number | null,
  is_active_recap_cash: number, /* boolean -> 0 or 1 */
  auth_use: number,
  verified: number, /* boolean -> 0 or 1 */
  is_waiting_verified: number, /* boolean -> 0 or 1 */
  latitude: string | null,
  longitude: string | null
}