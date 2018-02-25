---
layout: post
title: Open Austin Releases Joint Advocacy Agenda with Austin Tech Alliance
date: 2017-12-04
type: post
published: true
thumb: austin-1022943_250.jpg
thumbalt: View from Congress Avenue Bridge
author:
   first_name: Matt
   last_name: Carey
---

Today, [Austin Tech Alliance](https://www.austintech.org/) and Open Austin [released a joint policy agenda](https://www.austintech.org/austin-tech-alliance-open-austin-release-joint-advocacy-agenda/) with four requests for data transparency from the City of Austin. The requests are "Make City Council meeting agendas and vote data more accessible," "Publish lobbyist activity reports and registration data," "Support researchers’ access to raw data from city surveys," and "Publish data used to produce the greenhouse gas emissions inventories under the Austin Community Climate Plan."

All four of these policy objectives relate to disclosures of data that Open Austin volunteers have been interested in helping to share with the public. A common theme is that we've hit some roadblocks with projects in these areas, and we think that further action by the city could have a positive impact. Here's the text of the requests we presented to the city, along with some background information about the work that people in the Open Austin community have been doing with the four categories of data.

## City Council meeting agendas and vote data

> What: City Council agendas and minutes should be easily navigable and searchable with persistent ID codes for items that come under consideration in multiple meetings and public meeting information for each phase of decision making. Council members’ votes should be released in an open data format. 
>
> Why: With improved navigation and ease of accessing vote histories, residents will better be able to follow an issue or specific policy debate as it progresses through the policy making process.

Open Austin's efforts to publish data about items on the city council agenda included a 2015 hackathon prototype called [Council Connect](https://github.com/open-austin/council-connect), which failed because it was hard to collect the needed data from the city's website. The problem has attracted [continued interest](https://github.com/open-austin/project-ideas/issues/94) among Open Austin members. Data collection is already easier than it used to be, as [explained in a recent Open Austin blog post](https://www.open-austin.org/blog/2017/10/05/changes-in-access-to-Austins-local-legislative-data).

## Lobbyist activity reports and registration data

> What: The lobbyist registration dataset on the city data portal at data.austintexas.gov was recently modified to delete most records prior to 2017 and omit the names of the clients that hired the lobbyists. The city should restore access to those records. Also, recent lobbyist activity reports are now available online only in PDF format. The city should extract the contents of those reports and post them on the data portal.
>
> Why: Disclosure of lobbying datasets allows public access to information showing who is influencing decision makers, providing residents with a more complete picture of the public policy process.

Open Austin produced a few, mostly experimental, [visualizations from the available data](https://www.open-austin.org/projects/lobbying-in-austin.html) about lobbyists on the city and state level. Those experiments led us to conclude that Council Member Pool's 2016 lobby reform proposal [would help the data published by the city form an accurate portrayal of actual lobbyist activity](https://www.open-austin.org/blog/2016/06/12/finding-a-story-in-austins-lobbying-data).

## Raw data from city surveys

> What: Survey data, such as the City of Austin Community Survey, should be made publicly accessible in appropriate formats, including raw data, data maps, questionnaires, and details about survey methodology. Survey data should include demographic questions but not capture any personally identifiable information, preserving the anonymity of individual respondents. For instance, when the city uses an online platform for public deliberation about the city budget, anonymized feedback captured by the tool should be downloadable as open data for analysis by the public. 
>
> Why: Transparent survey methods and data can help to determine whether the survey reached a representative sample of respondents. Researchers might also use them to determine whether the results can be merged together with other datasets to support a larger study, such as a study comparing community services in multiple cities.

[Budget Party](http://austinbudget.party/home) is an Open Austin application used to help people understand and augment a city budget for Austin. Best used in context of an in-person "Budget Party" event, the Budget Party application is intended to facilitate deliberation and collect residents' opinions as structured data. Also, Open Austin supports access to government data for social science research in general.

## Greenhouse gas emissions data

> What: The City should release the data underlying the Community Climate Plan Progress Updates and the City’s calculated progress on its goal of net-zero community-wide greenhouse gas emissions by 2050. This could include site-specific estimates of energy consumption or resulting emissions, or estimates of the emissions reductions from implementing efficiency programs at particular sites.
>
> Why: Disclosure would give residents enough information to evaluate the city’s estimates of the amount of emissions avoided by various categories of efficiency programs. It would also help evaluate the city’s projections of future emissions and identify emissions policy priorities for the future.

Mayor Adler recently reaffirmed the city's goal to have a [cumulative net zero carbon footprint by 2050](http://kxan.com/2017/11/28/austin-and-georgetown-mayors-talk-renewable-impacts-and-climate-change/), and a sense of crisis about environmental issues is one common reason that Open Austin members give for their interest in open data. Despite that, no civic technolocy project about climate change has ever moved beyond the early experimental phase in Open Austin. One reason for that absence could be that the city hasn't yet released the best possible data for measuring the city's progress on its Community Climate Plan.

To determine whether the city is making progress on reducing emissions, a researcher needs to measure not just the actual emissions, but also the emissions that have been avoided due to the city's environmental policies. The city has several good datasets about actual emissions:

1. [emissions by plant](https://data.austintexas.gov/Utilities-and-City-Services/Emissions-By-Plant/ukf5-i76d/data), which is aggregated into [emissions by year](https://data.austintexas.gov/Utilities-and-City-Services/CO2-emissions-by-year/e25g-t5zh), calculated as metric tons of carbon dioxide equivalents (CO2-eq).

2. [carbon intensity](https://data.austintexas.gov/Utilities-and-City-Services/Carbon-Intensity/hetr-8wqd), calculated as the average CO2-eq per kilowatt-hour generated.

3. [Carbon footprint for nine categories of municipal operations](https://data.austintexas.gov/City-Government/Municipal-Carbon-Footprint/acyh-8suc), as CO2-eq.

4. [Travis County Community-wide Greenhouse Gas Emissions Inventory](https://data.austintexas.gov/City-Government/Travis-County-Community-wide-Greenhouse-Gas-Emissi/3maj-7ecz). This dataset contains just three rows of summary statistics, but it covers eight broad categories, it's calculated as CO2-eq, and it's not limited to municipal operations.

5. As the [Office of Sustainability told us](https://medium.com/open-austin/office-of-sustainability-offers-guidance-for-civic-climate-data-2faf348efef4) after this post was originally written, there are also several [ECAD (Energy Conservation Audit and Disclosure) datasets](https://data.austintexas.gov/browse?q=ECAD&sortBy=relevance&page=1), which include energy audits for large commercial buildings.

The other side of the calculation is emissions avoided by following different parts of the climate plan. The city reports:

1. [Emissions avoided in 2012 by various categories of efficiency programs](https://data.austintexas.gov/Utilities-and-City-Services/Energy-Efficiency-Avoided-Emissions-2012/69ir-67ws). This appears to be in real tons of emissions, not CO2 equivalents.

2. [Avoided emissions from plug-in network charges](https://data.austintexas.gov/City-Government/Economy-Creativity-Avoided-emissions-from-plug-in-/wqg5-bweh)

3. A very small dataset about [emissions prevented by a telework pilot program](https://data.austintexas.gov/Utilities-and-City-Services/Austin-Resource-Recovery-Telework-Pilot/ac5x-csd7)

The dataset about emissions avoided through efficiency programs has a lot of useful information, but it only covers the year 2012, which was prior to the adoption of the Community Climate Plan in 2015. (In 2012, Austin Energy was operating under the earlier "[Austin Climate Protection Plan](https://austinenergy.com/ae/about/environment/austin-climate-protection-plan).") Also, some of the dataset's categories of efficiency programs are broad or vague, and it's not clear what methodology was used for attributing emissions reductions to various categories. It would also be helpful for the city to clarify when each efficiency program began so researchers could try to isolate the impact from each program.

It's understandable that the city can't afford to commission exhaustive studies on every aspect of Austin's greenhouse gas emissions. But when the city publishes summary statistics like the ones in the [Community-wide Greenhouse Gas Emissions Inventory](https://data.austintexas.gov/City-Government/Travis-County-Community-wide-Greenhouse-Gas-Emissi/3maj-7ecz), it appears that the information being published might be just the tip of the iceberg, and that the city must possess much more supporting data that it used to calculate the summary statistics. If more of that kind of data was available to the public, it could spark civic technologists' creativity in finding new ways to measure Austin's carbon efficiency, and help climate sustainability become a more quantifiable part of local policy discussions.


## Continue the Conversation

Are you interested in a civic project involving the transparency issues in our policy agenda? Or do you know of available data that we're missing? Get in touch if you think you can help.

Join the discussion in the Open Austin community on Slack: [Get an invite](http://slack.open-austin.org/)

To join one of our civic projects or work on one of your own, come to one of our Civic Hack Night or Civic Hack Saturday events. For policy and community discussion, come to an "Open Gov & Civic Tech" meetup. [RSVP for these events on Meetup](http://www.meetup.com/Open-Austin/)

[Follow us on Twitter](https://twitter.com/openaustin?lang=en)
& [Like us on Facebook](https://www.facebook.com/Open-Austin-412390968837071/)
