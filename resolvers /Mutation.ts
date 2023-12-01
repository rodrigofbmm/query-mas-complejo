import { PersonModelType, Persona } from "../db/Person.ts";

export const Mutation={
    addPerson : async (_: unknown, args : {name : string , cp: string},): Promise<PersonModelType>=>{
        const {name,cp} = args;
        const person = new Persona ({
            cp,
            name,
        });
        await person.save();
        return person;
    },
}