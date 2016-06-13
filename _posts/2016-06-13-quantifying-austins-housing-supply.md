---
layout: post
title: Quantifying Austin's Housing Supply
date: 2016-06-13
type: post
published: true
thumb: aerial_photo.jpg
thumbalt: Aerial photo of Austin
author:
  first_name: Matt
  last_name: Carey
---

Austin has a serious problem with access to affordable housing. And [some research indicates](http://www.lao.ca.gov/Publications/Report/3345) that increasing the supply of housing can help prevent displacement of lower-income residents from urban areas, even if it's market-rate housing and not part of an affordable housing program. Researchers in Austin are interested in learning about how the city's housing supply has changed, and about how those changes have affected the fortunes of individual neighborhoods. Unfortunately, it's hard to answer that question with the data the city currently releases to the public. A few months ago the city released [decades of historical building permits on its data portal](https://data.austintexas.gov/Permitting/Issued-Construction-Permits/3syk-w9eu), and even more up-to-date records can be found in [Open Austin's Github repository](https://github.com/open-austin/construction-permits), but there's still no clear way to see how many housing units have been demolished or created as a result of each building permit the city issues.

A glance at [Austin's building permit forms](http://www.austintexas.gov/page/building-applications) shows that the city may not have been collecting all the information needed to quantify the housing stock. The forms for single-family homes and duplexes do provide part of the puzzle, because they ask builders what kind of structure was on the land before the construction, and what will be there after construction is finished.

![part of a residential building permit application](/assets/images/residential_permit_form.png)

The city uses the same form for building multifamily apartment buildings that it uses for nonresidential buildings. This form has a field for "# of units," but it's not always clear whether applicants interpreted that to mean the number of units where work will be performed, the number of units that will be added if the permit is granted, or just the total number of units in the building.

![part of a commercial building permit application](/assets/images/commercial_permit_form.png)

The biggest problem is the separate form for demolition, which doesn't specifically ask how many units are being eliminated.

![part of a demolition permit application](/assets/images/demo_form.png)

The table below shows some typical data collected from the city's permit forms for activities at a single address, 2819 Rio Grande. In 2007, the dormitory that stood there was demolished and replaced with new student housing. The number of "HousingUnits" associated with the demolition is zero, even though it would be more useful to know how many old units were being eliminated. Then there are 85 housing units reported for the "Shell" work on the new building. After that, the builders apparently report the same 85 housing units in the "Finish Out" phase. For a researcher dealing with hundreds of thousands of permit records, it would be tough if not impossible to automate a count of changes in the housing supply based on this dataset.

 PermitNum |PermitClass |WorkClass |ProjectName |Description |IssuedDate |NumberOfFloors |HousingUnits
 --------- | ---------- | -------- | ---------- | ---------- | --------- | ------------- | -----------
6962 |2007-112437 BP |C- 649 Demolition All Other Bldgs Com |Demolition |2819 RIO GRANDE ST |dEMO A DORMITORY |2007-05-03 |3 |0
13488 |2007-156082 BP |C- 321 Pkg Garage Bldg & Open Deck |New |2819 RIO GRANDE ST garage |New construction 3 story parking 2 stories below grade 1 story grade |2007-10-09 |3 |0
13489 |2007-156083 BP |C- 105 Five or More Family Bldgs |Shell |2819 RIO GRANDE ST |New construction 5 story wood frame apartment over 3 story parking garage |2007-10-09 |8 |85
13490 |2007-156085 BP |C-1001 Commercial Finish Out |Remodel |2819 RIO GRANDE ST |Tenant finish out for unit details 1st Floor |2007-10-09 |8 |3
13491 |2007-156086 BP |C-1001 Commercial Finish Out |Remodel |2819 RIO GRANDE ST |Tenant finish out for unit details 2nd Floor |2007-10-09 |8 |16
13492 |2007-156087 BP |C-1001 Commercial Finish Out |Remodel |2819 RIO GRANDE ST |Tenant finish out for unit details 3rd Floor |2007-10-09 |8 |16
13493 |2007-156088 BP |C-1001 Commercial Finish Out |Remodel |2819 RIO GRANDE ST |Tenant finish out for unit details 4th Floor |2007-10-09 |8 |16
13494 |2007-156089 BP |C-1001 Commercial Finish Out |Remodel |2819 RIO GRANDE ST |Tenant finish out for unit details 5th Floor |2007-10-09 |8 |17
13495 |2007-156090 BP |C-1001 Commercial Finish Out |Remodel |2819 RIO GRANDE ST |Tenant finish out for unit details 6th Floor |2007-10-09 |8 |17

To help advance the study of housing availability, Open Austin will make it a priority to convince the city to collect specific data from permit applicants about how many units are being added or removed from the housing supply, and to open up any other data the city has about housing supply from other sources. If you're interested in improving the permit application process, also visit Open Austin's [project to improve the city's building permit website](https://github.com/open-austin/project-ideas/issues/68).