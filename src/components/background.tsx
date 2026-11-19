/**
 * Fixed, animated aurora behind the whole page.
 * Uses radial gradients (not CSS blur filters) so it stays cheap on phones.
 */
const Background = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="grid-bg absolute inset-0" />
    <div
      className="absolute -left-[20vw] -top-[25vh] h-[80vh] w-[80vw] rounded-full"
      style={{
        background: "radial-gradient(closest-side, var(--glow-1), transparent)",
        animation: "aurora-1 22s ease-in-out infinite",
      }}
    />
    <div
      className="absolute -right-[25vw] top-[5vh] h-[75vh] w-[75vw] rounded-full"
      style={{
        background: "radial-gradient(closest-side, var(--glow-2), transparent)",
        animation: "aurora-2 26s ease-in-out infinite",
      }}
    />
    <div
      className="absolute bottom-[-30vh] left-[15vw] h-[70vh] w-[70vw] rounded-full"
      style={{
        background: "radial-gradient(closest-side, var(--glow-3), transparent)",
        animation: "aurora-3 30s ease-in-out infinite",
      }}
    />
  </div>
);

export default Background;
