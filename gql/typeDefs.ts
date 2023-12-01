export const typeDefs=`#graphql
type Person{
    id:ID!
    name:String!
    city: String!
    cp: String!
    localtime: String!
}

type Query{
    person(id:ID!): Person!
}
type Mutation{
    addPerson(name: String!,cp:String!):Person!
    updatePerson(id:ID!,name: String!,cp:String!):Person!
}

`;
