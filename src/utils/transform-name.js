import { TOREMOVE } from "@/config/constants";

export function transformName(name) {

  const regex = new RegExp(TOREMOVE, 'gi')
  return name.replace(/.png/gi, ".png")
  .replace(regex, "");
}