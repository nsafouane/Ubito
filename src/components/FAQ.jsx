import { useState } from 'react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Do I need technical knowledge to use Ubito?',
      answer: 'None at all. Connect your tools through standard logins — no API keys or config files. Describe your goal in plain English, and approve or deny actions through a simple interface. No code, no terminal, no DevOps — ever.'
    },
    {
      question: 'What is OpenClaw, and why does Ubito use it?',
      answer: 'OpenClaw is one of the most capable open-source AI agent frameworks available. It can browse the web, write and run code, manage files, send emails, post to social media, and much more. Ubito deploys a dedicated OpenClaw agent for every project — fully configured, safely isolated, and connected to your tools — so you get enterprise-grade agent power without any DevOps overhead.'
    },
    {
      question: 'How quickly can I deploy my first AI agent?',
      answer: 'In under 5 minutes. Pick a template (Social Media Manager, Coding Agent, Research Analyst, and more), connect your apps with one click, and describe your first task in plain English. Ubito handles all configuration, credentials, and infrastructure automatically — you just give it a goal.'
    },
    {
      question: "Can the agent do things I haven't approved?",
      answer: 'No. Every consequential action — sending email, pushing code, posting publicly, running commands — pauses and waits for your explicit approval. You define how much autonomy each agent has, from full supervision down to semi-auto for routine, low-risk steps.'
    },
    {
      question: 'Is my data safe? Can agents access each other\'s information?',
      answer: 'Your agents are physically isolated from one another at the infrastructure level — your email agent cannot see your code repo, and vice versa. Credentials are encrypted and never shared between projects. Every file and artifact your agent creates is visible in a browser you control.'
    },
    {
      question: 'What can Ubito agents actually do?',
      answer: 'Ubito agents can manage email, write and review code, browse the web, conduct deep research, draft and publish content, manage social media accounts, analyse trading signals, automate business operations, and much more. You can extend any agent with additional skills from the marketplace — one click, no setup.'
    },
    {
      question: 'How does pricing work — are there API bills or hidden charges?',
      answer: 'Ubito is subscription-based. Your plan includes a monthly credit allowance, and every agent action uses a small number of credits. You can see in real time exactly where your credits go. There are no API bills, no infrastructure costs, and no surprise charges — Ubito manages all API configurations on our end. You only ever see your credit balance.'
    }
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-ubito-cyan text-sm font-medium uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Common questions
          </h2>
          <p className="text-ubito-muted text-lg">
            Everything you need to know about deploying AI agents with Ubito.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-ubito-surface border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium pr-4 text-sm">{faq.question}</span>
                <svg
                  className={`w-4 h-4 text-ubito-cyan shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-ubito-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
