import { Heading, Paragraph } from "@/components/ui/typography";

const Page = () => {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-primary">
      <Heading center className="text-primary-foreground">
        BetterCol | Next.js template
      </Heading>
      <Paragraph center className="text-muted-foreground">
        Start editing <code>app/page.tsx</code> and save to reload.
      </Paragraph>
    </main>
  );
};
export default Page;
