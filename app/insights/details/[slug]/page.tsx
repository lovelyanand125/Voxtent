import { notFound } from "next/navigation";

const articles: any = {
"leadership-digital-age": {
title: "Leadership in the Digital Age",
content: `
Leadership today is about influence, not authority.

Founders who create content win attention and trust.

Content is not marketing anymore.
It is your distribution engine.

If you're not visible, you're invisible.
`,
},

"authentic-communities": {
title: "Building Authentic Online Communities",
content: `
Community is the new growth channel.

Brands that engage consistently win long term.

Authenticity builds trust.
Trust builds business.

The future is community-led growth.
`,
},
};

export default function Page({ params }: any) {
const article = articles[params.slug];

if (!article) return notFound();

return ( <main className="bg-[#FAF6F0] min-h-screen px-6 md:px-16 py-20"> <div className="max-w-3xl mx-auto">


    <h1 className="text-4xl font-bold mb-6">
      {article.title}
    </h1>

    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
      {article.content}
    </div>

  </div>
</main>


);
}
