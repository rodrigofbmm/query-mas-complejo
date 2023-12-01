import mongoose from "npm:mongoose@7.6.3";
import { Person } from "../type.ts";
import { checkCP } from "../lib/checkCP.ts";
import getCityfromCP from "../lib/getCityfromCP.ts";

const Schema = mongoose.Schema;

const PersonSchema = new Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: false },
    cp: { type: String, required: true },
  },
  { timestamps: true }
);

PersonSchema.path("cp").validate(async (cp) => await checkCP(cp));

//antes de guardar en la base de datos
PersonSchema.pre("save", async function(next){
    try{
        if(this.city) return next();
        if(this.isModified("cp")) return next();
        const cp = this.cp;
        this.city = await getCityfromCP(cp);
        return next();
    }catch(e){
        return next(e);
    }
});

PersonSchema.pre("updateOne", {document: true , query: false}, async function(){
    if(!this.cp) return;
    if(!this.isModified("cp"))return;
    this.city = await getCityfromCP(this.cp);
});


export type PersonModelType = mongoose.Document & Omit<Person,"locatime">;
export const Persona = mongoose.model<PersonModelType>("Person", PersonSchema);