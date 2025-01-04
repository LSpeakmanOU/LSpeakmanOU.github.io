import Navigation from "@/components/navigation";
import Typewriter from "@/components/pizazz/typewriter";
import Info from "@/components/home";
import Greeter from "@/components/greeter";
import { Flex } from '@mantine/core';
import Demo from "@/components/experimental/game";
const traits = [
  "programmer",
  "bioinformatician",
  "software developer",
  "scientist",
  "computational biologist"
];

export default function Home() {
  return (<div>
      <Navigation title="Home"/>
      <div style={{paddingTop:"5%"}}>
      <Greeter/>
      <Flex justify="center" style={{paddingLeft:"2%"}}>
        <Typewriter size="large" startText="I am a" elements={traits} />
      </Flex>
      <Info/>
      <Demo/>
      </div>
    </div>);
}
