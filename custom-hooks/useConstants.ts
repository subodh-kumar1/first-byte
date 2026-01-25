import { getBaseUrl } from "@/lib/getBaseUrl";
import { IConstantType } from "@/types/constants";


export default async function useConstants({customerType}: IConstantType){
  const res = await fetch(`${await getBaseUrl()}/api/constants`);
  const constants = await res.json();
  return constants?.[customerType];
}