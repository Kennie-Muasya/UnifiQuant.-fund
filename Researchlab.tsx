export default function ResearchLab() {
  return (
    <section className="section-container py-24">
      <h2 className="text-5xl font-black">
        Quantitative Research Lab
      </h2>

      <p className="text-gray-400 mt-6 max-w-3xl">
        Develop, validate, and optimize
        systematic investment strategies using
        institutional research workflows.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-12">
        {[
          "Alpha Construction",
          "Backtesting Engine",
          "Risk Analytics",
          "AI Research Assistant"
        ].map((item) => (
          <div
            key={item}
            className="glass rounded-3xl p-8"
          >
            <h3 className="font-bold text-xl">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
