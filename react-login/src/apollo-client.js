import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri : 'https://content-panther-86.hasura.app/v1/graphql',
    headers: {
        "x-hasura-admin-secret" : 
            "hln8Z8KKoiAddhdNrBo54vFFsnoIyLG1NZGFtYy0NqshdBgZdGbIRZ6OXaI4ZdrP",
    },
    cache: new InMemoryCache(),
});

export default client;