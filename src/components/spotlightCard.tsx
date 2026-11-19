import type { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Glass bento tile with a soft glow that follows the cursor.
 * The position is written to CSS variables, so moving the mouse never re-renders React.
 */
const SpotlightCard = ({ children, className = "" }: Props) => {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className={`group glass relative h-full overflow-hidden rounded-3xl p-6 sm:p-7
                  transition-[border-color,transform] duration-300
                  hover:-translate-y-1 hover:border-line-strong ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--x, 50%) var(--y, 50%), var(--spot), transparent 70%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
