import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import './Random.css'
import './Random_1.css'

interface JokeResponse {
  value: string
}

export default function RandomApp() {
  const [joke, setJoke] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchJoke = async () => {
    setLoading(true)
    setError(null)

    try {
      const [response] = await Promise.all([
        fetch("https://api.chucknorris.io/jokes/random"),
        new Promise(resolve => setTimeout(resolve, 500))
      ])

      if (!response.ok) throw new Error("API error")

      const data: JokeResponse = await response.json()
      setJoke(data.value)
    } catch {
      setError("Failed to fetch joke")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row my-5 p5-row">
      <div className="col-12">
        <motion.div
          className="card mb-3 p5-card"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="row g-0 p5-inner">

            {/* TITLE */}
            <motion.h2
              className="mb-4 p5-title"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              Random Chuck Norris Joke
            </motion.h2>

            {/* JOKE AREA */}
            <div className="p5-joke-box">
              <AnimatePresence mode="wait">

                {loading && (
                  <motion.p
                    key="loading"
                    className="mb-4 p5-loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Loading...
                  </motion.p>
                )}

                {error && (
                  <motion.p
                    key="error"
                    className="mb-4 p5-error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {error}
                  </motion.p>
                )}

                {!loading && !error && joke && (
                  <motion.p
                    key={joke}
                    className="mb-4 p5-joke i_shadow"
                    initial={{ opacity: 0, y: 20, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {joke}
                  </motion.p>
                )}

              </AnimatePresence>
            </div>

            {/* BUTTON */}
            <motion.button
              onClick={fetchJoke}
              whileHover={{ scale: 1.1, rotate: -3 }}
              whileTap={{ scale: 0.95, rotate: 1 }}
              className="p5-button px-4 py-2"
            >
              Get New Joke
            </motion.button>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
