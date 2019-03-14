---
title:        Open States (Texas)
description:  Contributing to a national project focused on collecting and standardizing state legislative bills
access_at:    https://openstates.org/
project_at:   https://github.com/openstates/openstates/issues/1782
Type:         web application
Contact:      hack@open-austin.com
Categories:   [ Advocacy, Civic Engagement, Data Liberation, Data wrangling, Democracy, Programming, Python, Texas ]
date:         2017-09-29 00:00:00
cfa_stage: Outside
thumb:        openstates.png
screenshot:   Open-States-TX-screenshot.jpg
---

*****************

The goal of [Open States](https://openstates.org/) overall is to publish information about state legislature activities (bills, votes, etc.) in a standard format that can be used by other developers (such as [Influence Texas](https://www.open-austin.org/influence-texas/), an Open Austin project), as well as browsed on their website. The Open States team decided to upgrade the software library that powers each state's web scraper, and that required some code changes to each scraper.

Frustrated with the direction the national government seemed to be going, [Sharon Cichelli](https://github.com/scichelli) joined Open Austin in the hopes of doing something _useful_. She looked over the Open Austin [project ideas](https://github.com/open-austin/project-ideas/) and hit upon this one for upgrading Texas's web scraper. She'd been a software developer for nearly two decades but lately needed to get proficient with the Python programming language, which this project is. This project was perfect for her, she said: it didn't require extensive civics/government knowledge; it was a finite amount of work with clear success criteria (does the new scraper run without errors?); it had step-by-step instructions; and it didn't require deep knowledge of Python, just experience with being careful and meticulous, which she had. She used Open Austin's [Slack](https://slack.open-austin.org) to reach out to [Gregory Foster](https://github.com/gregoryfoster), who had started the effort and was encouraging and positive about her taking it on.

The upgrade is complete, so our scraper runs with the new Open States framework, but the logic in the scraper could still be improved, since the legislature publishes their journals in a slightly different format each session. So if you'd like to contribute, there's an open issue on GitHub that would love your attention: [https://github.com/openstates/openstates/issues/1782](https://github.com/openstates/openstates/issues/1782)

The logo used in this post is by the Open States Team, which licenses the image under [BSD 3-clause](https://github.com/openstates/openstates.org/blob/master/LICENSE).
