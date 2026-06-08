import { motion } from "framer-motion"
import RandomApp from "./RandomApp"

export default function HomeApp() {
  return (
    <div className="container my-5 p5-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="p5-panel"
      >
        <div className="row my-5 p5-row">
          <div className="col-12">
            <div className="card mb-3 p5-card">
              <div className="row g-0 align-items-center">

                {/* LEFT LIGHTNING PANEL */}
                <motion.div
                  className="col-md-2"
                  initial={{ x: -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="lightning left p5-lightning">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rL8A3tlOa_LmtgK_C9IICh3kXh0lq1WeVw&s"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </motion.div>

                {/* CENTER TEXT PANEL */}
                <motion.div
                  className="col-md-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="card-body p5-body">
                    <h1 className="card-title p5-title">Welcome</h1>

                    <p className="card-text p5-text">
                      For a quick Chuck Norris joke feel free to use the random joke selector below.
                    </p>

                    <p className="card-text p5-text">
                      Or you can go surf around for more content.
                    </p>
                  </div>
                </motion.div>

                {/* RIGHT LIGHTNING PANEL */}
                <motion.div
                  className="col-md-2"
                  initial={{ x: 100, opacity: 100 }}
                  animate={{ x: 10, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="lightning right p5-lightning">
                    <img
                      src="https://m.media-amazon.com/images/I/61lB9yLfhJL._AC_UF894,1000_QL80_.jpg"
                      alt=""
                      className="img-fluid rounded-end"
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>

        {/* RANDOM APP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <RandomApp />
        </motion.div>
      </motion.div>
    </div>
  )
}
