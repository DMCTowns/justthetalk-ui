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

export default function Terms() {
  return (
    <MasterLayout title="JUSTtheTalk - Terms &amp; Conditions">
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
          <div className="breadcrumb-item">Terms &amp; Conditions</div>
        </Paper>

        <Paper
          variant="outlined"
          className="discussionList">
          <Typography
            variant="h5"
            color="textSecondary"
            gutterBottom>
            Terms and Conditions
          </Typography>
          <p>
            By accessing and using this website, you will automatically be taken to have read, understood and accepted
            these terms and conditions and the community standards contained in our{' '}
            <Link href="/charter">
              <a>Charter &amp; Community Standards</a>
            </Link>
            .
          </p>
          <p>
            If you fail to observe any of the provisions of these Terms & Conditions, we reserve the right, at our
            discretion and without notice, to remove any messages and/or to exclude you from the discussion forums.
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Content Standards
          </Typography>
          <p>
            When posting contributions to JUSTtheTalk, you must comply with the spirit of the Community Standards as
            well as the letter. These standards apply to each part of any contribution as well as to its whole.
            JUSTtheTalk has the right to remove, edit, move or close any posts when in breach of the Terms & Conditions
            and/or Community Standards.
          </p>
          <p>
            By submitting your contribution to JUSTtheTalk you warrant that such contribution fulfils the Community
            Standards. You also agree to indemnify us against all legal fees, damages and other expenses that may be
            named by us as a result of your breach of this warranty.
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Privacy Policy
          </Typography>
          <p>
            This site is community run and funded. As a consequence, your personal information will never be passed on
            to a third party without your explicit permission (unless required to do so by relevant authorities) and at
            present there are no foreseeable circumstances under which this permission might be sought.
          </p>
          <p>
            In line with the Data Protection Act, admin discussions are not held for longer than the period necessary to
            allow decisions to be taken and recent decisions reviewed.
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Cookie Policy
          </Typography>
          <p>
            The site uses a small number of cookies solely in order to keep you logged into the site. These cookies do
            not store any personal information about you. If you click on the 'Remember me' button on the login page
            then the cookies will contain a link to your username. There are no third-party cookies, and the cookies
            which are employed have no commercial purpose whatsoever. By continuing to use our site, you agree to the
            placement of cookies on your device.
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            General
          </Typography>
          <p>
            Opinions expressed within these forums are not necessarily the opinions of the site owner(s) or any
            individuals directly or indirectly involved in this website or the companies and individuals associated with
            it. We therefore do not endorse any opinions expressed by any site users in any comments.
          </p>
          <p>
            No liability or responsibility is accepted, taken or assumed for any comments or statements made on this or
            any associated or related website, including the accuracy or truthfulness of any such comments, nor any
            responsibility for the consequences of your acting in reliance on such comments.
          </p>
          <p>
            This site is not proactively moderated, for legal reasons. If you feel that a message breaks site rules, you
            can report it to us immediately using the 'Report' function outlined in the <Link href="/help">Help</Link>{' '}
            section of the site. You do not need to be a member of the site to do so. We will make every effort to
            remove posts within a reasonable time frame, if we determine that removal is appropriate. We may also
            terminate access for users if they are found to be repeatedly posting offensive content.
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Limitation of Liability
          </Typography>
          <p>
            In no event will JUSTtheTalk be liable for any damage whatsoever (including without limitation damages
            relating to reputation, lost revenues or profits, lost data, work stoppage, computer failure or malfunction)
            resulting from or in any way related to the use of any materials posted on or made available in the forums
            or any other website to which a link is provided, even if JUSTtheTalk has been advised of the possibility of
            such damages and regardless of the legal theory on which such damages are based.
          </p>
          <p>
            These Terms & Conditions may be amended by us at our discretion from time to time, and any such amendments
            shall take effect as soon as they are posted on JUSTtheTalk. We therefore suggest that you review it
            periodically.
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
