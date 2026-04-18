// How to make animated gradient border 👇
// https://cruip-tutorials.vercel.app/animated-gradient-border/
function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full [background:linear-gradient(45deg,#ffffff,theme(colors.gray.50)_50%,#ffffff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.gray.200/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.violet.400)_90%,_theme(colors.indigo.500)_94%,_theme(colors.gray.200/.48))_border-box] rounded-3xl border-2 border-transparent animate-border flex overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;
