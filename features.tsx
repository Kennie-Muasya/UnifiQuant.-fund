export default function Features() {
  return (
    <section className="section-container py-24">
      <h2 className="text-5xl font-black text-center">
        Why UniFi Quantum Fund
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          {
            title: "AI Research",
            text: "Machine-assisted alpha discovery."
          },
          {
            title: "Institutional Analytics",
            text: "Advanced risk and exposure monitoring."
          },
          {
            title: "Global Markets",
            text: "Multi-asset quantitative intelligence."
          }
        ].map((feature) => (
          <div
            key={feature.title}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold">
              {feature.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
