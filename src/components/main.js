import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bgc: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      bgc: !state.bgc,
    }));
  }

  render() {
    let styling = () => {
      if (this.state.bgc === false) 
      return "black";
      else return "white";
    };
    console.log(styling());
    let black = "black";
    let white = "white";

    let sty = () => {
      if (this.state.bgc === true)
       return "black";
      else return "white";
    };

    return (
      <div className="container" style={{ backgroundColor: styling(), color:sty(),transition: '1s' }}>
        <button type="checkbox" checked data-toggle="toggle" onClick={this.handleClick}>
          {this.state.bgc ? "Dark Mode ON" : "Dark Mode OFF"}
        </button>
       
        <h2> 10 Wildly-Successful Blogs That Earn Outlandish Incomes.</h2>
        <p>
          {" "}
          In an astounding feat of bits and bytes, the internet buzzes with
          activity, teeming with thousands of terabytes of digitized information
          flowing every minute. It is a spectacle of data whizzing around the
          globe, invisible to the naked eye, but conveyed in the digital
          algorithms and lossless-compression systems that allow us to instantly
          see, chat and discover the world and communicate with our friends in
          real-time. It is a system of machines that stretches across from
          continent to continent, digitally snaking its way into our phones and
          lives through some magical ether that not many can digest. Yes, the
          internet is an enormous, buzzing behemoth filled with mind-boggling,
          vast amounts of free-flowing data. Amongst that data is information
          that many of us actively seek on a daily basis, looking to improve our
          lives by learning new skills or achieving outlandish goals. Those
          answers are found amidst the websites that litter the internet,
          binding themselves to one another through hyperlinks that create a
          complex and convoluted web, digitally spun from the minds of billions
          of people across the planet. When you stop to think about it, the
          sheer amount of websites can also confuse and perplex us. The simple
          fact is that way back in September of 2014, one billion websites were
          actively humming on the web. That's Billion with a capital, B. Today,
          nearly 1000 websites are created every single minute of every single
          day. That's a vast amount of data in the proverbial cloud. Yet with
          all of this content floating about the untethered net, the amount of
          quality-content sites, the type that many people visit on a daily
          basis, seem few and far between. Great content seems to be more of the
          exception rather than the norm. That might be why, today at least,
          people are acutely aware that having incredible content is something
          that can't be overlooked. High-quality content is one of the primary
          drivers of relevant search traffic, the kind that most digital
          marketers salivate over. And the simple truth and fact of the matter
          remains that no website, big or small, can succeed today without great
          content. Yet, people often overlook this one simple rule. Blogs offer
          an avenue for delivering that value to a global audience. They provide
          a hub for tutorials and walk-throughs, and an avenue for crafting and
          constructing resources that help individuals that are looking for
          useful information. Everyone knows that. We are all experts at finding
          quality resources on the web that deliver real value, thanks in large
          part to Google. While there are clearly an endless drove of blogs out
          there being started on a daily basis, most people who start a blog
          don't actually follow through with it. Success in the blogging field
          requires consistency. And it requires the deliverance of real value
          constantly. Similar to a great magazine, a lauded newspaper or any
          other types of media outlet, you have to keep the content machine
          churning if you want to thrive. Not everyone gets it. Most that decide
          to join the fray are enticed by the hype of internet marketers,
          promising them the sun, moon and the stars, with the ability to earn
          thousands of dollars per day, virtually overnight, on autopilot. Well,
          it doesn't quite work that way. The harsh reality is that most blogs
          fail to generate even a few dollars in income let alone vast sums of
          money. Yet, there are people out there that are making outlandish
          incomes from their blogs. Their monthly incomes far surpass the annual
          income of many executive-level employees, leaving most to wonder how
          they did it. This lucrative field is enticing for a reason, yet it
          involves an excruciatingly large amount of work for the average person
          looking to go it alone, so to speak. However, those that have stuck to
          it, pursuing their dreams no matter what the costs, are reaping the
          benefits today. No matter where you look on the internet, no matter
          what niche you survey, you'll find these wildly-successful blogs along
          with the bloggers behind them. We're talking about windfalls of
          profits here. Not only do they make money online, but they quite
          literally rake it in. So what's considered an outlandish amount of
          income? We're not just talking about a few thousand or even tens of
          thousands dollars per month here. What I was curious about were those
          that were soaring to astronomical heights. We're talking the 7-figure
          annual earners, those that are pulling in more than $100,000 per
          month. If you'll sit and think about that number for a moment, you'll
          realize that not only is this is an enormous figure to be earning on a
          monthly basis, but you'll also realize that much of this is actually
          passive income. And while there are a number of great passive income
          ideas, blogging truly takes this to dizzying heights. Why work once
          and get paid once when you can work once and get paid repeatedly by
          having a blog that individuals across the planet are constantly
          accessing? While it's not easy, it is well worth it. Work hard now,
          reap the benefits years down the line. Sound good? Of course it does.
          The following 10 wildly-successful blogs make the cut with at least $1
          million dollars in annual revenue. Seem impossible to do? It's not.
          All you need to do is stay persistent, deliver enormous amounts of
          value and build your audience slowly over time. Not overnight. Over
          time. Please note that some of these figures are estimated numbers
          based on traffic and other publicly-available statistics. If you have
          audited financial information on any of the following sites, please
          contact me to update the proceeding figures. #10 -- Tuts+: $175,000
          per month As a software developer myself, I am incredibly impressed
          with websites like Tuts+ that can deliver such outstanding tutorials
          for people that are looking to learn coding. However, Envato's Tuts+
          isn't some newly-formed site. Founded in 2006 by Collis Ta'eed, Cyan
          Claire, and Jun Rundelivering, it's been delivering outstanding
          tutorials and content to designers and developers from across the
          entire planet for quite some time now. Today, they offer a hub of
          useful content and a tremendous marketplace where 2,000,000 active
          buyers are searching for site templates and useful paid tutorials that
          they offer as part of their platform. They earn their income primarily
          through a membership area and commissions from sales of digital goods
          on their platform. #9 -- Smashing Magazine: $215,000 per month
          Smashing Magazine AG is a company that was also formed in 2006 by Sven
          Lennartz and Vitaly Friedman, dedicated to educating those in the web
          design and web development fields by offering incredibly useful
          content to those that are looking to prosper and learn any of these
          lucrative skills. The site also has begun hosting web development
          conferences since 2012, which take place in cities across the world
          and are sponsored by some of the biggest names in the tech industry.
          The site earns its income primarily from a membership area where users
          can sign up to consume a vast number of tutorials from its palette of
          educational content. #8 -- Gizmodo: $325,000 per month Launched in
          2002, Gizmodo is a blog focused on subjects like design and
          technology, while also paying tribute to numerous areas of science and
          even politics. Originally started by Peter Rojas, Gizmodo gained in
          popularity quickly. Through partnerships with a variety of
          international firms, the blog quickly launched translated versions of
          its content across Europe in languages like French, German, Spanish
          and even Portuguese. Gizmodo makes the majority of its earnings
          through advertisements. On its home page, which is its most valuable
          digital real estate, you won't find an abundance of ads, but you will
          find ads that often repeat. For example, a large ad on the top will be
          parlayed along with ads for the same company on the side as you
          scroll, often repeating with each scroll and capped off with a large
          ad on the bottom of the home page. Subsequent pages often feature a
          variety of differing ads, likely based on historical traffic. #7 --
          Perez Hilton: $575,000 per month PerezHilton is a controversial gossip
          website run by Mario Armando Lavanderia Jr. The site was formerly
          known as PageSixSixSix.com. Lavanderia graduated from NYU on a
          scholarship, and later had dreams to become an actor. Around the same
          time that he began his career in acting, he started his blog.
          Lavanderia's acting career didn't flourish, but his blogging did.
          Today, he earns his income primarily through advertisements from a
          variety of sponsors that appear across the site and Lavanderia himself
          continues to make appearances on television as a celebrity gossip
          commentator and has reached a certain level of notoriety and fame on
          his own. #6 -- CopyBlogger: $1,000,000 per month CopyBlogger was
          started by Brian Clark, who's been immersed in the online marketing
          field since 1998. He was content marketing before the term content
          marketing was even coined. In 2006, with just $1,000 in seed cash, he
          launched CopyBlogger, a site that provides some of the most useful
          online marketing advice in the world. Today, CopyBlogger's parent
          company is known as Rainmaker Digital, with over 200,000 customers,
          the company is constantly releasing useful online tools for digital
          marketers and perpetually educating the public on ways they can expand
          their reach through things like social media, blogging and search
          engine optimization.
        </p>
      </div>
    );
  }
}

export default Main;
