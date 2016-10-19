---
title:        PANDA | Community Data Portal
description:  Community-curated data index for non-city open data
access_at:    https://open-austin.org/data-portal/
Type:         web application
Status:       Alpha
Contact:      amaliebarras@gmail.com
Categories:   [ data, access, austin ]
date:         2016-10-11 00:00:00
screenshot:   closeup.png
---

*****************

## Community Data Portal Retrospective

The people of Austin's network for data access, or PANDA, was a project completed by several members of Open Austin, to accomplish the goal of providing a one-stop-shop for non-city Open Datasets. It was a custom design of the platform JKAN, created by Philadelphia CDO, Tim Wiesnewski. From concepting to MVP launch, PANDA took about four months to come to life. Late this summer, an Austin startup called data.world announced that they had built a platform solution for not only indexing, but also hosting and linking Open Austin's data, so the PANDA team decided it was better to use their platform, created an Open Austin org page for their open data, and disbanded to work on other civic hacking endeavors. 

## What We Did

### APRIL

* [Identified the need](https://github.com/open-austin/project-ideas/issues/66) for a Community Resource to index our Open Data
* Selected [JKAN](https://github.com/timwis/jkan-demo) as a platform since it was jekyll-based and had no backend
* Deployed basic version of JKAN

### MAY
* [Redesigned it](https://github.com/open-austin/data-portal) to increase usability and approachability for new data portal users
* [Began implementing custom design](https://github.com/open-austin/data-portal/issues) and a couple new features

### JUNE
* Continued working on new features and authentication at ATX Hack4Change
* Learned about [data.world](data.world), an open data platform, with backend, set to launch in late summer
* Started planning Panda 2.0, discussed moving off of JKAN

### JULY
* Authentication is fixed!
* [data.world](data.world) launches preview, invites still elusive

### AUGUST 
* MVP is launched, began collecting feedback
* [data.world](data.world) opens community to Open Austin
* Open Austin posts datasets on [data.world](data.world)

### SEPTEMBER
* [data.world](data.world) opens registration to all users

## What We Did Well

#### Researched Technologies
There are a surprising amount of options for Open Data platforms. The City of Austin is hosted on a platform called Socrata, which Open Austin was also granted an instance of, but there were limitations to that license. There was another option called OpenDataSoft, but it was closed source and we didn't love that. Neither CKAN nor DKAN are open source but we were worried about the cost of maintaining the backend. We went with JKAN because it is backend free, so the data maintenance was on the poster, and also jekyll-based, which many people in Open Austin were familiar with.

#### Documented Issues
Throughout the whole process, we used [GitHub issues](https://github.com/open-austin/data-portal/issues/) to track, categorize, assign, and discuss tasks. This enabled us to collaborate with the creator of JKAN on occasion, too. 


#### Scoped planned versions
We had a lot of ideas for PANDA, but we wanted to get a MVP out as quickly as possible so we could begin sharing data, and then improve from there. 

#### Quit once we had a better option
Althought we had grand plans for a PANDA 2.0, as soon as we realized that there was a solution that would meet most of our needs, we paused to let that catch up, and put our energy into other efforts.

## What We Could Have Done Better

#### More incremental development
PANDA 1.0 could have and should have just been JKAN, but I didn't know how to test my designs locally without deploying via gh-pages to github. I learned that it is possible to do that, and I should have just asked to begin with, but this was my learning experience with that. 

#### Started collecting feedback sooner
Design feedback was collected within the slack channel, but I'm talking about functionality feedback. Usability testing could have started happening sooner if we had developed more incrementally. 

#### Defined roles
Project champion should not equal project manager. But when you're talking about civic hacking, that is the underlying assumption. In this case, the project needed a decisionmaker to move it forward, and I was in that role, but we could have benefitted from more technical expertise

#### Kept up with fixes on the original JKAN
Eventually our authentication broke. And I'm not sure why or how, but I have a feeling someone would have fixed it on the main branch.

## What's Next
As we alluded to earlier, we will use our org page on [data.world](data.world) to host our open datasets. We will also continue working with them to keep learning how to best utilize the platform for our community (example: adding datasets to organization pages, so all our members can build our org's assets)


