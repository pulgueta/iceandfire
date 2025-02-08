import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <Loader2 className="animate-spin" aria-label="Loading" />
    </div>
  );
};
export default Loading;
