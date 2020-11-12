---
layout: post
title: Building Awareness of Travis County Evictions
date: 2020-11-11
type: post
published: true
thumb: 
thumbalt: BASTA's Covid-19 Eviction Surveillance data dashboard
author:
  first_name: Matt
  last_name: Carey
---

The pandemic and the economic recession have worsened renters' challenges in paying their rent and their bills. Although the Centers for Disease Control and Prevention have imposed an [eviction moratorium](https://www.statesman.com/news/20200910/austin-area-landlords-say-new-eviction-protections-arenrsquot-sustainable) until the end of the year, that moratorium has several exceptions and procedural requirements. In order for tenants to take advantage of the moratorium, they need to be informed of their rights before they lose their homes.

That's why Open Austin has parterned with BASTA (Building and Strengthening Tenant Action) on the Eviction Court Scraper project. This project collects records of eviction hearings from the [Travis County Justice of the Peace courts](https://www.traviscountytx.gov/justices-of-peace), making it easier for researchers to understand where eviction lawsuits are being filed and who is potentially impacted. BASTA is a project of Texas Rio Grande Legal Aid, the same nonprofit that Open Austin partnered with on a separate project called [Tenant File App](https://github.com/open-austin/BASTA-tfwa).

The scraper works by parsing the HTML of [the court's website](https://odysseypa.traviscountytx.gov/JPPublicAccess/default.aspx) and saving structured data about active lawsuits. After BASTA determined that early versions of the scraping tool met its needs, later iterations of the tool have become more complex and more tightly integrated with BASTA's internal processes. The tool began as a command line utility for exporting CSV and JSON files. Developers from BASTA and Open Austin then updated the tool to use a local SQLite database, and later updated it again to a cloud-based Postgres database. The scope of the scraping project also expanded. The first iteration scraped only cases that were labeled as being about eviction, but the current version scrapes all cases as they're published, so users can audit whether cases were correctly classified without needing to re-download the court's data. Users can filter the cases by topic to research questions specific to eviction cases, or they can analyze data about the court's overall workload.

Once the data about eviction lawsuits is collected, BASTA uses it to populate a [dashboard describing the court's caseload](https://trla.maps.arcgis.com/apps/opsdashboard/index.html#/8f5beb8367f44d30aa2ed6eeb2b3b3e4) and the geographic distribution of eviction cases. BASTA also provides an informational page about [how the CARES Act and other pandemic-related regulations](http://www.bastaaustin.org/covid19) affect the rights of renters facing eviction. In the future, BASTA plans to post an editable court calendar, so that court watchers can organize and share their personal observations about the eviction cases on each day.

"Especially now, it's important to keep track of evictions and make sure they're not happening unfairly," said Alex Piazza, a Texas Rio Grande Legal Aid developer who wrote much of the Eviction Court Scraper.

The data that Open Austin helped to collect has also been used to create a report by [the Eviction Lab at Princeton University](https://evictionlab.org/eviction-tracking/austin-tx/). The Eviction Lab's graph shows a [sharp decline in eviction filings](https://evictionlab.org/eviction-tracking/austin-tx/) because of the pandemic and the CARES Act. But with new covid infections reaching unprecedented levels, renters may face even more severe challenges over the coming winter.



