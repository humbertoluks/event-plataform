import { gql, useQuery } from "@apollo/client";
import { Event } from "./pages/Event";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

function App() {

  const { data } = useQuery(GET_LESSONS_QUERY);
  // console.log(data)

  interface Lessons {
    id: string;
    title: string;
  }

  return <Event />;
}

export default App;
