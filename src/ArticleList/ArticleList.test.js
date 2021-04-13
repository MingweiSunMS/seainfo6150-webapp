import React from "react";
import ArticleList from "./ArticleList";

describe("ArticleList Test",()=>{
    it("renders correctly",()=>{
        const props = [
            {
                "slug": "181121142731-01-termite-nests",
                "title": "Ancient termite megapolis as large as Britain found ",
                "shortText": "Researchers have discovered a gigantic complex of 200 million termite mounds in northeastern Brazil, which may be up to 4,000 years old and covers an area about the size of Great Britain.",
                "text": "<p>Researchers have discovered a gigantic complex of 200 million termite mounds in northeastern Brazil, which may be up to 4,000 years old and covers an area about the size of Great Britain.</p><p>Although visible on Google Earth, the conical mounds, some of which rise up to 10 feet high, are largely hidden from view at ground level in semiarid, thorny-scrub forests, according to research published this month in Current Biology.</p><p><q>These mounds were formed by a single termite species that excavated a massive network of tunnels to allow them to access dead leaves to eat safely and directly from the forest floor,</q> researcher and entomologist Stephen Martin of the UK's University of Salford said in a statement.</p><p><q>The amount of soil excavated is ... equivalent to 4,000 Great Pyramids of Giza, and represents one of the biggest structures built by a single insect species.</q></p><p>The mounds are found in dense, low, dry forest caatinga vegetation and can be seen when the land is cleared for pasture.</p><p>The mounds are found in dense, low, dry forest caatinga vegetation and can be seen when the land is cleared for pasture.</p><p>The mounds, more of which are still being built, came to scientists' attention when some of the lands were cleared for pasture in recent decades.</p><p>Soil samples collected from the centers of 11 mounds and dated indicated that the mounds were created 690 to 3,820 years ago. That makes them about as old as the world's oldest known termite mounds in Africa, according to a statement posted online by Cell Press.</p><p>The mounds are not nests but rather the result of the insects' slow and steady excavation of a network of interconnected underground tunnels, which resulted in waste building up in cones on the surface.</p>",
                "pubDate": "Wed, 21 Nov 2018 12:19:45 GMT",
                "pubYear": "2018",
                "author": "Willis Hayden",
                "authorEmail": "willis.hayden@nytimes.com",
                "image": {
                  "_url": "https://cdn.cnn.com/cnnnext/dam/assets/181121142731-01-termite-nests-super-169.jpg",
                  "_height": "619",
                  "_width": "1100"
                },
                "timeStamp": "2018-11-21T12:19:45.000Z",
                "displayDate": "November 21st 2018, 4:19 am"
              },
              {
                "slug": "181121093937-travel-deals-rei-adventures-greek-islands",
                "title": "Travel deals for Black Friday and Cyber Monday ",
                "shortText": "Sure, Thanksgiving is a time to give thanks. But the extended holiday weekend also is a time for some serious retail therapy, especially on discounted travel.",
                "text": "<p>Sure, Thanksgiving is a time to give thanks. But the extended holiday weekend also is a time for some serious retail therapy, especially on discounted travel.</p><p>Starting with Black Friday and continuing through the weekend into Cyber Monday, the long weekend has become one of the most popular stretches for folks in the USA to purchase travel online.</p><p>What are shoppers angling to buy? Here's a look at some of the deals that are likely to pique interest.</p><p>One of the biggest areas for Thanksgiving-weekend savings: Flights. Across the industry, air carriers of every size offer discounts that would tickle just about every wallet.</p><p>The best day to score a flight deal: Tuesday, November 27, according to Hopper, an app that uses data to predict and track airfares. Some companies have billed the day as &ldquo;Travel Deal Tuesday.&rdquo; Of course, deals are expected to be available throughout the weekend, as well.</p><p>Some of these promotions translate into rock-bottom one-way, cross-Atlantic flights. Others mean 20% or 30% discounts across the board.</p><p>RyanAir, the low-cost Irish airline, has published flights from Dublin to other major European cities as low as $6 a pop. Delta is offering a variety of round-trip savings, including tickets from New York to Portugal for less than $700.</p>",
                "pubDate": "Fri, 23 Nov 2018 01:29:06 GMT",
                "pubYear": "2018",
                "author": "Moses Fernandez",
                "authorEmail": "moses.fernandez@nytimes.com",
                "image": {
                  "_url": "https://cdn.cnn.com/cnnnext/dam/assets/181121093937-travel-deals-rei-adventures-greek-islands-super-169.jpg",
                  "_height": "619",
                  "_width": "1100"
                },
                "timeStamp": "2018-11-23T01:29:06.000Z",
                "displayDate": "November 22nd 2018, 5:29 pm"
              }
        ];
        const {container}=render(<ArticleList articles={props}/>);
        expect(container).toMatchSnapshot();
    })
})