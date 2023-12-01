import { GraphQLError } from "graphql";
import { PersonModelType, Persona } from "../db/Person.ts";


export const Query={
    person:async (_:unknown,args:{id:string}): Promise<PersonModelType> =>{
        const {id}= args;
       const person=  await Persona.findById(id)

       if(!person){
        throw new GraphQLError(`No existe esta mascota ${args.id}`, {
            extensions: { code: "NOT_FOUND" },
          })
       }
       return person;
    },
}