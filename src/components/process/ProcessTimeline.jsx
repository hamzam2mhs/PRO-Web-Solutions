// src/components/process/ProcessTimeline.jsx
import { processSteps } from './processData'
import ProcessStep from './ProcessStep'

export default function ProcessTimeline() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-4">
        {processSteps.map((step, index) => (
          <ProcessStep
            key={step.step}
            step={step}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
