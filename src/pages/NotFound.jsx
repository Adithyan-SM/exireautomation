import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div
      className="
        relative flex min-h-screen
        items-center justify-center
        overflow-hidden
        bg-black text-white
      "
    >

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[180px]" />

      </div>

      <div className="relative z-10 px-5 text-center">

        <p
          className="
            text-sm uppercase
            tracking-[0.3em]
            text-violet-300/70
          "
        >

          Error 404

        </p>

        <h1
          className="
            mt-4 text-6xl
            font-semibold
            tracking-[-0.05em]
            sm:text-7xl
          "
        >

          Page Not Found

        </h1>

        <p
          className="
            mx-auto mt-5 max-w-xl
            text-base leading-relaxed
            text-white/45
            sm:text-lg
          "
        >

          The page you’re looking for doesn’t exist
          or may have been moved.

        </p>

        <Link
          to="/"
          className="
            mt-8 inline-flex
            items-center justify-center
            rounded-full
            bg-gradient-to-r
            from-violet-500
            to-indigo-600
            px-6 py-3
            text-sm font-medium text-white
            shadow-[0_0_40px_rgba(139,92,246,0.25)]
            transition duration-300
            hover:opacity-90
          "
        >

          Back to Home

        </Link>

      </div>

    </div>
  )
}