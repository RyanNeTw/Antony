import * as Sentry from "@sentry/nextjs"

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config")

    const { init, start } = await import("@pyroscope/nodejs")
    init({
      serverAddress: process.env.PYROSCOPE_SERVER_ADDRESS || "",
      appName: "antony-nextjs",
      authToken: process.env.PYROSCOPE_AUTH_TOKEN,
      tags: {
        env: process.env.NODE_ENV || "production",
      },
    })
    start()
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config")
  }
}

export const onRequestError = Sentry.captureRequestError
