import * as Sentry from "@sentry/nextjs"
import { init, start } from "@pyroscope/nodejs"

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config")
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config")
  }

  if (process.env.NEXT_RUNTIME === "nodejs") {
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
}

export const onRequestError = Sentry.captureRequestError
