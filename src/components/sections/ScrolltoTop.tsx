import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="h-12 w-12 rounded-2xl bg-[#0d3458] p-0 text-white hover:bg-[#0d3458]/90"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
