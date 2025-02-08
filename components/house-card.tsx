import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCharacters } from "@/hooks/use-characters";
import type { BaseComponent } from "@/types";
import type { House } from "@/types/api";
import { SwornMembersList } from "./sworn-members-list";
import { Paragraph } from "./ui/typography";

interface HouseCardProps {
  house: House;
}

export const HouseCard: BaseComponent<HouseCardProps> = ({ house }) => {
  const { data: characters } = useCharacters(house.swornMembers);

  const swornMembers = characters
    ?.map((character) => character)
    .filter((character) => character.name.length > 0);

  const coatOfArms = house.coatOfArms.length > 0 ? house.coatOfArms : "Unknown";

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{house.name}</CardTitle>
        <CardDescription>Region of: {house.region}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">Coat of arms: {coatOfArms}</div>
      </CardContent>
      <CardFooter>
        {house.swornMembers.length > 0 ? (
          <SwornMembersList swornMembers={swornMembers} />
        ) : (
          <Paragraph>This house has no sworn members.</Paragraph>
        )}
      </CardFooter>
    </Card>
  );
};
