import { useState } from "react";
import pigMascot from "@/assets/pig-mascot.png";

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-4xl mx-auto">
        <div className="flex items-center gap-2.5">
          <span className="text-xl font-bold text-foreground tracking-tight">RunBank</span>
          <span className="text-[11px] font-semibold tracking-wide uppercase bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
            Beta
          </span>
        </div>
        <button
          onClick={scrollToSignup}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Join Waitlist
        </button>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Put your money where your mouth is.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
              RunBank helps you stay consistent with your running goals by putting money on the line.
              Hit your goals and keep your money. Miss them and it goes to charity.
            </p>
            <div className="mt-8">
              <button
                onClick={scrollToSignup}
                className="bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-xl text-base hover:bg-primary/90 transition-colors shadow-sm"
              >
                Join the Waitlist
              </button>
              <p className="mt-3 text-sm text-muted-foreground">Be first to try the beta.</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src={pigMascot}
              alt="RunBank pig mascot"
              className="w-64 md:w-80 drop-shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="max-w-md mx-auto px-6 py-16 md:py-20">
        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
          {submitted ? (
            <div className="text-center py-4">
              <p className="text-xl font-semibold text-foreground">You're on the list. 🎉</p>
              <p className="text-sm text-muted-foreground mt-2">We'll be in touch soon.</p>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-semibold text-foreground text-center mb-5">
                Get early access
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl text-sm hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">
                No spam. Early access only.
              </p>
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
