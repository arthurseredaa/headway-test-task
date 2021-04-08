import { FC } from "react";
import { useHistory } from "react-router";

import { Layout } from "../common/Layout/Layout";


export const Home: FC = () => {
  const history = useHistory();

  return <Layout isStart titleText="Who wants to be a millionaire?" buttonText="Start" clickHandler={() => history.push("/game")} />
}
