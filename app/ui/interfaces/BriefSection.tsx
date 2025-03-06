import AnimatedContent from "app/ui/constants/AnimatedContent";
import { GeistMono } from "geist/font/mono";

export default function BriefSection() {
  return (
    <section className="mb-16">
      <AnimatedContent
        distance={80}
        direction="horizontal"
        reverse={true}
        delay={0.3}
        config={{ tension: 90, friction: 18 }}
        initialOpacity={0.3}
        scale={1.07}
        threshold={0.2}
      >
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold mr-4">Brief</h2>
          <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
        </div>
        <div className="space-y-8">
          <div className="relative z-10">
            <div className="space-y-8">
              <div className="group">
                <p className="text-lg md:text-xl leading-relaxed font-medium tracking-tight mb-6">
                  <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mr-2">
                    01
                  </span>
                  A{" "}
                  <span className="relative">
                    <span
                      className={`font-mono ${GeistMono.className} font-bold bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-800 transition-colors duration-200`}
                    >
                      20 y/o
                    </span>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-neutral-100 dark:bg-neutral-950 text-black dark:text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex flex-row space-x-1">
                      <span>20th</span>
                      <span>April</span>
                    </span>
                  </span>{" "}
                  software designer from Mumbai. Building digital tools with
                  architectural precision.
                </p>

                <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={true}
                  delay={0.4}
                  config={{ friction: 20, tension: 110 }}
                  initialOpacity={0}
                  scale={1.03}
                  threshold={0.3}
                >
                  <p className="text-lg md:text-xl leading-relaxed font-medium tracking-tight mb-6">
                    <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mr-2">
                      02
                    </span>
                    He studied IT and Computer Science at HSNC University,
                    gaining experience as an intern and freelancer. Currently
                    he's focusing on conceptual and systems design; especially
                    for{" "}
                    <span className="text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-800 transition-colors duration-200">
                      Vercel
                    </span>{" "}
                    —a company he aspires to join.
                  </p>
                </AnimatedContent>
                <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={true}
                  delay={0.4}
                  config={{ friction: 20, tension: 110 }}
                  initialOpacity={0}
                  scale={1.03}
                  threshold={0.3}
                >
                  <p className="text-lg md:text-xl leading-relaxed font-medium tracking-tight">
                    <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mr-2">
                      03
                    </span>
                    Enjoys competitive gaming, particularly{" "}
                    <span className="text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-800 transition-colors duration-200">
                      Valorant
                    </span>{" "}
                    and{" "}
                    <span className="text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-800 transition-colors duration-200">
                      Mobile Legends
                    </span>
                    . Also, he is an avid anime watcher, with a special interest
                    in the{" "}
                    <span className="text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-800 transition-colors duration-200">
                      space opera
                    </span>{" "}
                    genre.
                    <div>
                      <AnimatedContent
                        distance={100}
                        direction="horizontal"
                        reverse={true}
                        delay={0.1}
                        config={{ friction: 20, tension: 110 }}
                        initialOpacity={0}
                        scale={1.03}
                        threshold={0.3}
                      >
                        <div
                          className={`md:gap-6 gap-3 py-4 px-4 border rounded-lg border-neutral-200 dark:border-neutral-800 mt-8 ${GeistMono.className} text-sm md:flex md:flex-wrap md:items-start grid grid-cols-2 lg:grid-cols-6 mb-6`}
                        >
                          <AnimatedContent
                            distance={20}
                            direction="horizontal"
                            delay={0.5}
                            config={{ tension: 90, friction: 18 }}
                            initialOpacity={0.3}
                            scale={1.02}
                            threshold={0.1}
                          >
                            <a
                              href="https://x.com/morphinearc"
                              target="_blank"
                              rel="noreferrer"
                              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                            >
                              X
                            </a>
                          </AnimatedContent>
                          <AnimatedContent
                            distance={20}
                            direction="horizontal"
                            delay={0.6}
                            config={{ tension: 90, friction: 18 }}
                            initialOpacity={0.3}
                            scale={1.02}
                            threshold={0.1}
                          >
                            <a
                              href="https://myanimelist.net/profile/arx9781"
                              target="_blank"
                              rel="noreferrer"
                              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                            >
                              MyAnimeList
                            </a>
                          </AnimatedContent>
                          <AnimatedContent
                            distance={20}
                            direction="horizontal"
                            delay={0.2}
                            config={{ tension: 90, friction: 18 }}
                            initialOpacity={0.3}
                            scale={1.02}
                            threshold={0.1}
                          >
                            <a
                              href="https://instagram.com/arx9781"
                              target="_blank"
                              rel="noreferrer"
                              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                            >
                              Instagram
                            </a>
                          </AnimatedContent>
                          <AnimatedContent
                            distance={20}
                            direction="horizontal"
                            delay={0.4}
                            config={{ tension: 90, friction: 18 }}
                            initialOpacity={0.3}
                            scale={1.02}
                            threshold={0.1}
                          >
                            <a
                              href="https://threads.net/@arx9781"
                              target="_blank"
                              rel="noreferrer"
                              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                            >
                              Threads
                            </a>
                          </AnimatedContent>
                          <AnimatedContent
                            distance={20}
                            direction="horizontal"
                            delay={0.3}
                            config={{ tension: 90, friction: 18 }}
                            initialOpacity={0.3}
                            scale={1.02}
                            threshold={0.1}
                          >
                            <a
                              href="https://www.facebook.com/arx9781"
                              target="_blank"
                              rel="noreferrer"
                              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                            >
                              Facebook
                            </a>
                          </AnimatedContent>
                          <AnimatedContent
                            distance={20}
                            direction="horizontal"
                            delay={0.6}
                            config={{ tension: 90, friction: 18 }}
                            initialOpacity={0.3}
                            scale={1.02}
                            threshold={0.1}
                          >
                            <a
                              href="https://discord.gg/TM6Z2GRf"
                              target="_blank"
                              rel="noreferrer"
                              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                            >
                              Discord
                            </a>
                          </AnimatedContent>
                        </div>
                      </AnimatedContent>
                    </div>
                  </p>
                </AnimatedContent>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
