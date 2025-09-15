import { cn } from "@/lib/utils";

export default function TopBar({ className }: { className?: string }) {
  return (
    <div className={cn("w-full text-white", className)}>
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden">
        <div className="relative aspect-[16/3.5] w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd85405da64014520b8d66726bf928a4a%2Fa076d8c82e334bd9887d31a0ee469cb0?format=webp&width=1600"
            alt="Copilot+PC banner"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          {/* Image only banner per request */}
        </div>
      </div>
    </div>
  );
}
