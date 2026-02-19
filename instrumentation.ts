import * as Sentry from "@sentry/nextjs"

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config")

    const { init, start } = await import("@pyroscope/nodejs")
    init({
      serverAddress: process.env.PYROSCOPE_SERVER_ADDRESS || "",
      appName: "antony-nextjs",
      basicAuthUser: process.env.PYROSCOPE_BASIC_AUTH_USER,
      basicAuthPassword: process.env.PYROSCOPE_BASIC_AUTH_PASSWORD,

      tags: {
        env: process.env.NODE_ENV || "production",
      },
      wall: {
        collectCpuTime: true,
      },
      flushIntervalMs: 10000,
    })
    start()
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config")
  }
}

export const onRequestError = Sentry.captureRequestError
