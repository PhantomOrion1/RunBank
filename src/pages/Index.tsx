import { useState } from "react";
import pigMascot from "@/assets/pig-mascot.png";

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-4xl mx-auto">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl font-bold text-foreground tracking-tight">RunBank</span>
          <span className="text-[11px] font-semibold tracking-wide uppercase bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
            Beta
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-12 md:pt-16 md:pb-20 text-center">
        <img
          src={pigMascot}
          alt="RunBank pig mascot"
          className="w-72 md:w-96 mx-auto mb-10 drop-shadow-sm"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
          Put your money where your mouth is.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          RunBank helps you stay consistent with your running goals by putting money on the line.
          Hit your goals and keep your money. Miss them and it goes to charity.
        </p>

        {/* Inline signup */}
        <div className="mt-10 max-w-md mx-auto">
          {submitted ? (
            <div className="py-4">
              <p className="text-xl font-semibold text-foreground">You're on the list. 🎉</p>
              <p className="text-sm text-muted-foreground mt-2">We'll be in touch soon.</p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl text-sm hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">No spam. Early access only.</p>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-muted-foreground">
        <p className="font-medium text-foreground/70">RunBank</p>
        <p className="mt-1">Coming soon</p>
      </footer>
    </div>
  );
};

export default Index;
