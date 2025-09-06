export default function LoginPage() {
  return (
    <div className="w-full max-w-md bg-card shadow-lg rounded-lg p-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-foreground">
        Welcome Back
      </h2>
      <p className="mt-2 text-sm text-muted-foreground text-center">
        Login to access your school portal
      </p>

      {/* Form */}
      <form className="mt-6 space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-foreground"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="mt-2 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Remember + Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="rounded border-border" />
            Remember me
          </label>
          <a href="#" className="text-primary hover:underline font-medium">
            Forgot password?
          </a>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Log in
        </button>
      </form>

      {/* Divider */}
      <div className="mt-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Springfield International School
        </p>
      </div>
    </div>
  );
}
