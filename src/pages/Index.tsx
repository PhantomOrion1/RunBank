import { Link } from "react-router-dom";
import threePigs from "@/assets/3pigs.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center px-6 py-5 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <span className="text-3xl font-bold text-foreground tracking-tight">RunBank</span>
          <span className="text-[11px] font-semibold tracking-wide uppercase bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
            Coming Soon
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 md:pt-32 text-center flex-1">
        <img
          src={threePigs}
          alt="RunBank pig mascots"
          className="w-80 md:w-[28rem] mx-auto mb-5 drop-shadow-sm"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
          Put your money where your mouth is.
        </h1>
        <p className="mt-4 text-sm md:text-lg text-muted-foreground leading-relaxed max-w-xl text-left ml-2">
          RunBank helps you stay consistent with your running goals by putting money on the line.
          Hit your goals and keep your money. Miss them and it goes to charity.
        </p>
        <Link to="/waitlist" className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-xl text-base hover:bg-primary/90 transition-all shadow-sm <Link to="/waitlist" className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-xl text-base hover:bg-primary/90 transition-all shadow-sm animate-[softPulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:animate-none hover:scale-105"> hover:animate-none hover:scale-105">
          Join Waitlist
        </Link>
      </section>
    </div>
  );
};

export default Index;
