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
    <MasterLayout title="Gender Identity and the Rights of Women and Girls">
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
          <div className="breadcrumb-item">Gender Identity and the Rights of Women and Girls</div>
        </Paper>

        <Paper
          variant="outlined"
          className="discussionList">
          <Typography
            variant="h5"
            color="textSecondary"
            gutterBottom>
            Discussions Around Gender Identity and the Rights of Women and Girls
          </Typography>
          <p>
            There have previously been many complaints and reports about the ‘Transgender’ threads, from multiple
            participants and all sides of the debate. The majority of posters on such threads have been civil, and have
            reported problematic posts, but the conversation around these topics became fraught and divisive. We have
            put a great deal of thought into formulating a moderation policy that will allow civil discussion to take
            place, modelled but not entirely in line with the policies of other sites such as Mumsnet.
          </p>
          <p>
            <strong>
              The JUSTtheTalk Charter clearly states that "We support free speech, even for people we don't agree with
              or like. We don't support hatred or discrimination."
            </strong>
          </p>
          <p>
            In a change from our earlier policy, posters are welcome to create threads to discuss different aspects of
            women’s and transgender rights. For the sake of coherence and ease of moderation, we ask that you keep all
            topic-related discussion to the Issues folder. Posts or offshoot threads in other folders may be deleted. In
            all cases, the following policy applies:
          </p>
          <p>
            <strong>Do:</strong>
          </p>
          <ul>
            <li>Maintain a civil, respectful and constructive tone.</li>
            <li>
              Respect other posters, their views, opinions and beliefs and consider your impact on others when making
              your contribution.
            </li>
            <li>
              Apply self-policing - if you think someone has gone too far, tell them, even if they are apparently on the
              same side of the gender discussion.
            </li>
            <li>
              Report any posts you see that break the Terms & Conditions and Community Standards, or are in breach of
              this policy . This is important, as for legal reasons the admins are unable to proactively moderate the
              site. We therefore rely on user reports. Please be as specific as possible, as one-word reports do not
              assist in giving context.
            </li>
            <li>
              Consider how your post would be viewed by others if applied to any other grouping, whether by gender,
              sexuality, nationality, religion or skin colour.
            </li>
          </ul>
          <p>
            <strong>Don't:</strong>
          </p>
          <ul>
            <li>
              Make sweeping generalisations about any group, including trans people and gender-critical feminists; you
              wouldn’t do so for any other protected group.
            </li>
            <li>
              Make personal attacks, or be derogatory or aggressive towards other posters or individuals.This includes
              terms such as TERF, cis, TIM or apologist, as well as persistently referring to trans people using
              pronouns relating to their original sex, or dead-naming them. . Where a person has committed a sex-based
              crime, we may use our discretion on deleting posts where pronoun use is in dispute.{' '}
            </li>
            <li>
              Make comments about individuals as if those individuals were representative of a whole community. This
              includes posting links to stories about particular individuals for the purpose of deriding them or their
              beliefs.
            </li>
            <li>Make comments that could prejudice ongoing legal cases, or assume guilt before an outcome is known.</li>
            <li>
              Call any opinion you don’t agree with ‘transphobia’ or TERFism. We allow people to discuss biology and
              scientific evidence.
            </li>
            <li>Allow this to become a safe space for actual transphobia or anti-feminism.</li>
          </ul>
          <p>
            For reasonable debate to take place, opposing views which are within the JUSTtheTalk Terms &
            Conditions/Community Standards should be tolerated, even if you may personally disagree with them. Remember
            to recognise the difference between criticising a specific government, organisation, group or belief and
            attacking people on the basis of their race, sex, religion, gender reassignment, sexual orientation,
            disability or age.
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
