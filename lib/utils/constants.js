"use strict";

module.exports = {
  URLS: {
    GIS: "https://images.google.com/",
    GOOGLE: "https://google.com/",
    W_GOOGLE: "https://www.google.com/",
    GOOGLE_NEWS: "https://news.google.com/",
    FAVICONKIT: "https://api.faviconkit.com",
  },
  SELECTORS: {
    // Organic Search Results
    TITLE: "div.BNeawe.vvjwJb.AP7Wnd",
    DESCRIPTION: ".kCrYT .BNeawe.s3v9rd.AP7Wnd:not(:has(.r0bn4c)):not(:has(a))", // Filter out the price
    URL: "div.fP1Qef > div:nth-child(1) > a",

    // Did You Mean
    DID_YOU_MEAN: "#fprsl",

    // Knowledge Panel
    KNO_PANEL_TITLE: ["div.BNeawe.deIvCb.AP7Wnd"],
    KNO_PANEL_DESCRIPTION: ["div.BNeawe.tAd8D.AP7Wnd"],
    KNO_PANEL_URL: "a.BVG0Nb.OxTOff[href]",
    KNO_PANEL_METADATA: "div.BNeawe.s3v9rd.AP7Wnd",
    KNO_PANEL_FILM_RATINGS: [
      'div[class="RWuggc kCrYT"] > div > div.BNeawe.tAd8D.AP7Wnd',
    ],
    KNO_PANEL_SOCIALS:
      'div[data-attrid="kc:/common/topic:social media presence"] > div > kp-carousel > g-scrolling-carousel > div > div > kp-carousel-item > div > g-link > a',
    KNO_PANEL_TYPE: "div.BkwXh > div",
    KNO_PANEL_SONG_LYRICS: "div.ujudUb",
    KNO_PANEL_AVAILABLE_ON: 'div[class="ellip bclEt"]',
    KNO_PANEL_IMAGES: "g-inner-card > div > div > img",
    KNO_PANEL_SONGS: 'a > div > div > div > div[class="title"]',
    KNO_PANEL_BOOKS:
      'div[data-attrid="kc:/book/author:books only"] > a > div > div > div',
    KNO_PANEL_TV_SHOWS_AND_MOVIES:
      'div[data-attrid="kc:/people/person:tv-shows-and-movies"] > a > div > div > div',
    KNO_PANEL_FILM_GOOGLEUSERS_RATING:
      'div[data-attrid="kc:/ugc:thumbs_up"] > div > div > div',

    // Featured Snippet
    FEATURED_SNIPPET_TITLE: [
      'div[class="co8aDb gsrt"]',
      'a[class="sXtWJb gsrt"]',
      'div[class="Xv4xee"]',
    ],
    FEATURED_SNIPPET_DESC: [
      'ol[class="X5LH0c"]',
      'ul[class="i8Z77e"]',
      'div[data-attrid="wa:/description"]',
    ],
    FEATURED_SNIPPET_URL: "div > div > div > div > div > h3 > div > span > a",

    // Top Stories
    TOP_STORIES_DESCRIPTION: ["div.g5wfEd", "div.VeOk3"],
    TOP_STORIES_URL: "a.WlydOe.amp_r",
    TOP_STORIES_SNIPPET: 'div[class="g5wfEd"] > div[role="heading"]',
    TOP_STORIES_WEBSITE: 'div[class="g5wfEd"] > div > g-img > img',

    // “People also ask”
    PAA: [
      "div.s75CSd.u60jwe.gduDCb > span",
      "div.gbCQS.u60jwe.gduDCb > div > span",
      "div.JlqpRe > span",
    ],

    // “People also search for”
    PASF: 'div[class="IHdOHf"] > img',

    // Top News
    PUBLISHER: 'a[data-n-tid="9"]',
    STORY_TITLE: 'a[class="DY5T1d RZIKme"]',
    STORY_IMG: 'img[class="tvs3Id QwxBBf"]',
    STORY_TIME: "time",
  },
};
