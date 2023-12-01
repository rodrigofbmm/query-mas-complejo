import { PersonModelType } from "../db/Person.ts";
import getlocaltime from "../lib/getlocaltime.ts";

export const personaa = {
    localtime: async (parent : PersonModelType) => await getlocaltime(parent.city),
}