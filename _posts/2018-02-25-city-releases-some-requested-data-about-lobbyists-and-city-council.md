---
layout: post
title: City Releases Some Requested Data about Lobbyists and City Council 
date: 2018-02-25
type: post
published: true
thumb: city-hall-solar-thumbnail.jpg
thumbalt: Photo of Austin City Hall
author:
  first_name: Matt
  last_name: Carey
---

Last week, Austin City Clerk Jannette Goodall and other city officials met with Open Austin and the [Austin Tech Alliance](https://www.austintech.org/) about two datasets requested in the joint OA/ATA [2018 advocacy agenda](https://docs.google.com/document/d/1nJZ1y4YPiNpuHpoduCIPpF-oF_qOPp8UmDswiEbN-Ts/edit?usp=sharing): lobbyist activity reports and city council meeting records.

## Lobbyist Activity Reports

In the past, several Open Austin members have made efforts to create research tools about lobbying, but they found it difficult because few of the records were available in a form that was easy for computers to read, and even the information that was being posted was sometimes [unexpectedly removed](https://www.open-austin.org/blog/2017/10/05/changes-in-access-to-Austins-local-legislative-data).

Now, the city clerk's office has published [several new tables of lobbyist data](https://data.austintexas.gov/browse?q=lobbyist&sortBy=relevance), including client names, subject matter of lobbying, expenditures, and compensation. This covers most of the categories of lobbyist information we asked for in our policy agenda. The new datasets include information extracted from the quarterly lobbyist activity reports, but the reports themselves are also published. The [2016 lobbyist ordinance](http://www.austintexas.gov/department/lobbyists) requires significantly more information than under prior law, and some lobbyists even terminated their registrations to avoid having their information disclosed.

The clerk's office warned us that the tables on the data portal are views on the city's database, so if you link them together you won't exactly get the city database. However, the city plans to post a raw dump of the whole lobbyist database, with an entity relationship diagram and data dictionary. The clerk's office also expressed interest in ideas about how to present the data better, for instance as stored queries. The clerk's office doesn't foresee any more major structural changes to the database unless there are changes to the lobbyist ordinance.

Unfortunately, the current dataset only goes back about a year, and the older data about lobbist registrations and clients isn't coming back online. The clerk's office apparently saved over its old files and thus doesn't have them anymore. The lobbyist registration documents still exist on paper and anyone can come in and look at them, but even those only go back 2 or 3 years before being destroyed.

## City Council Agendas

The most important news for people interested in city council data is probably that the city has finished its transition to a new agenda management system, and it has decided not to deploy the Granicus/Legistar web portal. That means the presentation layer for their website isn't going to change anytime soon, and any Open Austin projects that depend on data beyond what's in the data portal will need to scrape the existing website. Because there's no Legistar web portal, it's unlikely that anyone will be able to use [Councilmatic](https://www.councilmatic.org/) to interface with the City of Austin system automatically.

Also, the city clerk's office doesn't collect or have any data on how the council members vote on agenda items. The office asked last year if the council was interested in starting to collect vote data, and they decided against it, as some council members prefer for their actions to be viewed more as a narrative than as data. For instance, councilmembers wouldn't want constituents to assume that a vote for an amendment always means they want the ordinance to pass in its amended form.

Because the clerk's office and the agenda office are separate, the clerk's office has limited ability to impose a rigid structure on the agenda data it publishes. There are changes and corrections every week, affecting details like public hearing dates, or conditions on board approval of items. Most ordinances and resolutions aren't even assigned a static ID number until they're approved, and maintaining the legislative history is difficult for the clerk's office because there's no unique identifier for an item. This makes it hard for people trying to work with the council's data too.

However, zoning matters do have persistent ID numbers when they come before the council, and the clerk's office is publishing these [on the city data portal](https://data.austintexas.gov/City-Government/Current-Agenda-Item-Dataset-2018-/g9iv-xdsg), along with the available structured data on every agenda item. They plan to publish more historical agenda items with zoning ID numbers soon. Users shouldn't assume the zoning numbers will correspond to the chronological order the zoning matters come before the council. Although we appreciate the city's efforts to publish more data about the council, Open Austin's position is still that the council should publish the councilmembers' votes and should publish ID numbers for every item on its agenda.

## Continue the Conversation

Open Austin's advocacy agenda is intended to help get access to data resources based on community members' demonstrated interest in finding creative ways to use them for the public benefit. Now that the city has released more lobbyist and city council agenda data, it's a good time to build a project around that data at an Open Austin event like a [Community Action Night](https://www.meetup.com/Open-Austin/events/247367149/) or [Civic Hack Saturday](https://www.meetup.com/Open-Austin/events/zfmdhpyxgbkb/).

Join the discussion in the Open Austin community on Slack: [Get an invite](http://slack.open-austin.org/)

RSVP for our future events on Meetup: [RSVP](http://www.meetup.com/Open-Austin/)

[Follow us on Twitter](https://twitter.com/openaustin?lang=en)
& [Like us on Facebook](https://www.facebook.com/Open-Austin-412390968837071/)
