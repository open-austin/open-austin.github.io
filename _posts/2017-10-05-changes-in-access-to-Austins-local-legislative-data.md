---
layout: post
title: Changes in Access to Austin's Local Legislative Data
date: 2017-10-05
type: post
published: true
thumb: Austin_city_hall.jpg
thumbalt: Austin city hall building
author:
  first_name: Matt
  last_name: Carey
---

When newcomers to Open Austin decide they're interested in taking on a civic hacking project, one of the most common suggestions they offer is to make our city council's agendas more accessible. It has the potential to be a very visible and impactful project, but the people who have worked on it have found that it's harder than it seems it needs to be. Austin has historically managed its council agenda with an old software tool called [SIRE](https://austin.siretechnologies.com/sirepub/mtgviewer.aspx?meetid=1541&doctype=Agenda). Collecting the agenda text and supporting was a matter of navigating through a network of links to PDFs: not an easy task to automate. And change in this area was somewhat hard to achieve because responsibility for city legislative records was divided between the council itself, the [city clerk's office](http://www.austintexas.gov/department/city-clerk), and the [agenda office](http://www.austintexas.gov/department/supporting-city-councils-work-agenda-office).

The city took a step toward accessibility last year when it began [posting the text of the agenda items](https://data.austintexas.gov/City-Government/Austin-City-Council-Agenda-Items/es7e-878h) to the city data portal. But the data portal isn't always a welcoming place for residents who just want easy access to information about civic issues. When the city had an opportunity to solicit bids for a new agenda management system, Open Austin [sent a letter](https://docs.google.com/document/d/1FOLuCR6kRRTLQD5dyJCuIquRkEoaGi0aqAVlBFwVuPY/edit?usp=sharing) recommending a set of features the city should look for: an open API or bulk downloads, use of a widely accepted data format such as [the "Open Civic Data" standard](https://opencivicdata.readthedocs.io/en/latest/index.html), and easy exports to calendar client formats like iCal, Outlook, and Google Calendar. The city took action to improve the council's website by selecting a new software vendor called [Granicus](https://granicus.com/solutions/meeting-agenda-suite/peak-agenda-management/), but technical problems have bogged down that project and the new system (called Legistar) still isn't live.

Unfortunately, the new system still isn't expected to have all the features available on some other Legistar systems, like [New York's](http://legistar.council.nyc.gov/): it won't reveal how each council member voted on the matters before the council, and it won't assign unique ID numbers to the agenda items for readers to track them from one council meeting to another. Also, an apparent miscommunication led the city to stop updating the dataset on the data portal even though the new system hadn't yet come online to replace it. David Edmonson of [Austin Tech Alliance](https://www.austintech.org/) stepped in and spoke with the city clerk's office about restoring access to the agenda dataset. The city was very helpful, and they restored access to the missing data with ongoing updates.

Around the same time, Open Austin members noticed that another dataset we had been exploring had been taken offline: this time, it was the identities of the entities who hired lobbyists to lobby the city government. This information was once disclosed as part of the city's [lobbyist registration dataset](https://data.austintexas.gov/City-Government/Lobbyists-Master-List-of-Lobbyists/96z6-upac/data). Today, that dataset only identifies the people registered with the city as lobbyists, but it no longer identifies whom they're working for. Finding the identities of the clients requires navigating a [web database](http://www.ci.austin.tx.us/cityclerk/lobbyist/index.cfm), which is much more challenging than just clicking a single download button. (And as [Open Austin's policy agenda](https://docs.google.com/document/d/1nJZ1y4YPiNpuHpoduCIPpF-oF_qOPp8UmDswiEbN-Ts/edit?usp=sharing) points out, we'd like for the published dataset to include not just the identities of the clients, but the entire lobbyist activity reports.) Although Austinites are lucky enough to have a city government that's serious about the quality of the web services it offers to the public, Austin is still several steps away from offering comprehensive accessible data about the local legislative process.

## Continue the Conversation

Do you have a project that makes use of Austin's city council or lobbyist datasets? Tell us about it in the #p-lobbyist-campaign channel of the Open Austin community on Slack: [Get an invite](http://slack.open-austin.org/)

To see an example of a (non-open source) visualization of city council data that grew out of an Open Austin project, visit [minutes.city](http://minutes.city/#/city/austin).

RSVP for our future events on Meetup: [RSVP](http://www.meetup.com/Open-Austin/)

[Follow us on Twitter](https://twitter.com/openaustin?lang=en)
& [Like us on Facebook](https://www.facebook.com/Open-Austin-412390968837071/)

Photo credit: ["Austin City Hall" by Dave Wilson](https://www.flickr.com/photos/dawilson/3017994876) ([CC BY-NC-ND 2.0](https://creativecommons.org/licenses/by-nc-nd/2.0/))
