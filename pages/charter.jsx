// This file is part of the JUSTtheTalkUI distribution (https://github.com/jdudmesh/justthetalk-ui).
// Copyright (c) 2021 John Dudmesh.

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, version 3.

// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
// General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

import { Paper, Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import MasterLayout from '../layouts/master'

import styles from '../styles/Support.module.scss'

export default function Charter(props) {
  return (
    <MasterLayout title="JUSTtheTalk Charter">
      <div className="container">
        <Paper
          variant="outlined"
          className="breadcrumb">
          <div className="breadcrumb-item">
            <Link href="/">
              <a>
                <HomeIcon color="primary" />
              </a>
            </Link>
          </div>
          <div className="breadcrumb-item">
            <PlayArrowIcon color="action" />
          </div>
          <div className="breadcrumb-item">Charter and Community Standards</div>
        </Paper>

        <Paper
          variant="outlined"
          className="discussionList">
          <Typography
            variant="h5"
            color="textSecondary"
            gutterBottom>
            JUSTtheTalk Charter
          </Typography>
          <p>Welcome to our site.</p>
          <p>
            The aim of JUSTtheTalk is to promote discussion of ideas at all levels. We support free speech, even for
            people we don't agree with or like. We do not, however, support hatred or discrimination. We believe the
            quality of discussion on this site to be its key strength, and so we will never clutter the site with
            useless junk, or with adverts.
          </p>
          <p>We guarantee that this site will remain free at the point of use.</p>
          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Community Standards
          </Typography>
          <p>
            JUSTtheTalk relies on users to make it an enjoyable and interesting place for everyone. We need everyone to
            demonstrate and share intelligence, wisdom and humour and take responsibility for the quality of the
            conversations. Please try and help make the site an intelligent place for discussion and it will be.
          </p>
          <p>
            The following principles will help to keep a positive atmosphere and promote constructive discussion on
            JUSTtheTalk:
          </p>
          <ul>
            <li>Respect other posters, their views, opinions and beliefs and consider your impact on others </li>
            <li>
              Do not be discriminatory on the basis of their age, disability, gender reassignment, race, religion or
              belief, sex, sexual orientation, marriage and civil partnership and pregnancy and maternity
            </li>
            <li>
              Recognise the difference between criticising a particular government, organisation, community or belief
              and attacking individuals
            </li>
            <li>Maintain a reasonable tone even in unreasonable circumstances</li>
            <li>Keep it relevant and try not to veer too far off-topic</li>
            <li>Stay safe and never post personal and/or identifying information</li>
            <li>
              Understand that the conversation belongs to everybody so make the admin team aware of potential problems
            </li>
            <li>Help each other to keep conversations inviting and appropriate.</li>
          </ul>
          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Expectations of Users
          </Typography>
          <p>
            <strong>Usernames</strong>
          </p>
          <p>
            Please be aware of your personal privacy and safety. We strongly recommend not registering with a username
            or email that can be linked to your real-world self.
            <br />
            You can register any username you like, provided the handle is not offensive or an attempt to mimic another
            user.
            <br />
            While sockpuppet accounts are not generally prohibited, you cannot create a sockpuppet account for use to
            avoid a sanction. Any banned user found to have created a sockpuppet account to return to the site will be
            banned.
            <br />
            All posters have the right to anonymity. JUSTtheTalk will not pass on any user’s email address or other
            details unless required by law.
            <br />
          </p>
          <p>
            <strong>Posting Guidelines</strong>
          </p>
          <p>Anyone can start a thread anywhere on the site; however we ask that you:</p>
          <ul>
            <li>
              Try to make the title descriptive of the content. ‘Hey, look at what’s happened!’ is not a useful title
            </li>
            <li>Start a thread in the appropriate folder</li>
            <li>
              Check before starting a thread that there isn’t an existing one that already covers the topic – avoid
              duplication
            </li>
            <li>Don’t start the same thread in several folders</li>
          </ul>
          <p>
            All posts are the responsibility of the user, and users should be aware that their posts are visible to the
            public, and act accordingly.
          </p>
          <p>Posts should:</p>
          <ul>
            <li>Be accurate (where they state facts);</li>
            <li>Be genuinely held (where they state opinions)</li>
            <li>Be civil and respectful</li>
          </ul>
          <p>Posts should not: </p>
          <ul>
            <li>Make personal attacks on other posters or their family members</li>
            <li>Post mindless abuse</li>
            <li>Threaten other posters or the site </li>
            <li>Post other posters’ names, real or otherwise, or personal information relating to another poster</li>
            <li>Troll persistently, including baiting other posters</li>
            <li>Engage in harassment, carrying arguments across threads, or continuing old feuds</li>
            <li>Denounce trolls or suspected sock-puppets of banned users in-thread</li>
            <li>Criticise other posters for reporting, or suspected reporting, of posts.</li>
            <li>
              Publicly name or identify the administrators of the site, regardless of accuracy. They have the same right
              to anonymity as any other member of JUSTtheTalk
            </li>
          </ul>
          <p>
            When posting, all comments users make should follow the Community Standards. This means they should not:
          </p>
          <ul>
            <li>Promote violence or be gratuitously violent</li>
            <li>Be used to impersonate any person or to misrepresent your identity</li>
            <li>Promote any commercial activity or venture, including spamming links and/or advertising</li>
            <li>Spam the same comment across numerous threads</li>
            <li>Be pornographic, sexually explicit, obscene or lewd</li>
            <li>
              Be discriminatory or abusive:
              <ul>
                <li>We will not tolerate racism, sexism, misogyny, homophobia, transphobia or hate-speech</li>
                <li>
                  We don’t allow discrimination, name-calling or insults based on the protected characteristics of the
                  Equality Act 2010 ie. age, disability, gender reassignment, race, religion or belief, sex, sexual
                  orientation, marriage and civil partnership and pregnancy and maternity
                </li>
                <li>
                  We consider disparaging people’s mental health and using terms suggesting mental disability as abuse
                </li>
                <li>We have a specific policy on discussions around gender identity and sex</li>
                <li>We will not tolerate cyber-bullying</li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>Staying on the Right Side of the Law</strong>
          </p>
          <p>Your posts must comply with UK law and the country you’re posting from, so take care not to:</p>
          <ul>
            <li>
              infringe any copyright, database right, trade mark or any other intellectual property, confidentiality or
              privacy rights of any person or organisation
            </li>
            <li>be libellous or defamatory</li>
            <li>
              be in contempt of court (ie. your contribution must not contain anything that risks prejudicing current or
              forthcoming court proceedings)
            </li>
            <li>
              abuse another poster’s anonymity, by deliberate and malicious gathering and use of personal information
            </li>
            <li>
              contain unlawful material (such as material that condones or encourages unlawful acts or encourages others
              to do so, hacks or causes technical disruption to online services or describes how to conduct an unlawful
              act)
            </li>
            <li>
              include a link to a website that contains, or directly links to, material that contravenes any of these
              standards.
            </li>
            <li>otherwise violate any law</li>
          </ul>
          <p>
            <strong>
              Please note that JUSTtheTalk is not actively moderated; administrators only respond to users’ reports, so
              you are strongly encouraged to report any posts which break these guidelines or the site’s Terms and
              Conditions.
            </strong>
          </p>
          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Site Moderation
          </Typography>
          <p>If you feel that a post is against the community standards or the site Terms & Conditions, you can:</p>
          <ul>
            <li>ignore it</li>
            <li>
              use the report function to let the admin team know – with enough information to let administrators know
              what the issue is if it is not obvious
            </li>
          </ul>
          <p>If you have wider concerns about a user's behaviour or pattern of posting you can:</p>
          <ul>
            <li>ignore that poster using the ignore function</li>
            <li>
              report the post with further information, making sure you give sufficient information for the admins to
              understand the reason for your concern.
            </li>
          </ul>
          <p>
            If you do make a report, please do so without engaging in threats or other escalation with other posters
            beforehand.
          </p>
          <p>
            When you report a post or user, you will receive a notification that your report has been received.
            Administrators will review your report as quickly as possible and make a decision. At least three admins
            must agree for an action to be taken, except in urgent circumstances. If a report is from or about an
            administrator, they do not take any part in the moderation. While you will not be notified of any action
            taken, administrators may occasionally make a comment in-thread if warranted.
          </p>
          <p>
            <strong>Administrator Actions</strong>
          </p>
          <p>Several actions can be taken if a post and/or user is determined to have broken site guidelines.</p>
          <p>
            Administrators cannot edit posts to change the spelling, meaning or anything else intended by a user. As a
            result, even if only part of a post is perceived as breaching the community standards, the whole thing may
            be removed.
          </p>
          <p>
            Posts that explicitly refer to or quote from a post that is determined to have broken site guidelines may
            also be removed.
          </p>
          <p>
            A thread may be deleted, where the original premise, content, or a majority of posts break the guidelines or
            terms and conditions. In most cases we prefer to lock a thread, rather than delete, if possible. Where an
            active thread already exists on a particular subject, we may decide to close any duplicate threads and ask
            posters to continue on the original or more active thread.
          </p>

          <p>
            <strong>Sanctions</strong>
          </p>
          <p>
            Sanctions can be applied against users who fail to follow JUSTtheTalk guidelines. This can be anything from
            removing a post, blocking a user from a particular thread, suspension of posting privileges to permanent
            banning.
          </p>
          <p>
            To comply with the Data Protection Act, discussions about user sanctions are not held for longer than the
            period necessary to allow decisions to be taken and recent decisions reviewed.
          </p>
          <p>
            Administrators aim to provide notice and warnings of user sanctions by email, however this doesn’t always
            happen. In the email, we will state how long any sanction will last.
          </p>
          <p>
            Administrators will not enter into discussion of any action taken against posters who fail to follow site
            guidelines. All their decisions are final.
          </p>
          <p>It is JUSTtheTalk policy that administrators are permitted to retain their anonymity.</p>
          <p>
            If you have suggestions or questions about any aspect of community participation on JUSTtheTalk, you can
            write to <a href="help@justthetalk.co.uk">help@justthetalk.co.uk</a>
          </p>
          <p>
            These guidelines should be followed in the context of the{' '}
            <Link href="/terms">
              <a>Terms &amp; Conditions</a>
            </Link>
            .
          </p>
          <p>
            Our privacy policy and cookie policy can be found in the{' '}
            <Link href="/terms">
              <a>Terms &amp; Conditions</a>
            </Link>
            .
          </p>
        </Paper>
      </div>
    </MasterLayout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {}
  }
}
