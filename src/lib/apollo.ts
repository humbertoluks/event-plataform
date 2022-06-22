import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4mkas0iwx01xm2jem4o6s/master',
  cache: new InMemoryCache()
})

