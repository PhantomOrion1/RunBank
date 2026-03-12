import { useState } from "react";
import { Link } from "react-router-dom";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="flex items-center px-6 py-5 max-w-4xl mx-auto w-full">
        <Link to="/" className="text-3xl font-bold text-foreground tracking-tight hover:opacity-80 transition-opacity">
          RunBank
        </Link>
      </nav>

      <section className="flex-1 flex items-center justify-center px-6">
        {submitted ? (
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">You're on the list. 🎉</p>
            <p className="mt-2 text-muted-foreground">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-sm text-center">
            <h1 className="text-2xl font-bold text-foreground tracking-tight">Join the Waitlist</h1>
            <p className="mt-2 text-muted-foreground text-sm">Enter your email and we'll let you know when we launch.</p>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-6 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-xl text-base hover:bg-primary/90 transition-colors shadow-sm"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Waitlist;
