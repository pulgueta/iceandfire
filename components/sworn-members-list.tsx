import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { BaseComponent } from "@/types";
import type { Character } from "@/types/api";

interface SwornMembersListProps {
  swornMembers: Character[] | undefined;
}

export const SwornMembersList: BaseComponent<SwornMembersListProps> = ({ swornMembers }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" className="w-full">
          Check members
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <ScrollArea className="h-48 min-h-full">
          <div className="grid gap-2">
            {swornMembers?.map((swornMember) => {
              const name = swornMember.name.length > 0 ? swornMember.name : "No name available";
              const born = swornMember.born.length > 0 ? swornMember.born : "No data available";
              const died = swornMember.died.length > 0 ? swornMember.died : "No data available";

              return (
                <section
                  key={swornMember.url}
                  className="flex items-center justify-between gap-2 rounded border p-2 shadow-sm"
                >
                  <span>{name}</span>
                  {swornMember.died ? (
                    <Popover>
                      <PopoverTrigger>
                        <Badge variant="destructive">Dead</Badge>
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-col items-start gap-2">
                        <span>
                          <strong>Born:</strong> {born}
                        </span>
                        <span>
                          <strong>Died:</strong> {died}
                        </span>
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <Badge>Alive</Badge>
                  )}
                </section>
              );
            })}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};
