export default function Home() {
  return (
    <>
      <div className="h-screen w-full text-center content-center">
        <h1 className="text-2xl">we bring research to market</h1>
      </div>
      <div className="p-4 text-sm flex flex-col gap-24">
        <div className="grid grid-cols-3 gap-24">
          <h2>PROBLEM</h2>
          <p>
            Professors expressed to us that they spend a lot of time applying for federal and private grants to fund their research and, once secured, pursue targeted results by these companies and governments to renew their funding sources. Some researchers expressed an apathy towards the applicability of their work and felt it was out of their control.
            <br /><br />
            Software Engineers at Google, Meta, and other big tech companies expressed dissatisfaction with the impact of the work and scope of their responsibility. Many people we talked to were starting side projects to spin off into startups. 
            <br /><br />
            Our anecdotal experience was that with startup-related projects we've worked on in the past, the pressure of immediate hyperbolic growth led us to sacrifice the pursuit of superior technology for humanity to tend to other bars to try to impress investors or achieve short-term growth. 
          </p>
          <p>
            We have seen startups, such as OpenAI, make significant exploratory research and development efforts to pursue human knowledge. They haphazardly released a research demo of a fine-tuned version of their GPT-3 for chat. This demo was ChatGPT. Sam Altman, the previous YC president, led the company that accidentally launched the fastest-growing internet product, naming it Chat-Generative-Pretrained-Transformer.
            <br /><br />
            We used GPT-3 in an education platform before ChatGPT was released, and although it was evident in hindsight, we never would have considered its growth once it reached consumers.
            <br /><br />
            This story proved that hacking growth is not a great use of our time, and it will come with care of the technology and the people using it. Pursuing knowledge in academia still puts someone else in control of our capital and the general direction of our endeavors.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-24">
          <h2>PHILOSOPHY</h2>
          <p>
            <i>Focus on the user, and all else will follow.</i> A business interaction is fundamentally a value exchange between two or more humans. We put emerging technologies to use, providing value to people.
            <br /><br />
            <i>Embrace risk to compound success.</i> CSX Labs stands for Computer Science Exploration Laboratories. Exploration is adventuring into areas we are uncomfortable with, where there is a high perceived risk. In our original Business Plan, we discussed how our failures yield lessons that compound in value over time. This principle has held through the past iterations of this company and many failed launches: Solus Regera, Nullref, Candle, Blue-ESPARK, DChat, and many more gave invaluable lessons that strengthened these values.
            <br /><br />
            <i>Integrity and transparency build longevity.</i> Integrity means doing right by our principles and telling the truth. Transparency is congruent with confidentiality in that we guarantee privacy to our customers and post failures for everyone to learn from, regardless of the short-term consequences. The foundation of business is trust; operating in good faith and posting short-term failures builds long-term trust.
          </p>
          <p>
            <i>Health is wealth.</i> There is an epedemic of burnout amoung software engineers at a variety of comapnies, big and small. The personal health and alignment of values amoung our members with the group is prioritized over business metrics, financial and otherwise.
            <br /><br />
            Our health as a business is our creation of core, resistant businesses that are financially healthy regardless of market volatility. We regard financial health as a profitable business that can operate free of market conditions and stick to core principles when making decisions. Advertising makes free products cash flow positive but can drive companies to stay in a narrow chamber on social issues and align with the status quo. We aim to build financially stable businesses with “fortress balance sheets” (a term from Jamie Dimon, CEO of JP Morgan Chase) to operate best to our mission, not our image.
          </p>
        </div>
      </div>
    </>
  );
}
